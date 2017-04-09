/* Any serious ecosystem has a food chain longer than a single link.
Write another critter that survives by eating the herbivore critter.
You’ll notice that stability is even harder to achieve now that there are
cycles at multiple levels. Try to find a strategy to make the ecosystem run
smoothly for at least a little while.

One thing that will help is to make the world bigger.
This way, local population booms or busts are less likely to wipe out a species
entirely, and there is space for the relatively large prey population needed to
sustain a small predator population.*/

function Tiger() {
  this.energy = 100;
  this.direction = "e";
  this.spotted = [];
}

Tiger.prototype.act = function(view) {
  var avgSeen = this.spotted.reduce(function(x, y){
    return x+y;
  }, 0) / this.spotted.length;

  var prey = view.findAll('O');
  this.spotted.push(prey.length);

  if (this.spotted.length > 6){
    this.spotted.shift()
  }

  if(prey.length && avgSeen > 0.25){
    return {type: "eat", direction: randomElement(prey)};
  }

  var space = view.find(" ");
  if (this.energy > 150 && space)
    return {type: "reproduce", direction: space};
  var animal = view.find("O");
  if (view.look(this.direction) != " " && space)
      this.direction = space;
  return {type: "move", direction: this.direction};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
