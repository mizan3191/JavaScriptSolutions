var divArea = document.querySelector("#my_div");
var heading = document.createElement("h4");
var text = document.createTextNode("Mymensingh");
heading.append(text);

divArea.append(heading);

var remove = document.getElementsByTagName("h2")[0];

divArea.removeChild(remove);
var heading2 = document.createElement("h2")
var text3 = document.createTextNode("Dhaka")
heading2.append(text3);

divArea.insertBefore(heading2,heading);

var classList = document.getElementById(".my_div").classList;

