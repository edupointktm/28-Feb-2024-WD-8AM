// WAP in javascript find sum of 55 different Number.
// syntax of Array
// var variable_name = array_list
// var num = []
var n = [5, 9, 8, 6, 47, 45, 12, 41, 14, 10]
var l =n.length
var sum=0
for (i = 0; i < l; i++) {
    
    sum = sum + n[i]
    
}
console.log("Total Sum = ",sum)

// WAP in javascript count total ODD and Even number from given data:
// var n = [5, 9, 8, 6, 47, 45, 12, 41, 14, 10]

var n = [5, 19, 81, 61, 47, 45, 12, 41, 14, 10]
var l = n.length

var count_even=0
var count_odd=0

for(i=0; i<l; i++){
        r = n[i]%2
        if(r==0){
            // count_even = count_even + 1
            count_even++
        }
        else{
            count_odd++
        } 
}
console.log("Total Even number is : "+count_even)
console.log("Total ODD number is : "+count_odd)
