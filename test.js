const assert = require('chai').assert;
const welcomemsg = require('./testfun').welcomemsg;
describe('testfun',function(){
    it('testfun should return hello', function(){
            assert.equal(welcomemsg(),'hello bava');
    });
});