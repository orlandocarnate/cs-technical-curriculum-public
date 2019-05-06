// THE CHALLENGE
// Create a simple counter with iterative loop to print 1 - 10

// Output:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


function counterRecursion(num) {

    // log the input num
    console.log(num);


    // end the recursive loop if num is 10
    if (num === 10) {
        return;
    }

    // recursively call the function
    return counterRecursion(num + 1);
}

counterRecursion(1);
