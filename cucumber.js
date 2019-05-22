var common = [
  `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--parallel 20',
  '--require ./features/support/**/*.ts',
  '--require ./features/step_definitions/**/*.ts'
].join(' ');

module.exports = {
  default: common
};
