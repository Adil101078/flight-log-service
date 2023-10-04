import requestValidator from '@helpers/request-validator.helper'
import { Request, Response } from 'express'
import { InsertLogDTO } from '../dto'

export default async function InsertLog(req: Request, res: Response) {
    const { dataArray } = req.body
    const error = requestValidator(InsertLogDTO, req.body)

    if(error) {
        return res.unprocessableEntity({ error })
    }
 	const data = await App.Models.FlightLog.insertMany(dataArray)
	return res.created({
		message: App.Message.Success.LogInserted(),
		data,
	})
}
