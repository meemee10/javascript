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




//pour supprimer un élément de la liste
	//on récupère les éléments qui sont associés à un bouton close
	/*var close = document.getElementsByClassName("close");
	//on parcourt la liste
	for (var i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}*/
	
// Bouton add new task
	
	function insertRow(){
		//on crée un élément de la liste
		var li= document.createElement("li");
		//on récupère ce que tape l'utilisateur
		var input=document.getElementById("text").value;
		//on rajoute cet "input" en tant qu'élément de la liste
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
		}
		//document.getElementById("input").value="";
		
		
		
		/*var close = document.getElementsByClassName("close");
		quand on clique sur le bouton close, l'élément est retiré
		for(var i=0; i<close.length;i++) {
			close[i].onclick=function() {
				var div= this.parentElement;
				div.style.display="none";
			}
		}*/
		
		
		
		
	}
	
	document.getelementbyid("text").addEventListener("click", modifyText);
	
	function modifyText() {
  alert("tedt");
}
	
		
			