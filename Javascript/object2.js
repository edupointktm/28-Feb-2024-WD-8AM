// difference between Array nad object
//Array
// var studnet = ["ram", "gopal", "hari", "krishan"]
// // access
// console.log(studnet[1])

// //object
// // var student = {key:value, key:value, Key:value, ...}
// var studnet = { names: "Ram Regmi", add: "KTM", gender: "Male", age: 45 }
// //access
// console.log(studnet.add)


// Array of object
var student = [
    {
        names: "Ram Regmi",
        add: "KTM", 
        age: 54,
        gender: "Male"
    },
    {
        names: "Prbhat Mallik",
        add:"JNK",
        age:54,
        gender:"Male"
    },
    {
        names: "Santosh Dhakal",
        add:"PKH",
        age:12,
        gender:"Male"
    }
]

// access

// console.log(student[1].names)
// console.log(student[1].add)
// console.log(student[1].age)
// console.log(student[1].gender)
var len = student.length
for(i=0; i<len; i++){
document.write(`${student[i].names}  ${student[i].add} ${student[i].age} ${student[i].gender} <br>`)

}