import '@core/declarations'
import { Router } from 'express'
import flightLogRouter from '@modules/flight-log/routes'

const router = Router()

router.use('/flight', flightLogRouter)
export const AppRoutes = router
