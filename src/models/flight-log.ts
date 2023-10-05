import '@core/declarations'
import { Schema, model as Model } from 'mongoose'
import constant from '@core/constants'

export interface IFlightLog {
	name: string
    request: Schema.Types.Mixed
    response: Schema.Types.Mixed
    company_id: string
    source: string
    source_from: string
    cart_id: string
    type: string
    trace_id: string
}

const FlightLogSchema = new Schema<IFlightLog>(
	{
        name: String,
        request: Schema.Types.Mixed,
        response: Schema.Types.Mixed,
        company_id: String,
        source: String,
        source_from: String,
        cart_id: String,
        type: String,
        trace_id: String
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const FlightLogModel = Model(constant.MODELS.FLIGHT_LOG, FlightLogSchema)
export default FlightLogModel
