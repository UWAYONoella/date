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
// function call(){
// setTimeout(()=>{
//   // call();
//   console.log("I like my family")},4000);

// }
// call();
// function date(){
//   const today=Date();
//   setTimeout(()=>{
//     date();
//     document.write(today)
//   },1000);
// }
// date();
// const time=new Date();
// const month=["jan","feb","march","appril","may","june","jully","august","sept","oct","november","december"];
// console.log(month[new Date().getMonth()]);

const hour=document.getElementsByClassName("hour")[0];
const min=document.getElementsByClassName("min")[0];
const sec=document.getElementsByClassName("sec")[0];
// const tm=document.getElementById("tm");
let da=document.getElementsByClassName("da")[0];
console.log(da);
let mont=document.getElementsByClassName("mont")[0];
console.log(mont);
let year=document.getElementsByClassName("year")[0];
console.log(year);
let dt=document.getElementsByClassName("dt")[0];

  const month=["jan","feb","march","appril","may","june","jully","august","sept","oct","november","december"];
  const days=["sund","mon","tue","wed","thr","fr","sat"]
  let period=new Date();
  da.innerHTML=days[period.getDay()];
  mont.innerHTML=month[period.getMonth()];
  year.innerHTML=period.getFullYear();
  // const hour=period.getHours();
  // const minute=period.getMinutes();
  // const second=period.getSeconds();
  function time(){
    setTimeout(()=>{
      time();
      hour.innerHTML=`${period.getHours()} :`;
      min.innerHTML=`${period.getMinutes()}  :`;
      sec.innerHTML=period.getSeconds();
      // tm.textContent=`${period.getHours()}:${period.getMinutes()}:${period.getSeconds()}`;
    },1000);
 
}
time();


