pipeline {
    agent any
    stages {
  stage('import') {
    steps{ 
        git 'https://github.com/Revature-1704-Java/honeybadgers.git'
    }
post {
    failure {
      slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Github Poll Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
      sh 'exit 1'
    }
  }
  }
  }
}
