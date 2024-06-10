const div = document.createElement("div");
div.id = "jsDiv";
div.className = "Div-Class";

const head = document.createElement("h2");
head.textContent = "This heading was made by JS";

const button = document.createElement("button");
button.id="Js-Button";
button.textContent="click";
button.className="NewJsButton";

div.append(head);
div.append(button);

// document.getElementById("root").append("div");
document.getElementById("root").append(div);
