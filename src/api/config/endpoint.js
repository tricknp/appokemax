const endpoint = {
    get: (baseUrl) => {
        return baseUrl || process.env.VUE_APP_BASEURL;
    }
};

export default endpoint;