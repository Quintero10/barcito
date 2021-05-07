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
  ProgressIndicator,
} from 'office-ui-fabric-react';
import { ModalContext } from './Context/ModalContext';
import { ImageFit } from '@fluentui/react';
import { ModalProgressIndicator } from './ModalProgressIndicator';
import '../modalstyles.css'

const dragOptions: IDragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

export const ModalBasicExample: React.FunctionComponent = () => {
  
  const {elementosModal,setOpenModal,ModalIsOpen,loading}=React.useContext(ModalContext);
  
  const titleId = useId('title');
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
          
            <p className="modalstyle">Serve in:</p><p>{elementosModal?.strGlass}</p>

            <p className="modalstyle">Ingredients:</p>
            {elementosModal?.strIngredient.map((ingredient)=>{
              if(ingredient != null){
                return <p>{ingredient}</p>
              }
            })}         
        
            <p className="modalstyle">Instructions:</p><p>{elementosModal?.strInstructions}</p>
        
          <p>
            <div>
            <img src={elementosModal?.strDrinkThumb} alt="Image of beverage" width="150" height="160">
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
      display:'flex',
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
      p: { margin: '4px 0' },
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
