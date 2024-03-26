const { createUserService } = require("../service/userSercive");

exports.registerUser = async (req, res) => {
  const result = await createUserService(req);
  if (result === "success") {
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};
