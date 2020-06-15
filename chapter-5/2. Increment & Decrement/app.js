var initialValue = 5;
document.write("Initial Value: " + initialValue + "<br>");

var incrementValue = ++initialValue;
document.write("Value after increment is: " + incrementValue + "<br>");

var additionValue = incrementValue + 6;
document.write("Value after addition is: " + additionValue + "<br>");

var decrementValue = --additionValue;
document.write("Value after decrement is: " + decrementValue + "<br>");

var remainder = decrementValue - decrementValue;
document.write("Remainder is: " + remainder);
