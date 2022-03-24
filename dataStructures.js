// level {1}

//1)

let array = [1,2,3]
array.forEach(element => { return element + 1});

//2)

array.reduce((element , i) => { return element + array.indexOf(i)});

//3)
let data = {name: 'Elie', rank: 'Pro'}
console.log(JSON.stringify(data))








// level {2}
// 1)
var array = [1, 3, 4, 6, 7, 8]

removeAllEvenNumber=(array)=>{

  var filteredArray =  array.filter(element=>{return(element%2 !== 0)})
    console.log(filterdArray)
}

removeAllEvenNumber(array)
var InputArray = [1, 3, 4, 6, 7, 8, 2, 5]

findMaximumNumber=(array)=>{
    var maximum = array[0];

    for(let i=0; i< array.length; i++){
        if(array[i] < array[i+1]){
            maximum = array[i+1]
        }
     
    }
console.log(maximum)

}

findMaximumNumber(InputArray)


