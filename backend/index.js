const fs = require('fs');

let list = [];
fs.readdir('../public/assets/Tokenlogo','utf8',(err,data)=>{
    for(let keyName of data){
        list.push({
            name:keyName.split(".")[0],
            img:`/assets/Tokenlogo/${keyName}`
        })
    }
    console.log(list);
    fs.writeFileSync("../src/json/list.json",JSON.stringify(list,null,4))
})