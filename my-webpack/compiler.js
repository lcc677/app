const config = require('./my.config');

class Compiler {
  constructor(options) {
    this.options = options;
    this.entry = options.entry;
    this.output = options.output;
  }
}
