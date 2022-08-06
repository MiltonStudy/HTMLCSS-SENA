function show(){	
	var aux = document.getElementById("selects").value;

	if (aux === "1"){
		//document.getElementById("label").innerHTML = "hola mundo";		
		img.setAttribute("src", "https://pageresources.000webhostapp.com/imgv2/paisaje.jpeg");
	} else if (aux === "2"){				
		// document.getElementById("label").innerHTML = "hello world";			
		img.setAttribute("src", "https://pageresources.000webhostapp.com/imgv2/concert.jpg");
	} else if (aux === "3"){
		// document.getElementById("label").innerHTML = "hello mundo";	
		img.setAttribute("src", "https://pageresources.000webhostapp.com/imgv2/bike_wp.jpg");
	}
}