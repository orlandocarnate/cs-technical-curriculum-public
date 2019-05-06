// THE CHALLENGE

// For a string that contains numerical characters, remove the numerical characters but leave special characters and whitespace intact.
// Special characters include: ~#$%^&!@*():;"'.,?
// input number params: n>=0 && n<=arr.length

// For example:

// Input:
// stringClean('Thi3s looks65 awesom4e!') 

// Output:
// 'This looks awesome!'

function stringClean(str) {
    var finalArr = [];
    for (var i = 0; i < str.length; i++) {
        if (
            str[i] === '0' ||
            str[i] === '1' ||
            str[i] === '2' ||
            str[i] === '3' ||
            str[i] === '4' ||
            str[i] === '5' ||
            str[i] === '6' ||
            str[i] === '7' ||
            str[i] === '8' ||
            str[i] === '9'
        ) {
        } else {
            finalArr.push(str[i]);
        }
    }
    return finalArr.join('');
}

console.log(stringClean('Thi3s looks65 awesom4e!'));
