//07.Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "tuesday".

let array = ["monday","tuesday", "wednesday","thursday","friday","saturday","sunday","tuesday", "wednesday", "thursday", "saturday"]

console.log(`The first & last index of the word tuesday is ${array.indexOf("tuesday")} and ${array.lastIndexOf("tuesday")}`);