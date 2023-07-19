function spinalCase(str) {
    let strArr = str.split("");
    
    let newArr = [];
  
    for(let i = 0; i < strArr.length; ++i){
      (i == 0)&&(strArr[0] = strArr[0].toLowerCase());
      (strArr[i] == '_' || strArr[i] == ' ')&&(strArr[i] = '-');
    }
  
    for (let i = 0; i <= strArr.length; ++i){
      if(strArr[i] != '-' && strArr[i] != undefined){
        if((strArr[i] === strArr[i].toUpperCase())&&(strArr[i-1] != "-")){
          strArr[i] = "-"+strArr[i];
        }
      }
    }
    strArr = strArr.map(elem => elem.toLowerCase())
    let rtnStr = strArr.join("")
    console.log(rtnStr)
    return rtnStr;
  }
  
  //spinalCase('This Is Spinal Tap');
  
  spinalCase("AllThe-small Things_Also")