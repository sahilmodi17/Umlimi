const Admin = require("../models/Admin");
const User = require("../models/User");
const randomstring = require("randomstring");
const bcrypt = require("bcrypt");

const adminRegister = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    cnfPassword,
    image,
  } = req.body;
  const tempData = { firstName, lastName, email, phoneNumber, password, image };

  try {
    if (cnfPassword) {
      if (password === cnfPassword) {
        const dup_email = await Admin.findOne({ email: email });
        if (dup_email) {
          // console.log("here")
          // console.log(dup_email.email);
          return res.status(409).json({ msg: "Duplicate email" });
        }
        const admin = await Admin.create(tempData);
        const token = admin.createToken();
        // console.log("1");
        res.cookie("token", token, {
          httpOnly: false,
          expires: new Date(Date.now() + 600000),
        });
        return res.status(200).json({ msg: "data entered", token });
      } else {
        return res.status(401).json({ msg: "Password does not match" });
      }
    } else {
      res.status(401).json({ msg: "enter confirm password" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log(error.errors);
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(500).json({
        error: message,
      });
    }
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res.status(404).json({ status: "email invalid" });
    }

    const dbPassword = admin.password;
    // console.log(dbPassword);
    // console.log(password);

    bcrypt.compare(password, dbPassword, (err, data) => {
      if (err) {
        return res.status(404).json({ status: "something went wrong" });
      }
      // console.log(data);

      if (data) {
        const token = admin.createToken();
        // console.log("login token : " + token);
        res.cookie("token", token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // ms
          httpOnly: false,
        });

        return res
          .status(200)
          .json({ status: "login successful for user", token });
      } else {
        return res.status(404).json({ status: "invalid password" });
      }
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ status: "email invalid" });
    }

    const dbPassword = user.password;
    // console.log(dbPassword);
    // console.log(password);

    bcrypt.compare(password, dbPassword, (err, data) => {
      if (err) {
        return res.status(404).json({ status: "something went wrong" });
      }
      // console.log(data);

      if (data) {
        const token = user.createToken();
        // console.log("login token : " + token);
        res.cookie("token", token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // ms
          httpOnly: false,
        });

        return res.status(201).json({ user });
      } else {
        return res.status(404).json({ status: "invalid password" });
      }
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const otpStorage = {};

const sendOtp = async (req, res) => {
  const email = req.body.email;
  // console.log("inside send otp");
  // console.log(email);
  // Generate a random OTP
  const otp = randomstring.generate({
    length: 6,
    charset: "numeric",
  });
  // console.log(otp);
  // Store the OTP in memory
  otpStorage[email] = otp;

  const sendMail = require("../services/emailService");
  sendMail({
    from: "savanpatoliya987@gmail.com",
    to: email,
    subject: "UMLIMI",
    text: `Email varification`,
    html: require("../services/emailTemplete")({
      otp,
    }),
  })
    .then(() => {
      return res.status(201).json({
        valid: true,
        status: "otp send successfully",
        otp: otp,
      });
    })
    .catch((err) => {
      return res.status(500).json({ error: "Error in email sending." });
    });
};

const verifyOTP = async (req, res) => {
  // console.log("inside verification");
  const { otp, email } = req.body; // Assuming email is sent along with OTP in the request body
  // console.log("Received OTP:", otp);
  // console.log("Received Email:", email);

  // Check the contents of otpStorage
  // console.log("otpStorage:", otpStorage);

  try {
    if (otpStorage[email] === otp) {
      delete otpStorage[email];
      // console.log("successful");
      res.status(200).json({ msg: "Verification successful" });
    } else {
      // console.log("invalid");
      res.status(200).json({ msg: "Invalid OTP" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send(error);
  }
};

const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if email is already registered
    const dup_email = await User.findOne({ email });
    if (dup_email) {
      // console.log("Duplicate email:", email);
      return res.status(409).json({ msg: "Duplicate email" });
    }

    // Create a new user
    const newUser = await User.create({ firstName, lastName, email, password });
    const token = newUser.createToken();

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: false,
      expires: new Date(Date.now() + 600000),
    });

    // Return a success response
    return res.json({ newUser });
  } catch (error) {
    console.error("Error during user registration:", error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({ error: message });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  // console.log("hi", req.user);

  const { userId } = req.user;
  // console.log(userId)
  try {
    const user = await User.findOne({ _id: userId });
    return res.status(200).json({ user });
  } catch (err) {
    res.send(err);
  }
};

const editUser = async (req, res) => {
  // console.log(req.params);
  const userId = req.params.userId;
  const data = req.body;

  try {
    const updateUser = await User.findOneAndUpdate({ _id: userId }, data, {
      new: true,
      runValidator: true,
    });
    if (!updateUser) {
      throw `no user with id ${userId}`;
    } else {
      return res.status(200).json({ updateUser });
    }
  } catch (error) {
    res.status(400).json({ error });
    // console.log(error);
  }
};

const getAllUser = async (req, res) => {
  // console.log("hi");
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

module.exports = {
  adminRegister,
  adminLogin,
  userLogin,
  userRegister,
  getUser,
  editUser,
  sendOtp,
  verifyOTP,
  getAllUser,
};
