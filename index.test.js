/**
* @jest-environment jsdom
*/

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");


describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const js = require ('./index')
    console.log(".............Testing html............ ", document);
  });

  it("test: <main section> is there", () => {
    let mainSec = document.querySelector('.mainSection')
    expect(mainSec).toBeTruthy()
  });

  it('test: <card> is in the html', () => {
    const card = document.querySelector('.card')
    expect(card).toBeTruthy()
  })

  it("test: <title> is 'Cars'", () => {
    let docTitle = document.title;
    expect(docTitle).toBe("Cars");
  })

  it("test: <body> has a certain text", () => {
    let docBody = document.body;
    expect(docBody).isContaining('Section');
  })


});