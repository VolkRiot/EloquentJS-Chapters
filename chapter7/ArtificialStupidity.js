/*Artificial stupidity
Having the inhabitants of our world go extinct after a few minutes is kind of
depressing. To deal with this, we could try to create a smarter plant eater.

There are several obvious problems with our herbivores.

First, they are terribly
greedy, stuffing themselves with every plant they see until they have wiped out
the local plant life.

Second, their randomized movement (recall that the
view.find method returns a random direction when multiple directions match)
causes them to stumble around ineffectively and starve if there don’t happen
to be any plants nearby.

And finally, they breed very fast, which makes the
cycles between abundance and famine quite intense.

Write a new critter type that tries to address one or more of these points and
substitute it for the old PlantEater type in the valley world. See how it fares.
Tweak it some more if necessary.*/

function SmartPlantEater() {
  this.energy = 20;
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 70 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant && this.energy < 50)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};
