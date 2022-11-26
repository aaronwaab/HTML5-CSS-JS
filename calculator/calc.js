
var input = '0' /* this is the starting h2 value in monitor*/
var globalVariable /* this is a global variable to update the input in each function */
var op
var saveValue;
var saveValue2;
var answer
/*  This function will take in values from the other functions and update the h2 tag
 in the html */

function func_clear() {
   var saveValue = '0';
   var saveValue2 = '0';
   var answer = 0;
}
 function myfunction_clear(input) {
    document.getElementById("screen").innerText = input; 
    globalVariable = input
}

/* The following code will be for the input of buttons */

/* The following functions wil be called by onclick from each corresponding 
buttons. Each button signifies a number or symbol */
 function myfunction1() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '1'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '1'
        myfunction_clear(input)
    }
 }
 function myfunction2() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '2'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '2'
        myfunction_clear(input)
    }
 }
 function myfunction3() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '3'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '3'
        myfunction_clear(input)
    }
 }
 function myfunction4() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '4'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '4'
        myfunction_clear(input)
    }
 }
 function myfunction5() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '5'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '5'
        myfunction_clear(input)
    }
 }
 function myfunction6() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '6'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '6'
        myfunction_clear(input)
    }
 }
 function myfunction7() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '7'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '7'
        myfunction_clear(input)
    }
 }
 function myfunction8() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '8'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '8'
        myfunction_clear(input)
    }
 }
 function myfunction9() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '9'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '9'
        myfunction_clear(input)
    }
 }
 function myfunction0() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '0'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '0'
        myfunction_clear(input)
    }
 }
 function myfunctionD() {
    
    if (globalVariable != '0' && globalVariable != '+' && globalVariable != '-' && globalVariable != 'x' && globalVariable != '/') {
    var input = globalVariable + '.'
    myfunction_clear(input)
    }

    else if (globalVariable = '0') {
        var input = '.'
        myfunction_clear(input)
    }
 }

 /* The following code will be for the oeprations */
 

 function myfunctionAd() {
   saveValue = parseFloat(globalVariable); // This will save the user input into another global var
   op = '+';
    //document.getElementById("screen").innerText = op;
    myfunctionStore(saveValue, op)
    var input = op;
    myfunction_clear(input)
 }
 function myfunctionSb() {
   saveValue = parseFloat(globalVariable); // This will save the user input into another global var
   op = '-';
    //document.getElementById("screen").innerText = op;
    myfunctionStore(saveValue, op)
    var input = op;
    myfunction_clear(input)
 }
 function myfunctionMu() {
   saveValue = parseFloat(globalVariable); // This will save the user input into another global var
   op = 'x';
    //document.getElementById("screen").innerText = op;
    myfunctionStore(saveValue, op)
    var input = op;
    myfunction_clear(input)
 }
 function myfunctionDi() {
   saveValue = parseFloat(globalVariable); // This will save the user input into another global var
   op = '/';
    //document.getElementById("screen").innerText = op;
    myfunctionStore(saveValue, op)
    var input = op;
    myfunction_clear(input)
 }

 function myfunctionEq() {
   if (input == '0') {
      document.getElementById("screen").innerText ='0';
   }
   saveValue2 = parseFloat(globalVariable)
    myfunctionStore()
 }

 /* This function will store the values */
 function myfunctionStore() {
    if (op == '+') {
      answer = saveValue + saveValue2;
    }
    else if (op == '-') {
      answer = saveValue - saveValue2;
    }
    else if (op == 'x') {
      answer = saveValue * saveValue2;
    }
    else if (op == '/') {
      answer = saveValue / saveValue2;
    }

    else {
      answer = 'undefined'
    }
    document.getElementById("screen").innerText = answer;
 }
 


