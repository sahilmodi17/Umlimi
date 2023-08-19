const Student = require("../models/Student");
const Address = require("../models/Address");

const addStudent = async (req, res) => {
  try {
    const { name, cpi, state, city } = req.body;
    const address = { state, city };

    const add = new Address(address);
    await add.save();

    console.log(add);

    const student = { name, cpi, address: add._id };

    const stu = new Student(student);

    await stu.save();
    console.log(stu);

    res.send({ msg: true });
  } catch (err) {
    console.log(err);
  }
};

const getAddress = async (req, res) => {
  try {
    const { studentId } = req.params;

    console.log(studentId);

    const student = await Student.find({ _id: studentId }).populate(
      "address",
      "_id city"
    );
    console.log(student);
    res.send({ msg: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addStudent,
  getAddress,
};
