function whatIsInAName(collection, source) {
    function keyInObj(obj, key){
      return (key in obj)
    }
    function srcInObj(obj, srcObj, key){
      return obj[key] == srcObj[key]
    }
  
    let rtnArr = []
    let isUseful = []
    let srcKey = Object.keys(source);
    let lenArr = srcKey.length;
    let milaArr = [];
    for(let i = 0; i < lenArr; ++i){
      milaArr.push(undefined);
    }
    for(let j = 0; j < collection.length; ++j){
      milaArr = []
      for(let i = 0; i < lenArr; ++i){
        milaArr[i] = (keyInObj(collection[j], srcKey[i])) && srcInObj(collection[j], source, srcKey[i])
      }
      isUseful.push(milaArr)
    }
    //console.log(isUseful)
    for(let i = 0; i < isUseful.length; ++i){
      if(isUseful[i].includes(false)){
        continue;
      }
      else{
        rtnArr.push(collection[i])
      }
    }
    return rtnArr
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) )
  
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });