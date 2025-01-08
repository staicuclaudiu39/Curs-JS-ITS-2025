// let string1 = "ceva";
// let string2 = "altceva";

// console.log(string1);
// console.log(string2);
// console.log(string1 + string2);
// console.log(string1[1]);
// console.log(string1.charAt(0));

// let numar = 10;
// console.log(string1 + numar);

// let string1 = "ceva, altceva, inca ceva";
// console.log(string1.length);
// console.log(string1.replace("ceva", "2"));
// console.log(string1.split(", "));

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

// let obj = {
//   key1: "value1",
//   key2: 10,
//   key3: [1, 2, 3],
//   key4: {
//     key5: "value2",
//   },
// };
// console.log(obj.key1);
// console.log(obj.key3[1]);
// console.log(obj.key4.key5);

// let arr = [1, "ceva", true, 3, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr.length);
// arr.forEach(function (element) {
//   console.log(element);
// });
// console.log(arr.toString());
// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));
// test(1, 2);

// function test(a, b) {
//   let c = 10;
//   function altceva() {
//     let variabila2 = 20;
//     console.log("ceva");
//   }
//   console.log(variabila);
//   console.log(c + a);
// }

// let variabila = 5;

// test(1, 2);
// console.log(c);

// function applyOperator(a, b, f) {
//   return f(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }
console.log(
  applyOperator(1, 2, function (a, b) {
    return a + b;
  })
);
console.log(
  applyOperator(1, 2, function (a, b) {
    return a - b;
  })
);

console.log(applyOperator(1, 2, (a, b) => a + b));
console.log(applyOperator(1, 2, (a, b) => a * b));
