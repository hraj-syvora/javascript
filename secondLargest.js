function secondLargest(array) {
    // Write your code here
    let maxi=array[0],smaxi=-1;
    let size = array.length;
    for(var i=1;i<size;i++)
      {
        if(array[i]>maxi){
          smaxi=maxi;
          maxi=array[i];
        }else if(array[i]<maxi)
          {
            if(smaxi==-1 || smaxi < array[i]){
              smaxi=array[i];
            }
          }
      }
    return smaxi;
  }
   var array=[4,5,8,2,3,1,6];
  let x=secondLargest(array);
  console.log(x);