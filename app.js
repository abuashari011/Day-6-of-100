// Array 
let array = [2,5,6,10,50,5,60,45];
let found1 = false;
let findingNumber1 = '';
for( let i = 0; i <= array.length; i++){
    if( array[i] % 5 === 0){
        console.log('Devided By the 5 Index of ' + (i+1));
        found1 = true;
        findingNumber1 += array[i] + ' ';
    }
    
}
if( !found1){
    console.log('Data not found')
}
console.log(findingNumber1);

//  sum the total number 
let sum1 = 0;
let initial = 1;
let upto = 5;
for( let i = initial; i <= upto; i++){
    sum1 += i;
}
console.log(`Sum the Number from ${initial} to ${upto} ==> ${sum1}`);
console.log(sum1)

// sum the Even number 
let sum2 = 0;
let initial2 = 0;
let upto2 = 10;
for ( let i = initial2; i <= upto2; i++){
   if( i % 2 === 0){
       sum2 += i;
   }
}
console.log(`Sum the Even number from ${initial2} to ${upto2} ==> ${sum2} `);
console.log(sum2);

// sum the Odd number 
let sum3 = 0;
let initial3 = 0;
let upto3 = 10;
for ( let i = initial3; i <= upto3; i++){
   if( i % 2 === 1){
       sum3 += i;
   }
}
console.log(`Sum the Even number from ${initial3} to ${upto3} ==> ${sum3} `);
console.log(sum3);

// Multypy the Even Number ;
let multypy1 = 1;
let init1 = 1;
let up1 = 10;
let even = '';
for ( let i = init1; i <= up1; i++){
    if(i % 2 === 0){
        multypy1 *= i;
        even +=  i + ' ';
    }
}
console.log(`Multypy the Even number ${init1} to ${up1} ==> ${multypy1}`);
console.log(multypy1);
console.log(even);

// Find the Even number in array 

let arr = [2,4,5,6,78,3,34,45,2];
let count = 0;
let totalEven = 0;
let sum = 0;
let even1 = '';
for( let i = 0; i <= arr.length; i++){
    if ( arr[i] % 2 === 1){
        count++;
        console.log(`Number ${count} Even Number in Array the Position is ${(i+1)} And that is ==> ${arr[i]}`)
        totalEven++;
        sum += arr[i];
        even1 += arr[i] + ' ';
    }
}
console.log(`Total Even number in this Array [${arr.join(' , ')}]  is ${totalEven}`);
console.log(`Total Summtion Of  (${even1}) is ${sum}`);


// Find the Oddnumber in array 

let arr1 = [2,4,5,6,78,3,34,45,2];
let count1 = 0;
let totalEven1 = 0;
let sum5 = 0;
let even2 = '';
for( let i = 0; i <= arr1.length; i++){
    if ( arr1[i] % 2 === 0){
        count1++;
        console.log(`Number ${count1} Odd Number in Array the Position is ${(i+1)} And that is ==> ${arr1[i]}`)
        totalEven1++;
        sum5 += arr1[i];
        even2 += arr1[i] + ' ';
    }
}
console.log(`Total Odd number in this Array [${arr1.join(' , ')}]  is ${totalEven1}`);
console.log(`Total Summtion Of  (${even2}) is ${sum5}`);