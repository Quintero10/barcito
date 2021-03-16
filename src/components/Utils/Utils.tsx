import axios from "axios";


export function getGlasses ():string[] {

const arrayString: string[] =[];

axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list").then(
     
    response=>console.log(response)
)

return arrayString;

}