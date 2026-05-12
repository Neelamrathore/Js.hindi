let a =300
if (true){
    let a = 10
    const b =20
    //console.log("inner: " + a); // 10
}

//console.log(a);// 300


function one() {
    const username = "John";

    function two() {
        const website = "youtube";
        //console.log(username); // John




}
        
        //console.log(website); // youtube
    two()
}

one()



if (true) {
    const username = "John";
    if (username === "John")    {
        const website = " youtube"
        //console.log(username+website); // John youtube  



    }    //console.log(website); // youtube


}

//++++++++++++++++intersting+++++++++++

function addone(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
addTwo(5) // 7

