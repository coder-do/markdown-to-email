const { writeReactComponent, readSourceFile } = require("../../../utils");
const { code } = require("../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_CODE } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing lists-only", () => {
  it("renders lists-only", () => {
    let markdown = readSourceFile("src/parserMDReact/tests/code/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_CODE, code);

    const fileName = "Code.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
