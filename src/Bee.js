var Bee = function() {
  // Grub.call(this);
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};
// set Bee.prototype to Object.create(Grub.prototype);
Bee.prototype = Object.create(Grub.prototype);

// set Bee.prototype.constructor to Bee
Bee.prototype.constructor = Bee;


