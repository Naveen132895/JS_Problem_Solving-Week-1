//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them. 
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow. 
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins. 
// Write a function to compute their share's.


//Write a function to calculate the of JackShare.
function find_JackShare(goldCoin,X,Y){
    j=goldCoin*(X/100.0);
    return j;
}


//Write a function to calculate the of Barbossa share.
function find_BarbossaShare(goldCoin,X,Y){
    j=goldCoin*(X/100.0);
    b1=goldCoin-j;
    b2=parseFloat(Y/100.0);
    b=b1*b2;
    return b;
}


//Write a function to calculate the of other pirates share.
function find_OtherShare(goldCoin,X,Y){
    j=goldCoin*(X/100.0);
    b1=goldCoin-j;
    b2=parseFloat(Y/100.0);
    b=b1*b2;
    r1=b1-b;
    r=r1/3;
    return r;  
}