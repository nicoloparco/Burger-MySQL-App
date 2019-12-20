const connection = require("./connection.js")

function printQuestionMarks(num) {
    var arr = []

    for (var i=0; i < num.length; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(obj) {
    var arr = []

    for (var key in obj) {
        var value = ob[key]

        if(Object.hasOwnProperty.call(ob, key)) {

            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString()
}


var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err
            }
            cb(res)
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table

        queryString += "("
        queryString += cols.toString();
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length)
        queryString += ") "

        console.log(queryString)

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table

        queryString += " SET "
        queryString += objToSql(objColVals)
        queryString += " WHERE "
        queryString += condition

        console.log(queryString)

        connection.query(queryString, function(err, result) {
            if (err){
                throw err;
            }
            cb(result)
        });
    }
}

module.exports = orm
