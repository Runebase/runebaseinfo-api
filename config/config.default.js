const path = require('path')
const Redis = require('ioredis')

const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: 'your_password',
  db: 0
}

exports.keys = 'runebaseinfo-api'

exports.security = {
  csrf: {enable: false}
}

exports.middleware = ['ratelimit']

exports.redis = {
  client: redisConfig
}

exports.ratelimit = {
  db: new Redis(redisConfig),
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total',
  },
  disableHeader: false,
  errorMessage: 'Rate Limit Exceeded',
  duration: 10 * 60 * 1000,
  max: 10 * 60
}

exports.io = {
  redis: {
    ...redisConfig,
    key: 'runebaseinfo-api-socket.io'
  },
  namespace: {
    '/': {connectionMiddleware: ['connection']}
  }
}

exports.sequelize = {
  dialect: 'mysql',
  database: 'runebase_mainnet',
  host: 'localhost',
  port: 3306,
  username: 'runebaseinfo',
  password: 'runebaseinfo'
}

exports.runebase = {
  chain: 'mainnet'
}

exports.runebaseinfo = {
  path: path.resolve('..', 'runebaseinfo'),
  port: 3001,
  rpc: {
    protocol: 'http',
    host: 'localhost',
    port: 9432,
    user: 'runebaseinfo',
    password: 'runebaseinfo'
  }
}

exports.cmcAPIKey = null
