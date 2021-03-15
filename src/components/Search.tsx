import React from 'react';
import { SearchBox,ISearchBoxStyles  } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ComboBox, DefaultPalette, IComboBoxOption, IStackItemStyles, SelectableOptionMenuItemType, Toggle } from '@fluentui/react';

const Search = () => {

    // Example formatting
    const stackTokens: IStackTokens = { childrenGap: 20 };

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

      const fontMapping: { [fontName: string]: string } = {
        ['Arial Black']: '"Arial Black", "Arial Black_MSFontService", sans-serif',
        ['Times New Roman']: '"Times New Roman", "Times New Roman_MSFontService", serif',
        ['Comic Sans MS']: '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
        ['Calibri']: 'Calibri, Calibri_MSFontService, sans-serif',
      };
 
      const fonts = Object.keys(fontMapping);

      const optionsForCustomRender: IComboBoxOption[] = [
        { key: 'header1', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header },
        ...fonts.map((fontName: string) => ({ key: fontName, text: fontName })),
        { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
        { key: 'header2', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
      ];

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
                    
                    <SearchBox name="searchBox" className="searchBox"  styles={searchBoxStyles} placeholder="Cheers!" onSearch={newValue => console.log('value is ' + newValue)} />

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

 function showMessageInConsole():void {
    var SearchBoxElement = document.querySelector("searchBox");
     console.log(SearchBoxElement);

}

export default Search;