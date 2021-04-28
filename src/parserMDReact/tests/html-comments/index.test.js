const { writeReactComponent, readSourceFile } = require('../../../utils');
const { empty } = require('../../callbacks-simpleMDReact');
const { replaceMarkdown } = require('../../../helpers');
const { REGEXP_HTML_COMMENTS } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing html-comments', () => {
  it('renders html-comments', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/html-comments/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_HTML_COMMENTS, empty);
    const fileName = 'Html.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});