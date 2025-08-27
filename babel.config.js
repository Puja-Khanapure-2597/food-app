module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react',{runtime:"automatic"}],
     // ['@babel/plugin-proposal-decorators',{targets: {node: 'current'}}],
    ]
  }