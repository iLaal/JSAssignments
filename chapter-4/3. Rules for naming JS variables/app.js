var varNames = "Variable names can only contain";
var varBegins = "Variables must begin with a";
var varSensitive = "Variable names are case";
var varShudNot = "Variable names should not be JS";

document.write(
  `<h3>Rules for naming JS variables</h3> <br>
  ${varNames} <strong>numbers</strong>, <strong>$</strong> and <strong>_</strong>. For example <strong>$my_1stVariable</strong><br>
  ${varBegins} <strong>letter</strong>, <strong>$</strong>, or <strong>-</strong>.  For example <strong>$name</strong>, <strong>_name</strong> or <strong>name</strong><br>
  ${varSensitive} <strong>Sensitive</strong><br>
  ${varShudNot} <strong>Keywords</strong>`
);
