import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import {  getGlassesOriginal } from './Utils/Utils';
import axios from 'axios';

const Search = (props:any) => {

  //State
  const [textContent, setTextContent] = useState(""); 

  
  const setTextContentInstate = (e: any) =>{  
    console.log("Contenido de e" + e.target.value);
    setTextContent(e.target.value);  
}

  const showMessageInConsole = ():void => {
    
  console.log(textContent);
  setTextContent(""); 

}

    // Example formatting
    const stackTokens: IStackTokens = { childrenGap: 20 };

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

    const dropdownStyles: Partial<IDropdownStyles> = {
      dropdown: { width: 200 },
    };
    
    const options: IDropdownOption[] = [
      { key: 'glasses', text: 'Glasses', itemType: DropdownMenuItemType.Header },
     
     
    ];

    function getGlasses () {
      let outputArray:string[] = [];
  
  
  axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
      .then((response)=>{
  
          
  
          let responseDataJson=response.data.drinks;
  
         
          for (let element in responseDataJson) {
               
            options.push({key:responseDataJson[element].strGlass,text:responseDataJson[element].strGlass});
            console.log(responseDataJson[element])
             
          }
          
    

           
         }
              
  )
  
  
  return outputArray;
  
  
  
  
  }


  function showAlert(){

    alert("hola");
  }
   
   
    useEffect(() => {
      getGlasses()
  
    }, []);

     
    return(
        <div>
            <Stack  tokens={stackTokens}>

                <Stack.Item align="center" >
                    
                    <SearchBox name="searchBox" className="searchBox"  styles={searchBoxStyles} placeholder="Cheers!" onChange={setTextContentInstate} value={textContent}/>

                </Stack.Item>


                <Stack.Item align="center" >

                    <PrimaryButton text="Search"   onClick={showMessageInConsole}/>

                </Stack.Item>

                <Stack.Item align="center">

                    <Toggle label="Allow freeform"  onClick={showAlert}/>

                </Stack.Item>

                <Stack.Item align="center">

               
               <Dropdown
                placeholder="Select a glass"
                label="Basic uncontrolled example"
                options={options}
                styles={dropdownStyles}
              />
             
                </Stack.Item>

                                
                </Stack>
            
        </div>
    );

}

 

export default Search;