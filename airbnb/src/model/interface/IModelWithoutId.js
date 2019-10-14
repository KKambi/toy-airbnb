/*
Model Schema
PermissionType -> permissionType, 2, read_permission, write_permission 
*/

const { pool } = require('../../javascripts/uitl/util_dbPool')

class IModelWithoutId {
    constructor(TABLE_NAME, ATTRIBUTE_NUMBERS, ATTRIBUTE_LIST){
        this.TABLE_NAME = TABLE_NAME
        this.ATTRIBUTE_NUMBERS = ATTRIBUTE_NUMBERS
        this.ATTRIBUTE_LIST = ATTRIBUTE_LIST
    }

    async create(params){
        let connection;
        try {
            try {
                if (Object.keys(params).length !== this.ATTRIBUTE_NUMBERS) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            const insertQuery = `INSERT INTO ${this.TABLE_NAME}} (${this.ATTRIBUTE_LIST}) VALUES (?, ?, ?, ?);`
            const insertValue = [`${params.user}`, `${params.password}`, `${params.name}`, `${params.is_admin}`]
            connection = await pool.getConnection(async conn => conn);
            try {
                await connection.execute(insertQuery, insertValue);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err.stack}`);
            connection.release();
            return false;
        }
    }

    async find(attribute, identifier){
        try {
            const findQuery = `SELECT ${this.ATTRIBUTE_LIST} FROM ${this.TABLE_NAME} WHERE ${attribute} = ?;`
            const findValue = [`${identifier}`]
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.execute(findQuery, findValue);
                connection.release();
                if (rows.length) return rows[0];
                return false;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }
    }

    async findAll(){
        try {
            console.log("hi")
            const findAllQuery = `SELECT ${this.ATTRIBUTE_LIST} FROM ${this.TABLE_NAME};`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findAllQuery);
                connection.release();
                return rows;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }
    }

    async update(target, value, attribute, identifier){
        try {
            const updateQuery = `UPDATE ${this.TABLE_NAME} SET ${target} = ? WHERE ${attribute} = ?;`
            const updateValue = [`${value}`, `${identifier}`]
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.execute(updateQuery, updateValue);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        } 
    }

    async delete(attribute, identifier){
        try {
            const deleteQuery = `DELETE ${this.TABLE_NAME} WHERE ${attribute} = ?;`
            const deleteValue = [`${identifier}`]
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.execute(deleteQuery, deleteValue);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }   
    }
};

module.exports = IModelWithoutId

