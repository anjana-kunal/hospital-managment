pipeline {
    agent any

    environment {
        ACR_LOGIN_SERVER    = 'medcoredevqkoqpy.azurecr.io'
        
        // Define both Backend and Frontend image tags
        BACKEND_IMAGE_NAME  = 'medcoredevqkoqpy.azurecr.io/medcore-backend'
        BACKEND_IMAGE_TAG   = "${BACKEND_IMAGE_NAME}:${BUILD_NUMBER}"
        
        FRONTEND_IMAGE_NAME = 'medcoredevqkoqpy.azurecr.io/medcore-frontend'
        FRONTEND_IMAGE_TAG  = "${FRONTEND_IMAGE_NAME}:${BUILD_NUMBER}"
        
        SONAR_SERVER        = 'sonar'
        SONAR_CREDS         = 'sonar-token'
        GITHUB_CREDS        = 'github-credentials'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '>>> Checking out source code from GitHub...'
                git credentialsId: "${GITHUB_CREDS}", url: 'https://github.com/anjana-kunal/hospital-managment.git', branch: 'main'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SCANNER_HOME = tool 'sonar-scanner'
            }
            steps {
                echo '>>> Running SonarQube static code analysis...'
                withSonarQubeEnv('sonar') {
                    sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=medcore-backend -Dsonar.projectName='MedCore Backend' -Dsonar.sources=."
                }
            }
        }

        stage('Quality Gate') {
            steps {
                echo '>>> Waiting for SonarQube Quality Gate result...'
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Trivy FS Scan') {
            steps {
                echo '>>> Downloading Trivy binary and scanning the filesystem...'
                sh '''
                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b .
                    ./trivy fs --severity HIGH,CRITICAL . || true
                '''
            }
        }

        stage('Docker Build') {
            steps {
                // 1. Inject the Frontend Environment File
                echo '>>> Injecting Frontend Environment File...'
                withCredentials([file(credentialsId: 'frontend-env', variable: 'SECRET_ENV_FILE')]) {
                    sh 'cp $SECRET_ENV_FILE ./frontend/.env'
                }
                
                // 2. Build BOTH Docker Images
                echo ">>> Building Backend Docker image: ${BACKEND_IMAGE_TAG}"
                sh "docker build -t ${BACKEND_IMAGE_TAG} ./backend"
                
                echo ">>> Building Frontend Docker image: ${FRONTEND_IMAGE_TAG}"
                sh "docker build --no-cache -t ${FRONTEND_IMAGE_TAG} ./frontend"
            }
        }

        stage('Trivy Image Scan') {
            steps {
                // Scan BOTH images
                echo ">>> Scanning Backend image ${BACKEND_IMAGE_TAG} with Trivy..."
                sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image --severity HIGH,CRITICAL ${BACKEND_IMAGE_TAG} || true
                """
                
                echo ">>> Scanning Frontend image ${FRONTEND_IMAGE_TAG} with Trivy..."
                sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image --severity HIGH,CRITICAL ${FRONTEND_IMAGE_TAG} || true
                """
            }
        }

        stage('Docker Push') {
            steps {
                echo ">>> Logging in to ACR and pushing both images..."
                withCredentials([usernamePassword(credentialsId: 'acr-credentials', passwordVariable: 'ACR_PW', usernameVariable: 'ACR_USER')]) {
                    sh """
                        echo \$ACR_PW | docker login ${ACR_LOGIN_SERVER} -u \$ACR_USER --password-stdin
                        docker push ${BACKEND_IMAGE_TAG}
                        docker push ${FRONTEND_IMAGE_TAG}
                    """
                }
            }
        }

        stage('GitOps: Update Kubernetes Manifest') {
            environment {
                GIT_REPO_URL = 'https://github.com/anjana-kunal/hospital-managment.git'
                MANIFEST_DIR = 'k8s/apps/medcore-azure'
                MANIFEST_FILE = 'deployments.yaml'
            }
            steps {
                echo '>>> Updating Kubernetes manifest with new image tags for ArgoCD...'
                withCredentials([usernamePassword(credentialsId: "${GITHUB_CREDS}", usernameVariable: 'GIT_USER', passwordVariable: 'GIT_TOKEN')]) {
                    sh '''
                        set -e
                        TEMP_DIR=$(mktemp -d)
                        git clone "https://${GIT_USER}:${GIT_TOKEN}@github.com/anjana-kunal/hospital-managment.git" "${TEMP_DIR}"
                        cd "${TEMP_DIR}"

                        git config user.email "jenkins-bot@medcore.ci"
                        git config user.name  "Jenkins CI Bot"

                        # THESE ARE THE TWO FIXED LINES!
                        sed -i "s|image: .*medcore-backend.*|image: ''' + env.BACKEND_IMAGE_TAG + '''|g" "${MANIFEST_DIR}/${MANIFEST_FILE}"
                        sed -i "s|image: .*medcore-frontend.*|image: ''' + env.FRONTEND_IMAGE_TAG + '''|g" "${MANIFEST_DIR}/${MANIFEST_FILE}"

                        git add "${MANIFEST_DIR}/${MANIFEST_FILE}"

                        if git diff --cached --quiet; then
                            echo ">>> No manifest changes detected – skipping commit."
                        else
                            git commit -m "ci: update backend and frontend images to build ''' + env.BUILD_NUMBER + ''' [skip ci]"
                            git push origin main
                            echo ">>> Manifest updated and pushed successfully."
                        fi

                        cd /
                        rm -rf "${TEMP_DIR}"
                    '''
                }
            }
        }
    }

    post {
        always {
            echo '>>> [Cleanup] Removing local Docker images to reclaim disk space...'
            sh "docker rmi ${BACKEND_IMAGE_TAG} || true"
            sh "docker rmi ${FRONTEND_IMAGE_TAG} || true"
        }
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please review the logs above.'
        }
    }
}