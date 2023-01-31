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

