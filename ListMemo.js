//Pour mettre des "close buttons" pour chaque élément de la liste
//je récupère ma liste <li></li>
var myList = document.getElementsByTagName("li");
//pour chaque élément de la liste
for (var i = 0; i < myList.length; i++) {
//on crée un élément bouton
var button = document.createElement("button");
var text = document.createTextNode("\u00D7");
//personnaliser le bouton dans le css
button.className="close";
//on associe le text au bouton
button.appendChild(text);
myList[i].appendChild(button);
}

addListenner();

function addListenner(){
	var buttonremove = document.getElementsByClassName('close');
	var i = buttonremove.length;
	while (i--){
	  buttonremove[i].addEventListener("click", removeli);
	}
}
	
// Bouton add new task
	
function insertRow(){
	var li= document.createElement("li");

	
	var input=document.getElementById("text").value;

	var t= document.createTextNode(input);
	li.appendChild(t);
	var button=document.createElement("button");
	var text=document.createTextNode("\u00D7");
	button.className="close";
	button.appendChild(text);
	li.appendChild(button);
	
	//si l'utilisateur ne rentre aucune donnée
	if (input=== '') {
		alert ("veuiller écrire quelquechose svp");
	}
	//sinon on rajoute l'élément à liste
	else{
		document.getElementById("menu").appendChild(li);
		addListenner();
	}
	document.getElementById("text").value="";
	
	
}

function removeli(){
	var li = this.parentElement;
	li.remove();
}

function clearRows(){
	var ul = document.getElementById("menu");
	while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}

	
	
		
			