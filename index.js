// Code your solution here
const titleCased = (tutorials) => {
  return tutorials.map((element) => {
    return element.split(' ').map((ele) => {
      return `${ele[0].toUpperCase()}` + ele.slice(1)
    }).join(' ')
    })
  }

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

// const titleCased = () => {
//   return [          "What Does The This Keyword Mean?",
//             "What Is The Contutorialuctor OO Pattern?",
//             "Implementing Blockchain Web API",
//             "The Test Driven Development Workflow",
//             "What Is NaN And How Can We Check For It",
//             "What Is The Difference Between StopPropagation And PreventDefault?",
//             "Immutable State And Pure Functions",
//             "What Is The Difference Between == And ===?",
//             "What Is The Difference Between Event Capturing And Bubbling?",
//             "What Is JSONP?"]
// }
