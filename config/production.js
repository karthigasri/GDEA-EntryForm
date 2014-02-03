// production configuration
// author: Kirk Austin
module.exports = {
    environment: 'production',
    server: {
        host: 'fwprd-idx-mon.gensler.ad',
        port: 8888
    },
    javaWebServices: {
        host: 'fwprd-intr-ws1.gensler.ad',
        port: 8080,
        url: "http://fwprd-intr-ws1.gensler.ad"
    },
    ssl: {
        certificate: '/var/node/gensler.com.crt',
        key: '/var/node/gensler.com.key'
    },
    security: {
        /*vendor: 'onelogin',
        appId: ''*/
    },
    log: {
        /* set to 'debug' or 'trace' for finer grained debugging */
        level: 'info'
    }
};
