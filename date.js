// const today=Date();
// document.write("to day is on " +today);


// const start = Date.now();

// console.log('starting timer...');

// setTimeout(() => {
//   const millis = Date.now() - start;

//   document.write(`seconds elapsed = ${Math.floor(millis / 1000)}`);
// }, 4000);

// To test a function and get back its return
// function printElapsedTime(testFn) {
//     const startTime = Date.now();
//     const result = testFn();
//     const endTime = Date.now();
  
//     console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
//     return result;
//   }
  
//   const yourFunctionReturn = printElapsedTime(yourFunction);
function call(){
setTimeout(()=>{
  call();
  console.log("I like my family")},4000);

}
call();