function calculateFrequency(string) {
    const arr=new Array(26).fill(0);
    let len=string.length;
    //console.log(len);
    for(let i=0;i<len;i++)
    {
        let ind=string.charCodeAt(i)- 97;
        arr[ind]+=1;
    }
    let ans=[];
   for(let i=0;i<len;i++)
    {
        let charVal=string.charCodeAt(i)-97;
        if(arr[charVal]>=0)
        {
            console.log(string[i],": ",arr[charVal]);
            arr[charVal]=-1;
        }
        
    }
 return 0;
}
calculateFrequency("harsh");
//   const t='b';
//   console.log(t.charCodeAt(0)-97);

  
