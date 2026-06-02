pipeline {
    agent any

    environment {
        ACR_LOGIN_SERVER = 'medcoredevqkoqpy.azurecr.io'
        IMAGE_NAME       = 'medcoredevqkoqpy.azurecr.io/medcore-backend'
        IMAGE_TAG        = "${IMAGE_NAME}:${BUILD_NUMBER}"
        SONAR_SERVER     = 'sonar'
        SONAR_CREDS      = 'sonar-token'
        GITHUB_CREDS     = 'github-credentials'
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
                echo ">>> Building Docker image: ${IMAGE_TAG}"
                sh "docker build -t ${IMAGE_TAG} ./backend"
            }
        }

        stage('Trivy Image Scan') {
            steps {
                echo ">>> Scanning Docker image ${IMAGE_TAG} with Trivy..."
                sh """
                    docker run --rm \
                        -v /var/run/docker.sock:/var/run/docker.sock \
                        aquasec/trivy image \
                            --severity HIGH,CRITICAL \
                            ${IMAGE_TAG} || true
                """
            }
        }

        stage('Docker Push') {
            steps {
                echo ">>> Logging in to ACR and pushing image: ${IMAGE_TAG}"
                withCredentials([usernamePassword(credentialsId: 'acr-credentials', passwordVariable: 'ACR_PW', usernameVariable: 'ACR_USER')]) {
                    sh """
                        echo \$ACR_PW | docker login ${ACR_LOGIN_SERVER} -u \$ACR_USER --password-stdin
                        docker push ${IMAGE_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            echo '>>> [Cleanup] Removing local Docker image to reclaim disk space...'
            sh "docker rmi ${IMAGE_TAG} || true"
        }
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please review the logs above.'
        }
    }
}