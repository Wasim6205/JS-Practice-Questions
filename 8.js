function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 done");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 done");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done");
      resolve();
    }, 1000);
  });
}

async function runTasks() {
  await step1();
  await step2();
  await step3();
  console.log("All steps completed!");
}

// Run the tasks
runTasks();