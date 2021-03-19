import axios from "axios";

export function callbackGetGlasses(arrayGlasses:Array<String>){

    return arrayGlasses;
}

export function getGlasses (callback:any):Array<String> {
    let outputArray:Array<String> = [];


axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response)=>{

        console.log(response.data.drinks);

        let responseDataJson=response.data.drinks;

        for (let element in responseDataJson) {
             
            outputArray.push(responseDataJson[element].strGlass);

        }
         if(callback){
             callback(outputArray);
         }   
        }       
)

return outputArray;




}