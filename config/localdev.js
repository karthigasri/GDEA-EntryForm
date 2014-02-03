// local configuration
// author: Kirk Austin
module.exports = {
    environment: 'localdev',
    server: {
        host: 'localhost',
        port: 8443
    },
    javaWebServices: {
        host: 'fwdev-intr-ws1.gensler.ad',
        port: 8080,
        url: "http://fwdev-intr-ws1.gensler.ad"
    },
    ssl: {},
    security: {
        /*vendor: 'onelogin',
        appId: ''*/
    },
    log: {
        /* set to 'debug' or 'trace' for finer grained debugging */
        level: 'info'
    }
};
