import { Response } from 'express'
import '@core/declarations'

export default function (data = {}): Response {
    const statusCode = 500
    const {
        isSuccess = false,
        message = App.Message.Error.InternalServerError(),
        error = null
    }: {
        isSuccess?: boolean
        message?: string,
        error?: string
    } = data


    const resultant = {
        isSuccess,
        message,
        statusCode,
        error

    }


    // All Done
    return this.status(statusCode).json(resultant)
}