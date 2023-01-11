const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(() =>{
    console.log('please turn of thes motor! its a gentle remainder');
  }, 3000)
});

console.log("the script is running")
myEmitter.emit('WaterFull');