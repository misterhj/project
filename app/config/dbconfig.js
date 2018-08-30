/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* crea la tabla de clientes si es que no existen */
let init = function () {
    db.run("CREATE TABLE if not exists cliente (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " nombre TEXT," +
        " apellido TEXT," +
        " direccion TEXT," +
        " documento TEXT," +
        " telefono TEXT," +
        " email TEXT" +
        ")");

};

module.exports = {
    init: init,
    db: db
};
