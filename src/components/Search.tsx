import React, { useEffect, useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens, StackItem, initializeIcons } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, Dropdown, DropdownMenuItemType, IComboBoxOption, IDropdownOption, IDropdownStyles, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';
import axios from 'axios';
import '../Search.css';
import { AppCtx} from './Context/CategoriasContext';
import { ListaContext } from './Context/ListaContext';
import { useRef } from 'react';
import { ErrorContext } from './Context/ErrorContext';


initializeIcons();

//Component
const Search = () => {
  //Context
  const {setParametroBusqueda,setParametroBusquedaVaso } = React.useContext(ListaContext);
  const {setError}=React.useContext(ErrorContext);

  //State
  const[comboTextContent,setComboTextContent]=useState('');
  const[textContent,setTextContent]=useState('');
  const [textBoxDisabled,disableTextBox]=useState(false);
  const [comboBoxDisabled,disableComboBox]=useState(true);
  const CategoriasContextInSearch=React.useContext(AppCtx)
  let comboTextContentB='';
  
  //Styles
  const stackTokens: IStackTokens = { childrenGap: 20 };
  const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
  };
  const options: IDropdownOption[] = [
    { key: 'glasses', text: 'Glasses', itemType: DropdownMenuItemType.Header },
        
  ];
   
  //functions
  const setTextContentInstate = (e: any) =>{  
    if( e != undefined ){
    e.preventDefault();
    setTextContent(e.target.value);
  }
}
  function selectSearch(){

    if(textBoxDisabled){   
      disableTextBox(false);
      disableComboBox(true);
    } else {
      setTextContent('');
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
    //Hooks
    useEffect(() => {
 
      fillCategories()
  
    });

    //Return 
    return(
    
          <div className="wrapper">

            <div className="one"> 
              <Toggle  onClick={selectSearch}/>
            </div>

            <div className="two">
                <SearchBox 
                name="searchBox"
                className="searchBox"  
                styles={searchBoxStyles} 
                placeholder="Cheers!" 
                onChange={setTextContentInstate} 
                
                disabled={textBoxDisabled}
                />
            </div>                    
                           
            <div className="three">
                <Dropdown
                  placeholder="Select a glass"
                  options={options}
                  styles={dropdownStyles}
                  disabled={comboBoxDisabled}
                  onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number)=>{comboTextContentB=option?.text!
                    
                }}
                />
            </div>

            <div className="four">
              <div className="primaryButton">
                <PrimaryButton text="Search"   onClick={()=>textContent?setParametroBusqueda(textContent):comboTextContentB?setParametroBusquedaVaso(comboTextContentB):setError(true)}/>
              </div>
            </div>      

          </div> 
       
    );

}

 

export default Search;
