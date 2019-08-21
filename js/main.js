"use strict";

{

  for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
      console.log(`FizzBuzzの値：${i}`);
    } else if (i % 3 === 0) {
      console.log(`Fizzの値：${i}`);
    } else if (i % 5 === 0) {
      console.log(`Bizzの値：${i}`);
    }
  }


  //strictの終わり
}
