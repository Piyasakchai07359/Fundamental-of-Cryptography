/* 
This code create for determine Greatest common divisor by using Euclidean algorithm.
*/

exports.gcd=function(x,y)
{
    while(x != y)
    {
        if (x>y) 
        { x = x-y;}
        else
        { y = y-x;}
    }
    return x;
}

