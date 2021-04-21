import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens, StackItem, initializeIcons } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import {  getGlassesOriginal } from './Utils/Utils';
import axios from 'axios';
import '../Search.css';
import { AppCtx} from './Context/CategoriasContext';
import { TextContext } from '../App';


initializeIcons();


const Search = () => {
  const {update } = React.useContext(TextContext);
  //State
   const[textContent,setTextContent]=useState('');
  const [textBoxDisabled,disableTextBox]=useState(false);
  const [comboBoxDisabled,disableComboBox]=useState(true);
  const CategoriasContextInSearch=React.useContext(AppCtx)
  
  const setTextContentInstate = (e: any) =>{  
    if(e != undefined){
    setTextContent(e.target.value);
  }
}

  const showMessageInConsole = ():void => {
    
  
 

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
   

   

 
  function selectSearch(){

 
    if(textBoxDisabled){
   
      disableTextBox(false);
      disableComboBox(true);
    } else {
     
      disableTextBox(true);
      disableComboBox(false);
    
    };
  }
  function fillCategories(){

    CategoriasContextInSearch?.map(
      (element,value)=>{
        options.push({key:element.id!,text:element.strGlass!})
      }
    )
  }
   
   
    useEffect(() => {
      fillCategories()
      //TODO: No se debería llamar siempre a esta función. Solamente cuando se activa el sistmea de búsqueda (y además, cachearlo)
     
      
  
    });

     
    return(
    
                 <div className="wrapper">
                   <div className="one"> <Toggle  onClick={selectSearch}/></div>
                            
                                
                                    <div className="two">
                                    {
                                      <SearchBox 
                                      name="searchBox"
                                      className="searchBox"  
                                      styles={searchBoxStyles} 
                                      placeholder="Cheers!" 
                                      onChange={setTextContentInstate} 
                                      
                                      disabled={textBoxDisabled}
                                      />
                                    }
                                      </div>
                                      <div className="three">
                                      <Dropdown
                                    placeholder="Select a glass"
                                    options={options}
                                    styles={dropdownStyles}
                                    disabled={comboBoxDisabled}
                                      />
                                     
                                      </div>
                                      <div className="four">
                                      <div className="primaryButton">
                                        <PrimaryButton text="Search"   onClick={()=>update(textContent)}/>
                                        </div>

                                      </div>
                                      
                                 

                   </div>
                    
                       

                                
            
            
       
    );

}

 

export default Search;