import { ConfigInterface } from '@config'
import dotenv from 'dotenv'
dotenv.config()

export default (): ConfigInterface => {
    return {
        PORT: +process.env.PORT,
        ENVIRONMENT: process.env.NODE_ENV,
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRY: process.env.JWT_EXPIRY,
        ITEMS_PER_PAGE: Number(process.env.ITEMS_PER_PAGE),
    }
}