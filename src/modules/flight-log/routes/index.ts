import { Wrap } from '@core/utils'
import { Router } from 'express'
import controllers from '../controllers'

const router = Router()

router.get('/get-logs', Wrap(controllers.GetLogs))
router.post('/insert-log', Wrap(controllers.InsertLog))

export default router
