let option = prompt("Please enter an option").toLowerCase();
const list = [];
while (option !== "quit" && option !== "q") {
  if (option === "new") {
    let input = prompt("Enter a To Do");
    list.push(input);
    console.log(input + " added to the list");
  } else if (option === "list") {
    console.log("************");
    for (i in list) {
      console.log(i + " " + list[i]);
    }
    console.log("************");
  } else if (option === "delete") {
    let input = prompt("Enter element number");
    list.splice(input, 1);
  } else {
    console.log("NOT AN OPTION!!");
  }
  option = prompt("Please enter an option").toLowerCase();
}
console.log("Quit");
