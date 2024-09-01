let arr1=[1,2,3,4,5,6];
console.log(arr1[0]);
function arr(num) {
    if (num<2)return false;
    if (num==2)return true;
    for (let i = 2; i*i<=num;i++){
        if (num%i===0)return false;
    }
     return true;
}
console.log(arr(6));



const arr2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(mostFrequent(arr2));
function mostFrequent(arr2) {
    const frequency = {};
    for (const item of arr2) {
      frequency[item] = (frequency[item] || 0) + 1;
    }
    const maxFrequency = Math.max(...Object.values(frequency));
    return Object.keys(frequency).find(key => frequency[key] === maxFrequency);
  }
  
  

  for(let i=0;i<=15;i++);{
    if(i%2===0){
        console.log(i is even)
    }

    
  }
