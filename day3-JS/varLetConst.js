const temp = () => {
    if(true){
        var userName = "Raj";
    }
    console.log(userName);
}
// temp();

const sumMod10  = (a, b) => {
    const ans = (a+b)%10;
    // console.log(ans);
    const prettyPrint = (txt) => {
        console.log("----", txt, "-----");
    }
    prettyPrint(ans);
    console.log("Sum Done");
}
sumMod10(10, 19);
console.log("END");

