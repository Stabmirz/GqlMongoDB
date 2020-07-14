const mysql = require('mysql');




let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"br"
});

function findBusinessByID(id,callback){
    let sql = "SELECT * from company where cid='"+id+"'";
    con.query(sql, function (err, data) {
        if (err) throw err;
        console.log(data);
        return callback(data);
    });
}

function findAllBusinessByCategory(id,callback){
    let sql = "SELECT * from company where categoryid='"+id+"'";
    con.query(sql, function (err, data) {
        if (err) throw err;
        console.log(data);
        return callback(data);
    });
}
function findCategoryByName(name,callback){
    let sql = "SELECT * from category where name='"+name+"'";
    con.query(sql, function (err, data) {
        if (err) throw err;
        // console.log(data);
        return callback(data);
    });
}

module.exports ={
    con,
    findBusinessByID,
    findAllBusinessByCategory,
    findCategoryByName,

}