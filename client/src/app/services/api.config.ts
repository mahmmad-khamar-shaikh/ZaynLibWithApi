const endpoints = {
    'fetchbook': '/api/books'
};

const ApiConfig = {
    getUrl: (api: string, endpoint: string): string => {
        if (endpoints.hasOwnProperty(endpoint)) {
            return api + endpoint;
        }
    }
};

export { ApiConfig}