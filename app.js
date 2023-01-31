let input = document.getElementById("textInput");
let chatCover = document.getElementById("chatCover");

input.addEventListener("keyup", function (event) {
  let inputValue = input.value;
  let newChat = document.createElement("li");

  let censor = ["fuck", "bitch", "pussy", "nigger", "niggar"];
  if (event.code === "Enter") {
    event.preventDefault();
    let tyt = "";
    censor.forEach((i) => {
      if (inputValue.includes(i)) {
        // newStr(i)
        console.log(i);
        let reg = /([aeiou])/g;

    tyt = i.replace(reg, "*");
    
      }
    });
    newChat.textContent = inputValue;
    newChat.textContent += tyt
    chatCover.append(newChat);
    input.value = " ";
  }
  //
});

function newStr(word) {
  let character = "*";
  let newStr = "";
  let reg = /([aeiou])/;

  newStr = word.replace(reg, "*");
  //   console.log(newStr);
  return newStr;
}

let sam = "rotten";

let fun = newStr(sam);

console.log(fun);

// let word = "King"
// function replaceAtIndex(character, word, index) {
//         var tempStr = "";

//         for (let n = 0; n < word.length; n++) {
//           if (n == index) {
//             tempStr += character;
//             console.log(tempStr);
//           } else {
//             tempStr += word[n];
//             console.log(tempStr);
//           }
//         }

//         return tempStr;
//       }

//       word = replaceAtIndex("*", word, 1)
//   console.log(word);
