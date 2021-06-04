import Router from '@koa/router'
import { registerController } from '../controller/auth'

const router = new Router({
  prefix: '/auth'
})

router.get('/test', async ctx => {
  ctx.body = 'auth test router'
})

/**
 * 用户注册接口
 * /auth/register
 */
 router.post('/register', async ctx => {
  ctx.body = await registerController(ctx.request.body)
})

export default router