function flatten(unflatObject) {
  // Write your code here
  let ans={};
  for(let key in unflatObject)
    {
      if(typeof unflatObject[key] === 'object'){
      helper(key,unflatObject[key],ans);
      }else{
        ans[key]=unflatObject[key];
      }
    }

  return ans;
}

function helper(prevString,obj,ans){
  for(let key in obj){
   if(typeof obj[key] === 'object')
    {
      //console.log(`^^^^^^${prevString}`)
      helper(`${prevString}.`+ `${key}`,obj[key],ans);
    }else{
      ans[`${prevString}.`+`${key}`]=obj[key];
    }
  }
  return ans;
}
let unflatObject = {
  "flatJSON": false,
  "i": {
    "am": {
      "not": {
        "so": {
          "flat": true,
          "unflat": false
        }
      },
      "a": "tree"
    }
  },
  "dates": [{
    "day": 1
  }, {
    "day": 8947
  }]
};
console.log(flatten(unflatObject));






