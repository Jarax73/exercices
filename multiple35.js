function multiple_3_5(n) {
  // corps de la fonction ici
	let addition = 0;
	for(let i = 0; i < n; i++){
		if(i % 3 == 0 || i % 5 == 0){
			addition += i;
		}
	}
	return addition;
}

module.exports = multiple_3_5;