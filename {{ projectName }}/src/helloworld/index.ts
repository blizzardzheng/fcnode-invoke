function delay(counts) {
  return new Promise((resolve) => {
    setTimeout(resolve, counts);
  })
}

interface queryDO {
  str: string;
}
async function helloworld(query:queryDO) {
  await delay(1000);
  const result = (process.env.HELLO_WORLD || '') + query.str + 'hello world';
  return result;
}

export default helloworld;
