function Accumulator() {
  this.accum = [];
}
TodoList.prototype.addItem = function (item) {
  this.accum.push(item);
};
