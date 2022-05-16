/**
* @jest-environment jsdom
*/

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");


describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    console.log(".............Testing html............");
  });

  it("check main section is there", () => {
    let mainSec = document.querySelector('.mainSection')
    expect(mainSec).toBeTruthy()
  });

  it('tests there is a card does in the html', () => {
    const card = document.querySelector('.card')
    expect(card).toBeTruthy()
  })

  it("check title is 'Cars'", () => {
    let docTitle = document.title;
    expect(docTitle).toBe("Cars");
  })




});