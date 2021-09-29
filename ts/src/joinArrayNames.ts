function joinArrayStrings(list1: string[] | string, list2: string[] | string) {
	let i: number, h: number, fullNames: string[];
    for (i = 0; i < list2.length; i++) {
			if (list1[i] !== 'undefined' && list2[i] !== 'undefined') {
       	for (h = 0; h < list2.length; h++) {
         	fullNames.push(list1[h] + ' ' + list2[i]);
        }
      } else {
    		  console.log(`Arrays must be strings / There is an uneven number of strings.`);
          break;
      }
    }
  }

function numberedList(item: string, index: number) {
  index = index + 1;
  console.log(index + " - " + item);
}

export {
    joinArrayStrings,
    numberedList
}
