const handleBlogRouter = (req, res) => {
    const method = req.method

    // get blog list
    if (method === "GET" && req.path === "/api/blog/list") {
        res.write("blog list")
        res.end()
    }

    // get blog detail
    if (method === "GET" && req.path === "/api/blog/detail") {
        res.write("blog detail list")
        res.end()
    }

    // new a blog
    if (method === "POST" && req.path === "/api/blog/new") {
        res.write("new a blog")
        res.end()
    }

    // update a blog
    if (method === "POST" && req.path === "/api/blog/update") {
        res.write("update blog")
        res.end()
    }

    // delete a blog
    if (method === "POST" && req.path === "/api/blog/del") {
        res.write("delete blog")
        res.end()
    }
}

module.exports = handleBlogRouter