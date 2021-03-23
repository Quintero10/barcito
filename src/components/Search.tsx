import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens, StackItem, initializeIcons } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import {  getGlassesOriginal } from './Utils/Utils';
import axios from 'axios';
initializeIcons();
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
    
                 <div className="ms-Grid" dir="ltr">
                              <div className="ms-Grid-row">
                              <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"> <Toggle  onClick={showAlert}/></div>
                             
                                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2"><SearchBox name="searchBox" className="searchBox"  styles={searchBoxStyles} placeholder="Cheers!" onChange={setTextContentInstate} value={textContent}/></div>
                                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2"> <Dropdown
                            placeholder="Select a glass"
                            options={options}
                            styles={dropdownStyles}
                        /></div>
                                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10"> <PrimaryButton text="Search"   onClick={showMessageInConsole}/></div>
                              </div>
                        </div>
                    
                       

                                
            
            
       
    );

}

 

export default Search;