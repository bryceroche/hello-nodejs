module.exports = {
  apps: [{
    name: 'hello-nodejs',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-149-95-169.us-west-2.compute.amazonaws.com',
      key: '~/Desktop/hello-nodejs/hello-nodejs/ec2_expressv1.pem',
      ref: 'origin/master',
      repo: 'https://github.com/bryceroche/hello-nodejs',
      path: '/home/ubuntu/server/hello-nodejs',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}