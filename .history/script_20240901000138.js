let arr=[1,2,3,4,5,6];
console.log(arr[0]);
function arr1(num) {
    if (num<2)return false;
    if (num==2)return true;
    for (let i = 2; i*i<=num;i++){
        if (num%i===0)return false;
    }
     return true;
}
console.log(arr1(6));


let arr=[1,1,2,2,3,3,3,3,5,6,3,5,2,2,4,4,7,6,9];
function (params) {
    
}