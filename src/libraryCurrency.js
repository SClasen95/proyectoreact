const rp=require("request-promise");

function convertir(monedaBase){
    var options={
        url:"https://v6.exchangerate-api.com/v6/7b3ab2ed414971431890f085/latest/"+monedaBase,
        json:true
    }
    return rp(options);
}
module.exports=convertir;