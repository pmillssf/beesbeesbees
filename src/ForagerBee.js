var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;
