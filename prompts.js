module.exports = [
  {
    name: 'ciBranch',
    type: 'input',
    default: 'master',
    message: 'Branch to watch for CI Pipeline and Deployment'
  },
  {
    name: 'nodeVersion',
    type: 'input',
    default: 'latest',
    message: 'Node image to build with on Gitlab CI'
  },
  {
    name: 'enableLinting',
    type: 'confirm',
    default: true,
    message: 'Add lint stage to CI? (requires \'lint\' service)'
  },
  {
    name: 'enableUnitTesting',
    type: 'confirm',
    default: true,
    message: 'Add unit testing stage to CI? (requires \'test:unit\' service'
  },
  {
    name: 'writeVueConfig',
    type: 'confirm',
    default: false,
    message: 'Write production publicPath to vue-config.js? (if Y, defaults to projectName)'
  }
]