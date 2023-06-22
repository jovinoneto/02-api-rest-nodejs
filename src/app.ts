import fasty from 'fastify'

import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fasty()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
