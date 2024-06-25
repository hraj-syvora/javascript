function calculateFrequency(string) {
    const arr=new Array(26).fill(0);
    let len=string.length;
    //console.log(len);
    const ans={};
    for(let i=0;i<len;i++)
    {
        let ind=string.charCodeAt(i)- 97;
        if(ind>=0 && ind<=25)
        {
        arr[ind]+=1;
        ans[string[i]] = arr[ind];
        }
    }

    
 return ans;
}
console.log(calculateFrequency("u@#d$fkj$#!kds"));
//   const t='b';
//   console.log(t.charCodeAt(0)-97);

  
