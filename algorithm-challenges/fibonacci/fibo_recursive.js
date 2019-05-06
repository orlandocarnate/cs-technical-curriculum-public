// THE CHALLENGE

/* 
The fibonacci sequence is perhaps one of the most famous algorithms,
and definitely one of the most tested during technical interviews.

Give a number N, return the index value of the Fibonacci sequence,
where the sequence is:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

The sequence is relatively simple mathematics. Each value is the sum
of the previous two values or:

F(n) = F(n-1) + F(n-2)
*/

function fibonacci(num) {

    // if number is less than or equal to 1, we want to return the "num" that was inputted
    if (num <= 1) return 1;

    // otherwise, take the input number - 1 and the input number - 2 and add them together
    // return the result
    return fibonacci(num - 1) + fibonacci(num - 2);

}

// execute the function
fibonacci(4)

//*************************/