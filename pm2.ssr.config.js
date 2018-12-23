module.exports = {
  apps: [
    {
      name: 'WEBAPP',
      script: 'server.build.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: '',

      exec_mode: 'cluster',
      instances: 2,
      autorestart: true,
      watch: ['./dist'],
      restart_delay: 10000,
      kill_timeout: 10000,
      // process.env.NODE_APP_INSTANCE === 0
      instance_var: 'INSTANCE_ID',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_LIVE: 'live',
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_LIVE: 'live',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    }
  ],
};
