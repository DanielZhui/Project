const env = process.env.NODE_ENV
console.log(env)

// db config
let MYSQL_CONF

if (env === "dev") {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: 520,
        prot: "3306",
        database: "blog"
    }
}

if (env === "production") {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: 520,
        prot: "3306",
        database: "blog"
    }
}

module.exports = {
    MYSQL_CONF
}