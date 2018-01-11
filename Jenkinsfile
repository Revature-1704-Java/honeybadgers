pipeline {
    agent any

    stages {
  stage('import') {
    steps{ 
      try{
        git 'https://github.com/Revature-1704-Java/honeybadgers.git'
      }
      catch(exc) {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Github Poll Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
      }
    }
  }
  stage('clean') {
    steps{
      try {
          sh 'mvn clean'
      }
      catch(exc) {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Clean Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
      }
    }
  }
  stage('package') {
    steps{
      try{
          sh 'mvn package'
      }
      catch(exc) {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Package Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
      }
    }
  }
  stage('deploy') {
    steps{
      try {
          sh 'mvn tomcat7:redeploy'
      }
      catch(exc) {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Deployment Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
      }
    }
  }
  stage('success') {
    steps{
      slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Green', message: 'Build Success', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
    }
  }
}
}
