import * as React from 'react';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { ITheme, mergeStyleSets, getTheme, getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
//import { createListItems, IExampleItem } from '@uifabric/example-data';
import { useConst } from '@uifabric/react-hooks';
import { ICategoriasContextInterface } from './Context/CategoriasContext';
import axios from 'axios';

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;
const classNames = mergeStyleSets({
  container: {
    overflow: 'auto',
    maxHeight: 500,
  },
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      minHeight: 54,
      padding: 1,
      boxSizing: 'border-box',
      borderBottom: `1px solid ${semanticColors.bodyDivider}`,
      display: 'flex',
      backgroundColor:palette.white,
      selectors: {
        '&:hover': { background: palette.neutralLight },
      },
    },
  ],
  itemImage: {
    flexShrink: 0,
  },
  itemContent: {
    marginLeft: 10,
    overflow: 'hidden',
    flexGrow: 1,
  },
  itemName: [
    fonts.xLarge,
    {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  ],
  itemIndex: {
    fontSize: fonts.small.fontSize,
    color: palette.neutralTertiary,
    marginBottom: 10,
  },
  chevron: {
    alignSelf: 'center',
    marginLeft: 10,
    color: palette.neutralTertiary,
    fontSize: fonts.large.fontSize,
    flexShrink: 0,
  },
});

const onRenderCell = (item: ICategoriasContextInterface | undefined, index?: number, isScrolling?: boolean): JSX.Element => {
  return (
    <div className={classNames.itemCell} data-is-focusable={true}>
      <Image
        className={classNames.itemImage}
        src={isScrolling ? undefined : item?.image}
        width={50}
        height={50}
        imageFit={ImageFit.cover}
      />
      <div className={classNames.itemContent}>
        <div className={classNames.itemName}>{item?.name}</div>
        <div className={classNames.itemIndex}>{`${item?.thumbnail}`}</div>
      </div>
    </div>
  );
};

interface IListGhosting{
  items:ICategoriasContextInterface[]
}


export class ListGhostingExample extends React.Component<{},IListGhosting> {
  //const items:ICategoriasContextInterface[] = null;
  constructor(props: {}) {
    super(props);

    this.state = {
      items: []
    };
    this.fillItemsDrinks();
  }
  
  
 
  
 fillItemsDrinks=()=>{
    console.log("fillItemsDrinks");
    this.state.items.push({name:'Fernet',image:'',thumbnail:'Cocktail Glass'})
    const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_Glass`;
    axios.get(url).then(
      (response)=>{
  
        let responseDataJson=response.data.drinks;
  
        for(let element in responseDataJson){
         this.state.items.push({name:responseDataJson[element].strDrink,image:responseDataJson[element].strDrinkThumb,thumbnail:'Cocktail Glass'})
         
        }
      }
      
      )
    
  }
  

  render(){
  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <div className={classNames.container} data-is-scrollable>
        <List items={this.state.items} onRenderCell={onRenderCell} />
      </div>
    </FocusZone>
  );
}};





