import '@core/declarations'
import { Schema, model as Model } from 'mongoose'
import constant from '@core/constants'

export interface IFlightLog {
	name: string
    request: Schema.Types.Mixed
    response: Schema.Types.Mixed
    companyId: string
    source: string
    sourceFrom: string
    cartId: string
    type: string
    traceId: string
}

const FlightLogSchema = new Schema<IFlightLog>(
	{
        name: String,
        request: Schema.Types.Mixed,
        response: Schema.Types.Mixed,
        companyId: String,
        source: String,
        sourceFrom: String,
        cartId: String,
        type: String,
        traceId: String
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const FlightLogModel = Model(constant.MODELS.FLIGHT_LOG, FlightLogSchema)
export default FlightLogModel
