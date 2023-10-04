export default {
    GeneralMessage:{
        StopServer: `Press CTRL-C to stop.`,
        ServerRunningOn: `App is running at http://localhost:`
    },
    Success:{
        Success: `Success.`,
        Created: `Created.`,
        DatabaseConnected: 'Database Connected Successfully.',
        WelcomeMsg: `Welcome.`,
        FlightLogFetched: 'Flight logs fetched successfully.',
        LogInserted: 'Logs inserted successfully.'
    },
    Error:{
        NotFound: `Not found.`,
        BadRequest:`Bad Request.`,
        Unauthorized: `Unauthorized.`,
        InternalServerError:`Something went wrong.`,
        UnprocessableEntity: `Unprocessable Entity.`,
        UrlNotFound: `Route '<%-url%>' not found on this server.`,
        SessionExpired: `Your session has been expired. Please login again.`,
        DatabaseConnectionFailed: 'Database Connection Failed.',
        MissingEnvFile: `Missing environment file for NODE_ENV=<%-environment%>`,
        UncaughtException: `uncaughtException`,
        UnhandleRejection: `unhandledRejection`,
        _UncaughtException:`UNCAUGHT EXCEPTION!!! Shutting Down...`,
        _UnhandleRejection: `UNHANDLED REJECTION!!! Shutting Down...`,

    }
}