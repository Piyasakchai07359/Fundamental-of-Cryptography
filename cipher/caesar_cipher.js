/*
This is Caesar Cipher input 2 parameters are plain_text and key
*/
exports.caesar_cipher=function(plain_text,key)
{
    let cipher_text=[];
    for(let i=0;i<plain_text.length;i++)
    {
        if (plain_text.codePointAt(i) === 32)
        {
        cipher_text.push(" ");
        }
        else
        {
        cipher_text.push(String.fromCharCode(plain_text.codePointAt(i)+key));
        }
        
    }
    cipher_text = cipher_text.join("");
    return cipher_text;
}