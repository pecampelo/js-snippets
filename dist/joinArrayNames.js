function joinArrayStrings(list1, list2) {
    let i, h, fullNames;
    for (i = 0; i < list2.length; i++) {
        if (list1[i] !== 'undefined' && list2[i] !== 'undefined') {
            for (h = 0; h < list2.length; h++) {
                fullNames.push(list1[h] + ' ' + list2[i]);
            }
        }
        else {
            console.log(`Arrays must be strings / There is an uneven number of strings.`);
            break;
        }
    }
}
function numberedList(item, index) {
    index = index + 1;
    console.log(index + " - " + item);
}
export { joinArrayStrings, numberedList };
