// Outer loop will print rows
// Innner loop will print column

function pattern1(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (j = 0; j < depth; j++) {
      str = str + "* ";
    }
    console.log(str);
  }
}

function pattern2(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + "* ";
    }
    console.log(str);
  }
}

function pattern3(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + `${i + 1} `;
    }
    console.log(str);
  }
}

function pattern4(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (let j = 0; j < depth - i; j++) {
      str = str + `${j + 1} `;
    }
    console.log(str);
  }
}

function pattern5(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (j = depth; j >= 0; j--) {
      if (j <= i) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}

function pattern6(depth) {
  for (let i = 0; i < depth; i++) {
    let str = "";
    let flag = true;
    for (let j = 0; j < i + 1; j++) {
      str = str + `${Number(flag)} `;
      flag = !flag;
    }
    console.log(str);
  }
}

function pattern7(depth) {
  let flag = true;
  for (let i = 0; i < depth; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str = str + `${Number(flag)} `;
      flag = !flag;
    }
    console.log(str);
  }
}
