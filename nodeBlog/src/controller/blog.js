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
    console.log("sql>>>>", sql)
    return exec(sql)
    // return [
    //     {
    //         "id": 1,
    //         "title": "title one",
    //         "content": "content one",
    //         "author": "tom",
    //         "createtime": 1566741161001
    //     }
    // ]
}

module.exports = getList