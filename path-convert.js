var md5 = require('md5');

function PathConverter(){};
var P = {};
PathConverter.prototype = P;
P.toDistPath = function(srcPath){
  var pathArr = srcPath.split('/');
  var extensionArr = pathArr[pathArr.length - 1].split('.');
  var hashedPart;
  var distPath = md5(srcPath);
  if (this._dirSplits.length){
    for (var i = 0; i < this._dirSplits.length; i++){
    }
  }
};

module.exports = PathConverter;
