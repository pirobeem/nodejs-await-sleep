const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function test() {
  console.log("start");
  console.log(new Date().toString());
  console.log("wait 1 second");
  await sleep(1000);
  console.log(new Date().toString());
  console.log("wait 2 seconds");
  await sleep(2000);
  console.log(new Date().toString());
  console.log("end");
}

test();
