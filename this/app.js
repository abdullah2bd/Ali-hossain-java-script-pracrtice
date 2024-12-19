const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
// console.log(test.func());



const object = {
  name: "object",
  prop: 42,
  getThis() {
    return this.prop;
  },
};

console.log(object.getThis());














