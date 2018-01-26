Puzzle 1

//	Help Rudy the Red Dot collect all the green dots!

//	Control Rudy with the following commands:
//	down
//	down
//	down
//	down
//	down
//	down
//	down
//	right
//	right
//	right
//	right
//	right
//	up
//	up
//	right
//	right


Puzzle 2

//	Help Rudy the Red Dot collect all the green dots!

Function downThreeTimes{
	down
	down 
	down
}

//	downThreeTimes
//	downThreeTimes
//	right
//	right
//	right
//	up
//	up
//	right
//	right
//	downThreeTimes

Puzzle 3 

down
down
var firstColorSeen = getColor
down
down
down
right
right
setColor (blue)
right
right
up


Puzzle 4

down
down
down
down
right
var firstColorSeen = getColor
down
setColor (pink)
right
right
right
up
var firstColorSeen = getColor
down
setColor (blue)
right
right


Puzzle 5

right 
right
If (getColor == “blue”) {
	down
} else { 
	up
}
right
right
If (getColor == “blue”) {
	down
} else { 
	up
}
right
right
If (getColor == “blue”) {
	down
} else { 
	up
}
right
right
right


Puzzle 6

up
right
up
If (getColor == “blue”) {
	right
} else { getColor == “pink”}
	left
}
up




Puzzle 7

While (getColor !=pink) {
	Down
}
if (getColor == “pink”) {
	right
	right
}
While (getColor !=pink) {
	up
}
if (getColor == “pink”) {
	right
	right
}
While (getColor !=pink) {
	down
}
if (getColor == “pink”) {
	right
	right
}
While (getColor !=pink) {
	up
}
if (getColor == “pink”) {
	right
	right
}
While (getColor !=pink) {
	down
}
right


Puzzle 8

Function downSevenTimes{
	down
	down 
	down
	down
	down
	down
	down
}
Function upSevenTimes{
	up
	up 
	up
	up
	up
	up
	up
}


down
downSevenTimes
right
right
upSevenTimes
right
right
downSevenTimes
right
right
upSevenTimes
right
right
downSevenTimes
right


Puzzle 9

Var steps = 0
While (steps < 9) {
	right
	steps = steps + 1
}
Var steps = 0
While (steps < 9) {
	down
	steps = steps + 1
}
Var steps = 0
While (steps < 9) {
	left
	steps = steps + 1
}
Var steps = 0
While (steps < 9) {
	up
	steps = steps + 1
}


