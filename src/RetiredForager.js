var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

