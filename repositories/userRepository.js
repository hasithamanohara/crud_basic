import dbConnection from "../Configs/DbConnection.js";
import * as sqlQuaries from "../Utils/sql.js";

export const getExUser = async (email) => {
  return new Promise(async (resolve, reject) => {
    dbConnection.query(sqlQuaries.getExUser, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const create = async (firstName, lastName, email) => {
  return new Promise(async (resolve, reject) => {
    dbConnection.query(sqlQuaries.create, [firstName, lastName, email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const get = async () => {
  return new Promise(async (resolve, reject) => {
    dbConnection.query(sqlQuaries.get, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const getExuserById = async (id) => {
  return new Promise(async (resolve, reject) => {
    dbConnection.query(sqlQuaries.getExuserById, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const deleteById = async (id) => {
  return new Promise(async (resolve, reject) => {
    dbConnection.query(sqlQuaries.deleteById, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

export const updateById = (values) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(sqlQuaries.updateById, values, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};