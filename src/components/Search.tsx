import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens, StackItem, initializeIcons } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import {  getGlassesOriginal } from './Utils/Utils';
import axios from 'axios';
import '../Search.css';
import { AppCtx} from './Context/CategoriasContext';

import { ListaContext } from './Context/ListaContext';
import { useRef } from 'react';


initializeIcons();


const Search = () => {
  const {setParametroBusqueda } = React.useContext(ListaContext);
  //State
  const[comboTextContent,setComboTextContent]=useState('');
   const[textContent,setTextContent]=useState('');
  const [textBoxDisabled,disableTextBox]=useState(false);
  const [comboBoxDisabled,disableComboBox]=useState(true);
  const CategoriasContextInSearch=React.useContext(AppCtx)
  
  const setTextContentInstate = (e: any) =>{  
    
      if( e != undefined ){
      e.preventDefault();
      setTextContent(e.target.value);
     
    }
   
  
}

const setComboTextContentInstate= (option:string) =>{
 
  setComboTextContent(option);
  
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
        options.push({key:element.id!,text:element.strGlass!,id:element.id!})
      }
    )
  }
   
  const mounted = useRef();
    useEffect(() => {
      if (!mounted.current) {
        // do componentDidMount logic
        console.log("Search mounted")
       
      } else {
        // do componentDidUpdate logic
        console.log("Search componentdidupdate");
        
      }
      
      //TODO: No se debería llamar siempre a esta función. Solamente cuando se activa el sistmea de búsqueda (y además, cachearlo)
      fillCategories()
      
  
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
                                    onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number)=>{setComboTextContentInstate(option?.text!)
                                    }}
                                    />
                                      
                                     
                                      </div>
                                      <div className="four">
                                      <div className="primaryButton">
                                        <PrimaryButton text="Search"   onClick={()=>textContent?setParametroBusqueda(textContent):setParametroBusqueda(comboTextContent)}/>
                                        </div>

                                      </div>
                                      
                                 

                   </div>
                    
                       

                                
            
            
       
    );

}

 

export default Search;

/*(event: React.FormEvent<HTMLDivElement>,option?: IDropdownOption, index?: number)=>{setComboTextContent(option?.text!)
                                    console.log(comboTextContent)} */