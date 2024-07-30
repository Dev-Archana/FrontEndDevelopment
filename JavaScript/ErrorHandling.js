/* The try statement lets you test a block of code to check for errors.
The catch statement lets you handle the error if any are present.
The throw statement lets you make your own errors.
The finally statement lets you execute code after try and catch.  
The finally block runs regardless of the result of the try-catch block */

/* GIVE ME EXCEPTION HANDLING CODE */

try {
    let a = 10;
    let b = 0;
    let result = a / b;
    console.log(result);
} catch (error) {
    console.error("Error:", error);
} finally {
    console.log("Finally block executed");
}
