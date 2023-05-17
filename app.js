let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop(); // removes the last string

secretMessage.push("to", "Program"); // adds the words "to" and "Program" as separate strings to the end

secretMessage[7] = "right"; // replaces the index 7 value with another one

secretMessage.shift(); // removes the first string

secretMessage.unshift("Programming"); // adds the value 'Programming' at the beginning of the array

secretMessage.splice(6, 5, "know,"); // removes the strings "get", "right", "the", "first", "time,", and replace them with the single string "know,"

console.log(secretMessage.join(" ")); // joins the elements of the array into a string
