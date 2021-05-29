const Aqua = require('./lib/common/Aqua');

module.exports = class {
  constructor({argv}) {
    this.Aqua = new Aqua({
      baseUrl: argv.baseUrl,
      token: argv.token,
    });

    this.defect = argv.defect;
    this.transition = argv.transition;
  }

  async execute() {
    await this.Aqua.updateTransition({
      defect: this.defect,
      transition: this.transition,
    });
  }
};
