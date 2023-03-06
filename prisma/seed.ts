import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const USERS_TO_CREATE = 20;
// const PRODUCTS_TO_CREATE = 50;
const ACCESSORY_TO_CREATE = 30;

async function run() {
  // const userData = Array(USERS_TO_CREATE)
  //   .fill(null)
  //   .map(() => {
  //     return {
  //       name: faker.internet.userName().toLowerCase(),
  //       email: faker.internet.email().toLocaleLowerCase(),
  //       image: faker.image.avatar(),
  //     };
  //   });
  //
  // const createUsers = userData.map((user) =>
  //   prisma.user.create({ data: user })
  // );
  //
  // const users = await prisma.$transaction(createUsers);
  // console.log(`${users.length} users created`);

  const accessoryData = Array(ACCESSORY_TO_CREATE)
    .fill(null)
    .map(() => {
      return {
        category: faker.lorem.word(),
        brand: faker.lorem.word(),
        section: faker.lorem.word(),
        title: faker.commerce.productName(),
        image: faker.image.animals(800, 500, true),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price()),
        stock: faker.datatype.number(10).toString(),
      };
    });
  const createAccessories = accessoryData.map((accessory) =>
    prisma.accessory.create({ data: accessory })
  );

  const accessories = await prisma.$transaction(createAccessories);
  console.log(`${accessories.length} accessories created`);

  await prisma.$disconnect();
}

// eslint-disable-next-line
run();
