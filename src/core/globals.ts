import Config, { ConfigInterface } from '@config'
import { Logger } from './logger'
import { GenerateCallableMessages } from './utils'
import messages from '../response-messages'

// Database Models
import FlightLogModel from '@models/flight-log'
const config: ConfigInterface = Config()
// Export Global Variables
export const Global: any = global
Global.Logger = Logger
Global.App = {
	Config: config,
	Message: GenerateCallableMessages(messages),
	Models: {
		FlightLog: FlightLogModel,
	},
}
