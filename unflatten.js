function unflatten(flatObject) {
    // Write your code here
    const ans={};

    for(let key in flatObject)
    {
        const value = flatObject[key];
        const keyOriginal = key.split('.');

        let current = ans;
        for(let i=0;i<keyOriginal.length;i++){
            const part=keyOriginal[i];

            if(i==keyOriginal.length-1){
                current[part]=value;
            }else{
                const next = keyOriginal[i+1];
                const isArray= !isNaN(next);

                if(!current[part]){
                  current[part]=isArray ? []:{};
                }
                current = current[part];
            }

        }
    }
    return ans;
  }

  const flattened = {
    "flatJSON": false,
    "i.am.not.so.flat": true,
    "i.am.not.so.unflat": false,
    "i.am.a": "tree",
    "dates.0.day": 1,
    "dates.1.day": 8947
  };
  
  const unflattened = unflatten(flattened);
  console.log(unflattened);