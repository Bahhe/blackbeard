import { PrismaClient } from "@prisma/client";
import { accessories, products } from "./products";
const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.computer.create({
      data: {
        title: product.title,
        image: product.image,
        description: product.desc,
        brand: product.brand,
        section: product.section,
        category: product.category,
        price: product.price,
        stock: product.stock,
        cpu: product.cpu,
        ram: product.ram,
        storage: product.storage,
        display: product.display,
        gpu: product.gpu,
      },
    });
  }
  console.log(`Created ${products.length} products`);

  for (const accessory of accessories) {
    await prisma.accessory.create({
      data: {
        title: accessory.title,
        image: accessory.image,
        description: accessory.description,
        section: accessory.section,
        brand: accessory.brand,
        category: accessory.category,
        price: accessory.price,
        stock: accessory.stock,
      },
    });
  }
  console.log(`Created ${accessories.length} accessories`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
