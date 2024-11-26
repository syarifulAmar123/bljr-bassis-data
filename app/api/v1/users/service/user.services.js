const { BAD_REQUEST } = require("http-status-codes");

const getAllUsers = async (req) => {};

const getUserByIdService = async (req) => {
  const { id } = req.params;
  const result = `User dengan id ${id} ditemukan yagesya`;
  return result;
};

module.exports = { getAllUsers, getUserByIdService };
