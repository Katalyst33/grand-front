const arrayOfLists = ["ape", "apple", "auto"];
const searchString = "A";

let matchingStrings = [];

arrayOfLists.forEach((list) => {
  if (list.toLocaleLowerCase().search(searchString.toLocaleLowerCase()) > -1) {
    matchingStrings.push(list);
  }
});
