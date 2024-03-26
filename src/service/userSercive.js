const { sendEmail } = require("../helper/email");
const User = require("../models/userModel");

const createUserService = async (req, res) => {
  const { email } = req.body;
  const exitingUser = await User.findOne({ email: email, verify: true });
  if (exitingUser) {
    return { status: "Fail", message: "Email already exists" };
  }
  let code = Math.floor(100000 + Math.random() * 900000);
  const emailData = {
    email,
    subject: "Account verification email",
    html: `
            <h1>Name: ${req.body.name}</h1>
            <p>Your OTP code is <b>${code}</b></p>
        `,
  };

  try {
    await sendEmail(emailData);
    await User.updateOne(
      { email: email },
      { $set: { otp: code.toString(), ...req.body } },
      { upsert: true }
    );
    return { status: "success", message: "OTP send success" };
  } catch (error) {
    return { message: "something error" };
  }
};

module.exports = { createUserService };
