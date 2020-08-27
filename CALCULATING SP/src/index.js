//A man buys a cycle for Rs. a and sells it at a loss of b%. What is the selling price of the cycle?
// Write a Function to compute the roundof selling price.

// Write a Function to compute the doundof selling price.
function find_SellingPrice(a,b){
    SP=(100-b)/100.00;
    SP2=(SP*a);
    return Math.round(SP2);
}
