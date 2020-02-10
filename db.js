const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const Sequelize = require("sequelize");
const db = new Sequelize(databaseURL);
