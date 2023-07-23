import { Button, Modal } from 'antd';

import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';
import { FormCreateCardCredit } from './FormCreateCardCredit';

export function ModalCreateCreditCard() {
  const { modalCreateCreditCardIsOpen, toggleModalCreateCreditCard } =
    useCreditCardActions();

  return (
    <Modal
      centered
      open={modalCreateCreditCardIsOpen}
      onOk={() => toggleModalCreateCreditCard()}
      onCancel={() => toggleModalCreateCreditCard()}
      width={450}
      footer={[
        <Button key="submit" onClick={() => toggleModalCreateCreditCard()}>
          Salvar
        </Button>,
      ]}
    >
      <FormCreateCardCredit />
    </Modal>
  );
}
