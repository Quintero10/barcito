import * as React from 'react';
import { useId, useBoolean } from '@uifabric/react-hooks';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  Modal,
  IDragOptions,
  IIconProps,
  Stack,
  IStackProps,
  ProgressIndicator,
} from '@fluentui/react';
import { DefaultButton, IconButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { ModalContext } from './Context/ModalContext';

export const ModalProgressIndicator: React.FunctionComponent = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
  const {elementosModal,setOpenModal,ModalIsOpen,loading}=React.useContext(ModalContext);
  
  const dragOptions = React.useMemo(
    (): IDragOptions => ({
      moveMenuItemText: 'Move',
      closeMenuItemText: 'Close',
      menu: ContextualMenu,
      keepInBounds,
    }),
    [keepInBounds],
  );

  const titleId = useId('title');

  return (
    <div>     
      <Modal
        titleAriaId={titleId}
        isOpen={loading}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={contentStyles.container}
        dragOptions={isDraggable ? dragOptions : undefined}
      >
      
        <div className={contentStyles.body}>
         <ProgressIndicator theme={theme} label="Loading your beverage!" description="Alcohol is the cause and solution" />
        </div>
      </Modal>
    </div>
  );
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width:'70%'
  },
  header: [

    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    marginTop:'50px',
    padding: '0 24px 24px 24px',
    fontWeight:FontWeights.bold,
    alignItems:'center',
    selectors: {
      p: { margin: '0px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const stackProps: Partial<IStackProps> = {
  horizontal: true,
  tokens: { childrenGap: 40 },
  styles: { root: { marginBottom: 20 } },
};
const iconButtonStyles: Partial<IButtonStyles> = {
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
