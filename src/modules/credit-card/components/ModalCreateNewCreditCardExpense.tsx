import { Button, Modal } from "antd";
import { useCreditCardActions } from "../contexts/CreditCardsActionsContext";

export function ModalCreateNewCreditCardExpense() {
  const {
    modalCreateNewCreditCardExpenseIsOpen,
    toggleModalCreateNewCreditCardExpense,
  } = useCreditCardActions();
  return (
    <Modal
      centered
      open={modalCreateNewCreditCardExpenseIsOpen}
      onOk={() => toggleModalCreateNewCreditCardExpense()}
      onCancel={() => toggleModalCreateNewCreditCardExpense()}
      width={450}
      footer={[
        <Button
          key="submit"
          onClick={() => toggleModalCreateNewCreditCardExpense()}
        >
          Salvar
        </Button>,
      ]}
    ></Modal>
  );
}
