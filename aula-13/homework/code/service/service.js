const db = require("../config/mysql");

async function getData() {
  const rows = await db.query(`<QUERY>`);

  return rows;
}

module.exports = {
  getData
};