const fs = require("fs")

// fs.writeFile("./files/arquivo.txt", "Primeiro arquivo", function(err){
//     if(err){
//         return console.log(`Something went wrong ${err}`)
//     }
// })

// fs.readFile("./files/arquivo.txt", "utf8", function(err, data){
//     if(err){
//         return console.log(`Something went wrong ${err}`)
//     }
//     console.log(data)
// })

// fs.rename("./files/arquivo.txt", "./files/opaopa.txt", function(err){
//     if(err){
//         return console.log(`Something went wrong ${err}`)
//     }
//     console.log("Sucesso")
// })

fs.unlink("./files/opaopa.txt", function(err){
    if(err){
        return console.log("Something went wrong")
    }
})