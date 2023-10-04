import '@core/declarations'
import { FileExistsSync } from './utils'

export interface ConfigInterface {
    PORT: number
    ENVIRONMENT: string;
    DB_CONNECTION_STRING: string
    JWT_SECRET: string
    JWT_EXPIRY: string
    ITEMS_PER_PAGE: number

}

export default (): ConfigInterface => {
    const { NODE_ENV } = process.env
    const environment = NODE_ENV?.toLowerCase()
    const environmentFileLocation = `${__dirname}/../environments`
    const environmentFilePath = `${environmentFileLocation}/${environment}`
    if (FileExistsSync(environmentFilePath)) {
        // eslint-disable-next-line
        const configuration: ConfigInterface = (require(environmentFilePath).default)()
        return configuration
} else {
        Logger.error(App.Message.Error.MissingEnvFile({ environment }))
        throw Error(App.Message.Error.MissingEnvFile({ environment }))
    }
}