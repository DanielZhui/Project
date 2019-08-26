const fs = require("fs")

function test(name) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
    return promise
}
res = test("./package.json")
console.log(res)
result = res.then(data => {
    console.log(data)
    return data
})
result.then(data => {
    console.log(data.toString())
})