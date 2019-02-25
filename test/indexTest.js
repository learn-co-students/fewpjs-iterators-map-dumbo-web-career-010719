const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
 path.resolve(__dirname, '..', 'index.js'), {
   presets: ['env']
 }
);

const src = babelResult.code

jsdom({
 html, src
});

describe('index.js', function () {
  describe('titleCased()', function () {
    it('has a titleCased() function', function () {
      expect(titleCased).to.exist
    });

    it('returns an array with title case tutorial names', function () {
      expect(titleCased(tutorials)).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Contutorialuctor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
      ]
      )
    });
  });
});
