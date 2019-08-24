const handleUserRouter = (req, res) => {
    const method = req.method

    // login
    if (method === "POST" && req.path === "/api/user/login") {
        const { username, password } = req.body
        console.log(username, password)

        if (username === "alex" && password === 666) {
            console.log("login success")
            res.write(JSON.stringify({
                "message": "login success",
                "status": 200
            }))
            res.end()
        }
    }
}

module.exports = handleUserRouter