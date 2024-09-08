const input=document.getElementById("text-input");
const result=document.getElementById("result");
const checkBtn=document.getElementById("check-btn");
const resultMsg=document.getElementById("result-msg");

const cleanInput = (str)=>{
    const  regex = /[^a-zA-z0-9]|_/g;

    return str.replace(regex, '');
    // return str1.replace(regex2,'');
}

const check = ()=>{
    const textInput = input.value;
    const cleaned=cleanInput(textInput);
    console.log("cl",cleaned);
    const cleanedlowerCaseInput = cleaned.toLowerCase();
    console.log("low",cleanedlowerCaseInput);
    const reversed= cleanedlowerCaseInput.split('').reverse().join('');
    console.log("rev",reversed);
    if(textInput == ""){
        alert("Please input a value");
    } else if(cleanedlowerCaseInput == reversed ) {
        resultMsg.textContent=`${textInput} is a palindrome`;
        input.value='';
        console.log("palindrome");
    } else {
        resultMsg.textContent=`${textInput} is not a palindrome`
        input.value='';
        console.log("not a palindrome");
        
    }



}
checkBtn.addEventListener("click",check);
// console.log(cleanUpInput("jAADF,./';[]\"));