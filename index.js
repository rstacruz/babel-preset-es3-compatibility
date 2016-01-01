module.exports = {
  plugins: [
    // Object.assign(...) => _extends(...)
    require('babel-plugin-transform-object-assign'),
    // a.default => a['default']
    require('babel-plugin-transform-es3-member-expression-literals'),
    // { catch: 2 } => { 'catch': 2 }
    require('babel-plugin-transform-es3-property-literals'),
    // named functions
    require('babel-plugin-transform-jscript'),
    // undefined => void 0
    require('babel-plugin-transform-undefined-to-void'),
  ],
};
