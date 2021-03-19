import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import { callbackGetGlasses, getGlasses } from './Utils/Utils';

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
      dropdown: { width: 300 },
    };
    
    const options: IDropdownOption[] = [
      { key: 'glasses', text: 'Glasses', itemType: DropdownMenuItemType.Header },
      { key: 'apple', text: 'Apple' },
     
    ];

    function poblateDropdown(){
      debugger;
       let glasses: Array<String>=callbackGetGlasses();
       console.log("vasos desde Search" +glasses);
       glasses.map(
         (glass)=>{
           options.push({key:glass.toLowerCase(),text:glass.toString()});
         }
       )
    };
   poblateDropdown();
     
     
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

                    <Toggle label="Allow freeform"  />

                </Stack.Item>

                <Stack.Item align="center">

               
               <Dropdown
                placeholder="Select an option"
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