const querystring = require("querystring")
const handleUserRouter = require("./router/user")

// get POST data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({})
            return
        }

        if (req.headers["content-type"] !== "application/json") {
            resolve({})
            return
        }

        let postData = ""
        req.on("data", chunk => {
            postData += chunk.toString()
        })
        req.on("end", () => {
            console.log(postData)
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    // set response format
    res.setHeader("Content-type", "application/json")

    // get path
    const url = req.url
    req.path = url.split("?")[0]

    // analysis query
    req.query = querystring.parse(url.split("?")[1])

    console.log(req.path)

    // handle User url rote
    getPostData(req).then(postData => {
        req.body = postData
        const userResult = handleUserRouter(req, res)
    })

}

module.exports = serverHandle