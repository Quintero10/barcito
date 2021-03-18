import axios from "axios";


export function getGlasses ():Array<String> {
    let outputArray:Array<String> = [];


axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list").then(
     
    (response)=>{

        console.log(response.data.drinks);

        let responseDataJson=response.data.drinks;

       
        for (let element in responseDataJson) {
             
            outputArray.push(responseDataJson[element].strGlass);
        }
        
       
       
        }       
)

return outputArray;




}