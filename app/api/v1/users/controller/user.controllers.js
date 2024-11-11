const { getAllUsers, getUserByIdService } = require("../service/user.services");

const index = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const result = await getUserByIdService(req);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { index, getUserById };
