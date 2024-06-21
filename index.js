const arr1=[10,20,30];
arr1[0]=12;
console.log(arr1);

const arr=[10,20,3,4,5,6];
function double(val){
    return val*3;
}
// for(const i of arr)
// {
//     console.log(i);
// }

const doubled =arr.map(double);
console.log(doubled);

function isDoub(val)
{
    return val >30;
}
const isDoubled = doubled.filter(isDoub);
console.log(isDoubled);

const choice =3;
switch(choice){
    case 1:
        console.log(one);
        break;
    case 2:
        console.log(two);
        break;
    default:
        console.log()    
}
const add=1;