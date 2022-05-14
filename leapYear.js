function leapYear(year) {
  // corps de la fonction
	if(year % 4 == 0 && year % 400 == 0 || year % 100 != 0){
		return true;
	}
	else{
		return false;
	}
}

module.exports = leapYear;