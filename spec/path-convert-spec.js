describe('path-convert module', function(){
  var PathConverter;
  beforeEach(function(){
    PathConverter = require('../path-convert.js');
  });

  describe('PathConverter class', function(){
    it('exists', function(){
      expect(PathConverter).toBeDefined();
    });
  });
});
