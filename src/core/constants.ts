const constant = {
    DEVELOPMENT: 'development',
    X_POWERED_BY:'x-powered-by',
    PORT: 5000,
    API_VERSION: '/api/v1',
    MODELS:{
        FLIGHT_LOG: 'flightlogs'
    },
    FLIGHT:{
        EXCLUDE_FIELDS: ['traceId', 'companyId', 'cartId', 'type', 'request', 'response', 'createdAt', 'updatedAt']
    }
}

export default constant