// level {1}




// level {2}
var number = 6;
fibonacciSeries=(size)=>{
    let StartingNumber = 1;
    letprintNumber;

for(let NextNumber = 0 ; NextNumber ==+ number; number++){
        PrintNumber = PrintNumber + NextNumber
        console.log(StartingNumber + ' ' + PrintNumber)
    }
}

fibonacciSeries(number)


// level {3}

let inputObject = {
  liked: [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "John Smith", age: 40 }
  ],
  disliked: [
    { id: 4, name: "Jason Doe", age: 20 },
    { id: 5, name: "Josh Doe", age: 30 },
    { id: 6, name: "Karen Smith", age: 40 }
  ],
  loved: [
    { id: 7, name: "Jasmine Doe", age: 20 },
    { id: 8, name: "Bob Doe", age: 30 },
    { id: 9, name: "Tom Smith", age: 40 }
  ]
}

convertToArray=()=>{
    let newArray = [];
    inputObject.liked.map(value=>{
        value[reaction] = 'liked';
    })

     inputObject.disliked.map(value=>{
        value[reaction] = 'disliked';
    })

     inputObject.loved.map(value=>{
        value[reaction] = 'loved';
    })

    newArray.push(inputObject.liked)
    newArray.push(inputObject.disliked)
    newArray.push(inputObject.loved)


    console.log(newArray)
}
