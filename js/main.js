"use strict";

{


let fizz = 0;
let buzz = 0;

//fizzの値
  for (let i = 1; i < 100; i++) {
    let fizz = i * 3;
    if (fizz > 100) {
      break;
    }
    console.log(`Fizzの値：${fizz}`);
  }

//buzzの値
    for (let j = 1; j < 100; j++) {
      let buzz = j * 5;
      if (buzz > 100) {
        break;
      }
      console.log(`Buzzの値：${buzz}`);
    }

// ５と３の倍数
  // if (value % 15 === 0) {
  //   console.log(`FizzBuzz：${}`);
  // } else {
  //
  // }


//strictの終わり
}
