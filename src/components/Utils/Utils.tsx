import axios from "axios";



export function getGlassesOriginal () {
    let outputArray:string[] = [];


axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response)=>{

        

        let responseDataJson=response.data.drinks;

        var i=0;
        for (let element in responseDataJson) {
             
            outputArray.push(responseDataJson[element].strGlass.toString());
           
        }
        return outputArray;   
       }
          
)







}