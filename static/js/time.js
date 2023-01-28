const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const mins = Date.now() - start;

  console.log(`minutes elapsed = ${Math.floor(mins / 60000)}`);
  // Expected output: "minutes elapsed = 1"
}, 60000);
