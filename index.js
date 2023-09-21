let arr = ["samira", "azizabonu", "aziza", "shaxzod", "bobur", "safir", "xojik", "ismail", "abdumanon", "tom"]
let name = prompt('Какого студента удаляем?')

arr.indexOf(name) && arr.splice(name, 1) 
    console.log(
        arr
    );
