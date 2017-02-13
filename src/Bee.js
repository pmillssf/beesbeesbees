var Bee = function() {
  // Grub.call(this);
  Grub.call(this);
};
// set Bee.prototype to Object.create(Grub.prototype);
Bee.prototype = Object.create(Grub.prototype);

// set Bee.prototype.constructor to Bee
Bee.prototype.constructor = Bee;


