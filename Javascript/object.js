//Different between array and object
// var n = [4, 5, 8]

// var student = {key:value, key:value, Key:value, .....}
var student = {names:"Ram Regmi", add:"KTM", age:32, gender:"Male"}

// console.log(student.names)
// console.log(student.add)
// console.log(student.age)
// console.log(student.gender)

//Array of Object
var student = [
    {
        names:"Mohan Dhakal", 
        age:25, add:"KTM"
    }, 
    {
        names:"Santosh Dhakal", 
        age:12, 
        add:"JNK"
    }, 
    {
        names:"Rohit Shresth",
        age:15,
        add:"PKH"
    }
]

var l = student.length;
document.write(`
    <table border=1>
    <tr>
       <th>SN</th> 
       <th> Names </th>
       <th> Address </th>
       <th> Age </th>
    </tr>
`)
for(i=0; i<l; i++){
 document.write(`
    <tr> 
       <td> ${i+1} </td>
       <td>${student[i].names} </td> 
       <td>${student[i].age} </td>
       <td>${student[i].add} </td>
    </tr> 
`)

}
document.write(`</table>`)