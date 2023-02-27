import { PrismaClient } from "@prisma/client";
import { Certificate } from "crypto";

const prisma = new PrismaClient();

console.log(1);

const createUser = async () => {
  let user = await prisma.users.create({
    data: {
      id: 1234567121,
      full_name: "dnaskjn Alfwaz",
      email: "sald@kha.com",
      gender: "m",
      // date_of_birth:'1999/12/12',
      country_code: 1,
    },
  });
  console.log(user);
};

createUser()
console.log(2);
