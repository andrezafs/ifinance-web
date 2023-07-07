import { CreditCads } from "./CreditCads";
import { CreditCardsActionsContextProvider } from "./contexts/CreditCardsActionsContext";

function CreditCardsPage() {
  return (
    <CreditCardsActionsContextProvider>
      <CreditCads />
    </CreditCardsActionsContextProvider>
  );
}

export default CreditCardsPage;
