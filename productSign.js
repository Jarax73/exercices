
function productSign(n, m) {
  // corps de la fonction ici
	if (n * m > 0){
		return 1;
	}
	else if (n * m < 0){
		return -1;
	}
	else{
		return 0;
	}
}

module.exports = productSign;