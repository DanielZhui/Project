const getList = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
    const method = req.method

    // get blog list
    if (method === "GET" && req.path === "/api/blog/list") {
        let author = req.query.author || ""
        let keyword = req.query.keyword || ""

        const result = getList(author, keyword)
        console.log(result)
        return new SuccessModel(result)
    }

    // get blog detail
    if (method === "GET" && req.path === "/api/blog/detail") {
        return {
            "message": "this is a blog detail"
        }
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