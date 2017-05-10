const parens = require("./../parenthesis_matching");
const chai = require("chai");
const expect = chai.expect;

test("Should be true if parens are matched", () => {
  const testCase = "{}";
  const result = parens(testCase);
  expect(result).to.be.true;
});

test("Should be true when multiple parens are matched", () => {
  const testCase = "{{{{ }}}}";
  const result = parens(testCase);
  expect(result).to.be.true;
});

test("Should be true, if multiple parens are matched while mixed with text", () => {
  const testCase = "{ so this was [ and then { they said} ]}";
  const result = parens(testCase);
  expect(result).to.be.true;
});

test("Should return false if parens are not matched", () => {
  const testCase = "{]}";
  const result = parens(testCase);
  expect(result).to.be.false;
});
