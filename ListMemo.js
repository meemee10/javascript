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

	var t= document.createElement("span");
	var value=document.createTextNode(input);
	t.appendChild(value);
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


function search() {
    // Declare variables
    
    var input = document.getElementById('searchInput');
    var ul = document.getElementById("menu");
    var li = ul.getElementsByTagName('li');
	var filter = input.value.toUpperCase();

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
		
		
       var span = li[i].getElementsByTagName("span")[0];
        if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






	
	
		
			