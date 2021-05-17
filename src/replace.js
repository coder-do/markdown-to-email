// This file is just my attempt to simplify
// a process of reading and debugging our code
// i'm creating a set of methods, that have a simple name.
// it will help us to move forward.
const { newLine } = require('./utils');

const {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_SEPARATOR,
} = require('atherdon-newsletter-constants');

const {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
} = require('./callbacks-simple');

const {
  ulList,
  olList
} = require('./callbacks-lists');


const {
  image,
  paragraphWrapper,
  sponsorship,
  br
} = require('./callbacks');

const { separator } = require('./callbacks-custom');


// @TODO include things from a new module that we have.

var Replacer = function () {};

Replacer.prototype.replaceMDBinded = function () {};
Replacer.prototype.replaceMDBindedPreviewText = function () {};

Replacer.prototype.comments = function () {
  this.replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
};

Replacer.prototype.strong = function () {
  this.replaceMDBinded(REGEXP_STRONG, strong);
};

Replacer.prototype.em = function () {
  this.replaceMDBinded(REGEXP_EM, italic);
};

Replacer.prototype.header = function () {
  this.replaceMDBinded(REGEXP_HEADER, header);
};

Replacer.prototype.image = function () {
  this.replaceMDBinded(REGEXP_IMAGE, image);
};

Replacer.prototype.link = function () {
  this.replaceMDBinded(REGEXP_LINK, link);
};

Replacer.prototype.del = function () {
  this.replaceMDBinded(REGEXP_DEL, del);
};

Replacer.prototype.q = function () {
  this.replaceMDBinded(REGEXP_Q, q);
};

Replacer.prototype.code = function () {
  this.replaceMDBinded(REGEXP_CODE, code);
};

Replacer.prototype.ul = function () {
  this.replaceMDBinded(REGEXP_UL_LIST, ulList);
};

Replacer.prototype.ol = function () {
  this.replaceMDBinded(REGEXP_OL_LIST, olList);
};

Replacer.prototype.blockquote = function () {
  this.replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
};

Replacer.prototype.hr = function () {
  this.replaceMDBinded(REGEXP_HR, hr);
};

Replacer.prototype.paragraph = function () {
  this.replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
};

Replacer.prototype.emptyUl = function () {
  this.replaceMDBinded(REGEXP_EMPTY_UL, empty);
};

Replacer.prototype.emptyOl = function () {
  this.replaceMDBinded(REGEXP_EMPTY_OL, empty);
};

Replacer.prototype.emptyBlockquote = function () {
  // this line is generating an error
  this.replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
};

Replacer.prototype.br = function () {
  this.replaceMDBinded(REGEXP_BR, br);
};
Replacer.prototype.sponsorship = function () {
  this.replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
};

Replacer.prototype.memes = function () {
  this.replaceMDBinded(REGEXP_MEM, mem);
};

Replacer.prototype.separator = function () {
  this.replaceMDBinded(REGEXP_SEPARATOR, separator);
};

module.exports = new Replacer();