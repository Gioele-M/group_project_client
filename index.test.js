const fs = require("fs");
const path = require("path");
const html = fs.readFileSync("/index.html", "utf8");
// const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

// const card = document.getElementById("mainComment")

describe("Testing index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    console.log("Testing server is operational");
  });

  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("");
  });
  
}); // END OF DESCRIBE



// console.log (document.documentElement.innerHTML = html.toString())






// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
// jest.dontMock('fs');
// describe('$', function () {
//     beforeEach(() => {
//         document.documentElement.innerHTML = html.toString();
//     });
//     afterEach(jest.resetModules);
//     it('finds a node', function () {
//         expect($('el')).toBeInTheDocument()
//     });
// });