
var myList = document.getElementsByTagName("li");

for (var i = 0; i < myList.length; i++) {
	var button = document.createElement("button");
	var text = document.createTextNode("\u00D7");

	button.className="close";

	button.appendChild(text);
	myList[i].appendChild(button);
}

//permet d'utiliser la touche entrer
var input = document.getElementById("text");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    insertRow();
  }
}); 

addListenner();

//ajout des events sur les boutons remove
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

//suppression d'une task
function removeli(){
	var li = this.parentElement;
	li.remove();
}

//suppression de toutes les tasks
function clearRows(){
	var ul = document.getElementById("menu");
	while (ul.firstChild) {
	    ul.removeChild(ul.firstChild);
	}
}

//recherche
function search() {
    
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






	
	
		
			