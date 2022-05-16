const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    console.log("Testing server is operational");
  });


//My tests of the title
// change the title of the html file and run npm test to see if the tests responde correctly
  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("");
  });

  it("check title ", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("Cars");
  });
  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).toBe("Document");
  });
////////////////////////////////////////////////////////////////////////////////
  
}); // END OF DESCRIBE