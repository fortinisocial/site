import * as Dialog from '@radix-ui/react-dialog';
import styles from './styles.module.scss';

export const Modal = ({ children, ...rest }) => {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>Newsletter</Dialog.Title>
          {children}
          {/* <Dialog.Close /> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
