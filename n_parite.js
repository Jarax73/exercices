function nParite(n, parite) {
  // corps de la fonction
	
	let sum = 0;
	if(parite > 0){
		for(let i = 0; i < n * 2; i += 2){
		sum += i;
		}	
	}
	else if(parite == 0){
	    for(let i = 0; i < n * 2; i += 2){
		sum += i + 1;
	  }
	}    
	return (sum);
}

module.exports = nParite;