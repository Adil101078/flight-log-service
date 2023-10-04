import { Request, Response } from 'express'

export default async function InsertLog(req: Request, res: Response) {
	const data = await App.Models.FlightLog.insertMany(req.body)
	return res.created({
		message: App.Message.Success.LogInserted(),
		data,
	})
}
