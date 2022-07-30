import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Chibuzor",
      email: "chibuzor@ex.com",
      password: bcrypt.hashSync("123456"),
    },
  ],
};

export default data;