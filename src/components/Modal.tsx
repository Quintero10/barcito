import * as React from 'react';
import { useId, useBoolean } from '@uifabric/react-hooks';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  DefaultButton,
  Modal,
  IDragOptions,
  IconButton,
  IIconProps,
} from 'office-ui-fabric-react';
import { ModalContext } from './Context/ModalContext';
import { ImageFit } from '@fluentui/react';

const dragOptions: IDragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

export const ModalBasicExample: React.FunctionComponent = () => {
  
  const {elementosModal,setOpenModal,ModalIsOpen}=React.useContext(ModalContext);
  
  
 

  // Use useId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings and manually ensure uniqueness.)
  const titleId = useId('title');
  console.log("Modal");
  console.log(elementosModal)
  return (
    <div>
     
 
    
      <Modal
        titleAriaId={titleId}
        isOpen={elementosModal!=undefined && ModalIsOpen}
        
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <span  id={titleId} >{elementosModal?.title}</span>
          
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={()=>setOpenModal(false)}
          />
        </div>
       
        <div className={contentStyles.body}>
          <p>
            {elementosModal?.strGlass}
          </p>
        <p>
            {elementosModal?.strInstructions}
          </p>
          <p>
            <div>
            <img src={elementosModal?.strDrinkThumb} alt="Image of beverage" width="50" height="60">
            </img>
            </div>
            
          </p>
         
        </div>
      </Modal>
 
    </div>
  );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
   
    theme.fonts.xLargePlus,
    {
      
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      
      textAlign:'center',
      
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  icon:{
    alignItems:'right',
    display:'flex',
    
    
  },
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const toggleStyles = { root: { marginBottom: '20px' } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
