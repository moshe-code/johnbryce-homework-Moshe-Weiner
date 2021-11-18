const outputBox = document.getElementById('output-box')
let counter = 0

const runCode = () => {
    outputBox.innerHTML = ''
    let input = document.getElementById('input-box').value
    doWork(checkForNum, input)
}

const checkForNum = (input) => {
    try {
        if (isNaN(input)) {
            outputBox.innerHTML = "This is NOT a number"
        } else {
            outputBox.innerHTML = input

        }
    } catch (e) {

    }
}
//***********************************************/
const doWork = (callBack, input) => {
    callBack (input)
}


const myName = ()=>{
    alert("Moshe")
}
const a = (callback) => {
    callback( alert("cool"));
}
a(myName);

//****************************************************/

