import {Helper} from 'codeceptjs';
import {expect} from 'chai';

class TestChai extends Helper {

  expectUndefined(actual){
    return expect(actual).to.be.undefined;
  }

  expectNotUndefined(actual){
    return expect(actual).not.to.be.undefined;
  }

  expectTrue(actual:boolean) {
    return expect(actual).to.be.true;
  }

  expectEqualArray(actual, expected){
    return expect(actual).eql(expected);
  }

  expectEqualValue(actual, expected, message?) {
    return expect(actual).to.equal(expected, message);
  }

  expectDeepEqual(actual, expected) {
    return expect(actual).to.deep.equal(expected);
  }

  expectNotEqualValue(actual, expected) {
    return expect(actual).to.not.equal(expected);
  }

  expectEqualArraysWithoutOrder(actual, expected) {
    return expect(actual).to.have.deep.members(expected);
  }

  expectContainsProperty(actual, expected) {
    return expect(actual).to.contain.members(expected);
  }

  expecttHaveProperty(actual, expected) {
    return expect(actual).to.have.property(expected);
  }

  expectLength(actual, expected){
    return expect(actual).to.length(expected);
  }

  // Not recommended
  expectExist(actual){
    return expect(actual).to.exist;
  }

  // Not recommended
  expectNotEmpty(actual){
    return expect(actual).to.not.be.empty;
  }

  expectNumber(actual){
    return expect(actual).to.be.a('number');
  }

  expectString(actual){
    return expect(actual).to.be.a('string');
  }

  expectObject(actual,msg){
    return expect(actual).to.be.an('object',msg);
  }

  // Not recommended
  expectMost(actual, expected){
    expect(actual).to.be.at.most(expected);
  }

  expectAtLeast(actual, expected){
    expect(actual).to.be.at.least(expected);
  }
}

export = TestChai;
