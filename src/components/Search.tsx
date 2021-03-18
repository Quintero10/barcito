import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import { getGlasses } from './Utils/Utils';

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
      { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
      { key: 'apple', text: 'Apple' },
      { key: 'banana', text: 'Banana' },
      { key: 'orange', text: 'Orange', disabled: true },
      { key: 'grape', text: 'Grape' },
      { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
      { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
      { key: 'broccoli', text: 'Broccoli' },
      { key: 'carrot', text: 'Carrot' },
      { key: 'lettuce', text: 'Lettuce' },
    ];

 
     
     
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