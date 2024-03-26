const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:''
    },
    otp: {
      type: String, 
    },

    role: {
      type: String,
      default: "user",
      enum: ["user", "seller", "admin"],
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true,  versionKey: false  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
