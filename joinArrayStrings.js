const foodMacros = ['fat', 'protein', 'carbohydrate'];
const productCategories = ['clothes', 'food', 'glasses', 'jewelry', 'shoes'];
const clientTypes = ['woman', 'man', 'child', 'elderly', 'college student'];
const firstNames = ['John', 'David', 'Robert', 'Leonardo', 'Kim' , 'Jackson', 'Pedro'];
const lastNames = ['Washington', 'Beckham', 'Chambers', 'Redford', 'DiCaprio', 'Peralta', 'Maffini'];
const ageList = ['22','22','22','22','22','22','22'];

//let Person = function() {
  //  if (firstNames) {
    //	let i = 0;
   // 	for (i = 0; i < firstNames.length && i < lastNames.length; i++) {
    //		this.fName = firstNames[i];
      //      this.lName = lastNames[i];
       //     this.age = ageList[i];  }
   // } else {
   // }
//} 


function joinArrayStrings(a,b,c) {
	if (typeof c !== 'string') {
    	c = '';
    } else {}
	let i, h = 0;
    let fullNames = [];
    for (i = 0; i < b.length; i++) {
			if (a[i] !== 'undefined' && b[i] !== 'undefined') {
        		for (h = 0; h < a.length; h++) {
                	fullNames.push(a[h] + ' ' + c + ' ' + b[i]);    
            }
    	} else {
      			document.write(`There are things out of place. Check names, please.`);
            break;
      }
    }
    fullNames.forEach(listArray);    
    function listArray(item, index) {
  		index = index + 1;
			document.write (index + " - " + item + ' <br>'); 
		}
}

joinArrayStrings(firstNames,lastNames);
document.write ('<br> <br>'); 
// document.write(Person.age);
