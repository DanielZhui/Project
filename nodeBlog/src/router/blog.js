const {
    getList,
    getDetail,
    newBlog,
    updateBlog
} = require("../controller/blog")

const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    console.log("id>>>", id)

    // get blog list
    if (method === "GET" && req.path === "/api/blog/list") {
        let author = req.query.author || ""
        let keyword = req.query.keyword || ""
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // get blog detail
    if (method === "GET" && req.path === "/api/blog/detail") {
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // new a blog
    if (method === "POST" && req.path === "/api/blog/new") {
        data = req.body
        const result = newBlog(data)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // update a blog
    if (method === "POST" && req.path === "/api/blog/update") {
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel("update blog Error")
            }
        })
    }

    // delete a blog
    if (method === "POST" && req.path === "/api/blog/del") {
        res.write("delete blog")
        res.end()
    }
}

module.exports = handleBlogRouter