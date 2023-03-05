import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const USERS_TO_CREATE = 20;
const PRODUCTSS_TO_CREATE = 50;

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

  const productData = Array(PRODUCTSS_TO_CREATE)
    .fill(null)
    .map(() => {
      return {
        category: faker.lorem.word(),
        brand: faker.lorem.word(),
        section: faker.lorem.word(),
        title: faker.commerce.productName(),
        image: faker.image.nature(800, 500, true),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        stock: faker.datatype.number(10).toString(),
        cpu: faker.lorem.sentence(5),
        ram: faker.lorem.sentence(5),
        storage: faker.lorem.sentence(5),
        display: faker.lorem.sentence(5),
        gpu: faker.lorem.sentence(5),
      };
    });

  const createProducts = productData.map((product) =>
    prisma.computer.create({ data: product })
  );

  const products = await prisma.$transaction(createProducts);
  console.log(`${products.length} products created`);

  await prisma.$disconnect();
}

// eslint-disable-next-line
run();
