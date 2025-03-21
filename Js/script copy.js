// function rahul() {}

// class Fifth {}
// console.log(typeof Fifth);

// const handleClick = (event) => {
//   const button = event.target.id;
//   if (button === "mybtn1") {
//     setTimeout(() => {
//       new Promise((resolve, reject) => {
//         resolve("promise resolved");
//       }).then((message) => console.log(message));
//     }, 0);
//   } else if (button === "mybtn2") {
//     setTimeout(() => {
//       new Promise((resolve, reject) => {
//         reject("promise rejected");
//       }).then((message) => console.log(message));
//     }, 0);
//   }
// };

// // window.handleClick = handleClick;
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("mybtn1").addEventListener("click", handleClick);
//   document.getElementById("mybtn2").addEventListener("click", handleClick);
// });

async function myFunc() {
  throw new Error();
  return await "Rahul";
}

const result = myFunc();
console.log(result);
