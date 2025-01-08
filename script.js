// window.onload = function () {
//   let square = document.getElementById("test");
//   square.style.backgroundColor = "red";
//   square.style.width = "100px";
//   square.style.height = "100px";
// };
// window.onload = function () {
//   let button = document.getElementById("submit");
//   button.addEventListener("click", function () {
//     let firstName = document.getElementById("first-name");
//     let lastName = document.getElementById("last-name");

//     let info = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//     };

//     console.log(info);
//     firstName.value = "";
//     lastName.value = "";
//   });
// };

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};
