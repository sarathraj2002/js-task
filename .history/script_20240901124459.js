let arr1=[1,2,3,4,5,6];
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



const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(mostFrequent(arr));
function mostFrequent(arr) {
    const frequency = {};
    for (const item of arr) {
      frequency[item] = (frequency[item] || 0) + 1;
    }
    const maxFrequency = Math.max(...Object.values(frequency));
    return Object.keys(frequency).find(key => frequency[key] === maxFrequency);
  }
  
  