/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board. */

var string;

for(var i = 1; i <= 8; i++){
	string += "# # # #\n"
}
console.log(string);