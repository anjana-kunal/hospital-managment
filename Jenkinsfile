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

        // -----------------------------------------------------------------------
        // Stage 8 – GitOps: Update Kubernetes Manifest
        // Patches the image tag in the deployment manifest and pushes the commit
        // back to GitHub so ArgoCD picks up the new image automatically.
        // "[skip ci]" in the commit message prevents Jenkins from re-triggering.
        // -----------------------------------------------------------------------
        stage('GitOps: Update Kubernetes Manifest') {
            environment {
                // Derive just the tag portion (e.g. "42") from the full image reference
                // so sed can replace only the tag field in the YAML.
                GIT_REPO_URL = 'https://github.com/anjana-kunal/hospital-managment.git'
                MANIFEST_DIR = 'k8s/apps/medcore-azure'
                MANIFEST_FILE = 'deployments.yaml'
                // For a Helm-based setup replace MANIFEST_FILE with 'values.yaml'
                // and adjust the sed pattern below to match your image.tag key.
            }
            steps {
                echo '>>> Updating Kubernetes manifest with new image tag for ArgoCD...'

                // Inject the GitHub PAT stored as Username/Password credential.
                // GIT_USER  → the GitHub username (or any string for a PAT login)
                // GIT_TOKEN → the Personal Access Token used as the password
                withCredentials([usernamePassword(
                    credentialsId: "${GITHUB_CREDS}",
                    usernameVariable: 'GIT_USER',
                    passwordVariable: 'GIT_TOKEN'
                )]) {
                    sh '''
                        set -e  # Exit immediately on any error

                        # ── 1. Clone into a temporary directory ──────────────────────────────
                        TEMP_DIR=$(mktemp -d)
                        echo ">>> Cloning repository into ${TEMP_DIR}"

                        # Embed credentials in the URL so git can push without an interactive prompt.
                        # The token is masked in Jenkins logs by withCredentials.
                        git clone "https://${GIT_USER}:${GIT_TOKEN}@github.com/anjana-kunal/hospital-managment.git" "${TEMP_DIR}"

                        cd "${TEMP_DIR}"

                        # ── 2. Configure a Jenkins bot identity ───────────────────────────────
                        git config user.email "jenkins-bot@medcore.ci"
                        git config user.name  "Jenkins CI Bot"

                        # ── 3. Patch the image tag in the deployment manifest ─────────────────
                        # The actual YAML uses the short image name: "image: medcore-backend"
                        # We replace it with the fully-qualified ACR image + BUILD_NUMBER tag.
                        # Only backend containers are updated (not medcore-frontend).
                        #
                        # ┌─ For a plain deployments.yaml ─────────────────────────────────────┐
                        sed -i "s|image: medcore-backend.*|image: ''' + env.IMAGE_TAG + '''|g" \
                            "${MANIFEST_DIR}/${MANIFEST_FILE}"
                        #
                        # ┌─ For a Helm values.yaml (uncomment and adjust as needed) ──────────┐
                        # sed -i "s|tag:.*|tag: \\"''' + env.BUILD_NUMBER + '''\\" |g" \
                        #     "${MANIFEST_DIR}/values.yaml"

                        # ── 4. Commit and push ────────────────────────────────────────────────
                        git add "${MANIFEST_DIR}/${MANIFEST_FILE}"

                        # Check whether there is actually something to commit
                        # (avoids a failure if the tag was somehow already up to date)
                        if git diff --cached --quiet; then
                            echo ">>> No manifest changes detected – skipping commit."
                        else
                            git commit -m "ci: update medcore-backend image to ''' + env.IMAGE_TAG + ''' [skip ci]"
                            git push origin main
                            echo ">>> Manifest updated and pushed successfully."
                        fi

                        # ── 5. Clean up the temp clone ────────────────────────────────────────
                        cd /
                        rm -rf "${TEMP_DIR}"
                        echo ">>> Temp directory removed."
                    '''
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