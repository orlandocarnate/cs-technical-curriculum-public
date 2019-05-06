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
    return str.replace(/[0-9]/g, '');
}

console.log(stringClean('Thi3s looks65 awesom4e!'));
