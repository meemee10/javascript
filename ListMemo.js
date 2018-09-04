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
	var close = document.getElementsByClassName("close");
	//on parcourt la liste
	for (var i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}