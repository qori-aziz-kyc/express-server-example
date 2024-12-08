const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, city, age, is_active 
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOneUser(id=1) {
  const user = await db.query(
    `SELECT * FROM users WHERE id=${id}`
  )

  return user
}

async function addUser(name, city, age) {
  const isSuccess = await db.query(
    `INSERT INTO users(name,city,age,is_active)
     VALUES ('${name}','${city}',${age},1);`
  )

  return isSuccess
}

module.exports = {
  getUsers,
  getOneUser,
  addUser
}