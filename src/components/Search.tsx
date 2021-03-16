import React, { useState } from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, IComboBoxOption, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';

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

      const fontMapping: { [fontName: string]: string } = {
        ['Arial Black']: '"Arial Black", "Arial Black_MSFontService", sans-serif',
        ['Times New Roman']: '"Times New Roman", "Times New Roman_MSFontService", serif',
        ['Comic Sans MS']: '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
        ['Calibri']: 'Calibri, Calibri_MSFontService, sans-serif',
      };

      const glassMapping : {[glassName:string]: string} = {

        
      }
 
      const fonts = Object.keys(fontMapping);

      const optionsWithCustomStyling: IComboBoxOption[] = fonts.map((fontName: string) => ({
        key: fontName,
        text: fontName,
        styles: {
          optionText: {
            fontFamily: fontMapping[fontName],
          },
        },
      }));

      const ComboBoxCustomStyledExampleStyles = {
        container: {
          maxWidth: '300px',
        },
        root: {
          backgroundColor: '#b4a0ff',
        },
        input: {
          backgroundColor: '#b4a0ff',
        },
      };

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

                <ComboBox
                    defaultSelectedKey="Calibri"
                    label="Custom styled ComboBox"
                    options={optionsWithCustomStyling}
                    styles={ComboBoxCustomStyledExampleStyles}
                />
             
                </Stack.Item>

                                
                </Stack>
            
        </div>
    );

}

 

export default Search;