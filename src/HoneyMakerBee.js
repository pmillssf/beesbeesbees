var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;
