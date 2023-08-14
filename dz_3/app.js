let array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
let newArray =[]
for (let number of array){
    let strNumber = number.toString()
    if (strNumber.startsWith(2) || strNumber.startsWith(5)){
        newArray.push( number)
    }
}

 console.log(newArray)


function checkType( elem ){
    console.log( typeof (elem));
}
checkType(133123)
checkType('didsopcj')
checkType(true)




 let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tagObject = {}

for ( let tag of tags) {
    if ( tagObject [ tag]) {
        tagObject [ tag]+=1
    }
    else{
        tagObject[ tag] = 1
    }
}
console.log(tagObject)
