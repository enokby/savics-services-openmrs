module.exports = {
    port: 3999,
    database : {
        host: "localhost",
        port: '3307',
        user: "root",
        password: "molotov",
        name: "mrsn",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    openmrs: {
        base_url: "http://localhost:8081/openmrs/",
        api_base_url: "http://localhost:8081/openmrs/rest/api/v1/"
    }
};