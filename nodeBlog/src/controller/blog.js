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

module.exports = {
    getList,
    getDetail
}