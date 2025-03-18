const file = await Deno.open("images/autumn.jpg");
const stream = file.readable;

// Tee the stream into two branches
const [branch1, branch2] = stream.tee();

let count1 = 0,
  count2 = 0;

// Function to track read speed
async function trackReadSpeed(branch, label) {
  const reader = branch.getReader();

  while (true) {
    const { done } = await reader.read();
    if (done) break;

    if (label === "Branch 1") count1++;
    else count2++;

    console.log(
      `${label} processed chunk ${label === "Branch 1" ? count1 : count2}`
    );
  }
}

// Start consuming both branches
trackReadSpeed(branch1, "Branch 1");
trackReadSpeed(branch2, "Branch 2");

// Compare speeds every second
setInterval(() => {
  console.log(
    `📊 Speed: Branch 1 = ${count1} chunks, Branch 2 = ${count2} chunks`
  );

  if (count1 > count2) {
    console.log("⚠️ Branch 2 is slower!");
  } else if (count2 > count1) {
    console.log("⚠️ Branch 1 is slower!");
  } else {
    console.log("✅ Both branches are consuming at the same rate.");
  }
}, 1000);
