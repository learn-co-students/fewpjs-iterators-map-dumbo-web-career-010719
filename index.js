// We want all the titles to be "title case", in other words, the first letter of each word is capitalized. Create a new array with the new names of each tutorial that is in the proper title case formatting.

const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(tutorial => {
  return tutorial
    .split(" ")
    .map(tut => tut.charAt(0).toUpperCase() + tut.slice(1))
    .join(' ');
})
