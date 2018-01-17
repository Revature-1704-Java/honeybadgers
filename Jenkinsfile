pipeline {
  agent any
  stages {
    stage('stop spring boot') {
      steps {
        sh 'sudo service mvnAngular stop'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'System init.d stop Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      } 
    }
    
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
    stage('clean') {
      steps{
        sh 'mvn clean'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Clean Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('install') {
      steps{
        sh 'mvn install'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Install Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('package') {
      steps{
        sh 'mvn package'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Package Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('start spring boot') {
      steps {
        sh 'sudo service mvnAngular start'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'System init.d start Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      } 
    }
  }
}
