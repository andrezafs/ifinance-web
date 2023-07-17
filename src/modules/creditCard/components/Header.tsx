import { PlusOutlined } from "@ant-design/icons";
import { Row } from "antd";

import { ButtonAction } from "../../shared/components/ButtonAction";
import { useCreditCardActions } from "../contexts/CreditCardsActionsContext";

export function HeaderActions() {
  const { toggleModalCreateCreditCard } = useCreditCardActions();

  return (
    <Row
      justify={"end"}
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      <ButtonAction
        icon={<PlusOutlined />}
        size="large"
        onClick={() => {
          toggleModalCreateCreditCard();
        }}
      />
    </Row>
  );
}
