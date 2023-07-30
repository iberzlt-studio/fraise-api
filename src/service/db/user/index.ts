import { user, PrismaClient } from '@prisma/client';

export async function getUser(userId: string): Promise<user | null> {
  const prisma = new PrismaClient();

  let conditon = {
    where: { user_id: userId },
  };

  console.log('[info] serch condition: %o', conditon);

  const result: user | null = await prisma.user
    .findMany(conditon)
    .then(async (data) => {
      await prisma.$disconnect();
      return data[0];
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      return null;
    });
  console.log('[info] serch result: %o', result);
  return result;
  // ... you will write your Prisma Client queries here
}

export async function createUser(
  userId: string,
  passwd: string,
) {
  // const prisma = new PrismaClient();
  // const conditon: {
  //   int_value: number | null;
  //   bool_value: boolean | null;
  //   text_value: string | null;
  // } = {
  //   int_value: null,
  //   bool_value: null,
  //   text_value: null,
  // };
  // if (typeof changeValue === 'number') {
  //   conditon.int_value = changeValue;
  // }
  // if (typeof changeValue === 'boolean') {
  //   conditon.bool_value = changeValue;
  // }
  // if (typeof changeValue === 'string') {
  //   conditon.text_value = changeValue;
  // }

  // console.log('[info] set condition: %o', conditon);

  // const result = await prisma.user
  //   .updateMany({
  //     where: {
  //       key: setKey,
  //     },
  //     data: conditon,
  //   })
  //   .then(async (data) => {
  //     await prisma.$disconnect();

  //     return data;
  //   })
  //   .catch(async (e) => {
  //     console.error(e);
  //     await prisma.$disconnect();
  //     return [];
  //   });

  // console.log('[info] set result: %o', result);
}
