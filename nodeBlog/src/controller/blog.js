const exec = require("../db/mysql")

const getList = (author, keyword) => {
    let sql = `select *from blog where 1=1 `
    if (author) {
        sql += `and author='${author}'`
    }
    if (keyword) {
        sql += `and title like '%${keyword}'`
    }
    sql += `order by createtime desc;`
    // return a promise object
    return exec(sql)
}

const getDetail = (id) => {
    let sql = `select *from blog where id=${id}`
    return exec(sql)
}

const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author

    const sql = `
    insert into blog (title, content, author)
    value ("${title}", "${content}", "${author}" )
    `
    return exec(sql).then(insertData => {
        console.log("insertData>>>", insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogDate = {}) => {
    // id: blog id
    // blogDate: need to update blog content and title
    const title = blogDate.title
    const content = blogDate.content

    const sql = `
    update blog set title="${title}", content="${content}" where id="${id}"
    `

    return exec(sql).then(updateData => {
        console.log("updateData =>", updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}