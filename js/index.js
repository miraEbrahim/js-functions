//Function that reverses a string 
function reverseString (reverseMe) {
    var reversed = "";
    for (var i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
};

console.log("Hi " + reverseString("John") + "!");



function laugh() {
    var laughed = "hahahahhah";
    return laughed;
}

console.log(laugh());


function multiLaugh(num){
    var ha = ""; 
    for ( var i = 0; i < num ; i++  ) {
        ha += "ha ";
    }

    return ha;
}

console.log(multiLaugh(3));