const { spawn } = require('child_process');

const myId = process.argv[2] || 'master';
console.log('started with :' + myId)

async function startTraining() {
  const process = await spawn('python', ['index.py'], {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });
  // process.stdout.on('data', (message, sendHandle) => {
  //   console.log(`python says: ${message}`,)
  // });
  process.on('message', (message, sendHandle) => {
    console.log(`recevied [${myId}]: ${JSON.stringify(message)}`,)
  });
  // const sendResult = process.stdin.write(`Hi\n`, (err) => {
  //   if (err) console.error(err);
  // })
  // console.log(sendResult);
  return process;
}

startTraining().then(process => {
  setInterval(() => {
  }, 1000);
});