// let arr = [1,true,1.1,"string", null, [1,2,3,4]];

//console.log(arr[arr.length-1][1]);

// //console.log(arr[arr.length-2]);
// function fn(){

//     console.log("hello");
//     return 10;
// }
//op: hell0
// 10
//console.log(fn());
//op: hello
//let eval = fn();
//op: hello
//10
// console.log(eval);

// 2

// function fn(){
//     console.log("function");
//     return "Hello";
// }

// let tempArr = [1,2,3,4,10];
// let tempOther = tempArr;
// let arr = [1,true,1.1,"string",null,tempOther,fn];

// // console.log(arr[arr.length-2]);
// console.log(arr[arr.length-1])

// 3
// function fn(){

//    let mv =  fn1();

//     console.log('function');
//     return "hello";
// }

// function fn1(){
//     console.log("I am fn1");
//     return "from fn1"
// }

// let rval = fn();
// console.log(rval);
//console.log("function", fn());

//4

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// for(let key in contacts){

//     console.log(key[0], ":", contacts)
// }

// for(let a = 0; a < contacts.length; a++){

//     console.log(contacts[a]);


// }


// function lookUpProfile(name, prop) {
//   // Only change code below this line  

//   for(let a = 0; a < contacts.length; a++){
//     let contact = contacts[a];
//     if(contact.firstName == name){
//         if(contact[prop]){
//             return contact[prop];
//         } else{
//             return "No"
//         }
//     }

// }


  

// //   for(let key in contacts){
// //  let contact = contacts[key];
// //  console.log(contacts[key])
// // if(contact.firstName == name){
// //     if(contact[prop]){
// //         return contact[prop]
// //     } else{
// //         return "No"
// //     }
// // }
//   }

 


  // Only change code above this line


// let ins = lookUpProfile("Harry", "likes");

//   console.log(ins)

// 5

var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
// let record = recordCollection; 
// console.log(record)
  
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    

    for(let key in records){
        
        let arr = [];

        if(key == id){
        records[prop] = records[value]
        }
        
    
    }

    
    return records;
  }
  
  let result = updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//    console.log(result);