const querystring = require("querystring")

const serverHandle = (req, res) => {
    // set response format
    res.setHeader("Content-type", "application/json")

    // get path
    const url = req.url
    req.path = url.split("?")[0]

    // analysis query
    req.query = querystring.parse(url.split("?")[1])

    // handle url rote
    if (req.method === "GET" && req.path === "/index") {
        res.write("hello world")
        res.end()
    }
}

module.exports = serverHandle