# Mr. Robogers Neighborhood

#### By Austin Butler

## Description

_A Web app that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_
  * Numbers that contain a 1: all digits are replaced with "Beep!"
  * Numbers that contain a 2: all digits are replaced with "Boop!"
  * Numbers that contain a 3: all digits are replaced with "Wont you be my neighbor?"

## Setup/Installation Requirements

* _Clone this repository: https://github.com/austinb847/robogers-neighborhood_

## Known Bugs

_None_

## Specifications

| Behavior                                                                                        	| Input   	| Output                      	|
|-------------------------------------------------------------------------------------------------	|---------	|-----------------------------	|
| The program only takes numbers                                                                  	| "robot" 	| NaN                         	|
| The program returns a range of  numbers from 0 to the users input number                        	| 4       	| "0,1,2,3,4"                 	|
| The program will replace all digits with  "Beep!" if the number contains a 1                    	| 1       	| "Beep!"                     	|
| The program will replace all digits with  "Boop!" if the number contains a 2                    	| 2       	| "Boop!"                     	|
| The program will replace all digits with "Wont you be my neighbor?" if the number  contains a 3 	| 3       	| "Wont you be my neighbor?"  	|
| The program will apply the first exception unless the 2nd exception applies                     	| 21      	| "Boop!"                     	|
| The program will apply the second exception unless the 3rd exception applies                    	| 32      	| "Wont you be  my neighbor?" 	|

## Technologies Used

* HTML
* CSS/Bootstrap
* JavaScript
* JQuery

Copyright (c) 2020 **_Austin Butler_**