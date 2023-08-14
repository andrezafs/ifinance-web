import { MenuProps, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { CreditCard } from '@/graphql';

import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';

type Props = {
  items: MenuProps['items'];
};

export function useDropdownActions(creditCard: CreditCard) {
  const { toggleModalDeleteCreditCard, handleSetCreditCard } =
    useCreditCardActions();
  const menuProps: Props = {
    items: [
      {
        label: 'Editar',
        key: '1',
        onClick: () => message.info('Ação 2'),
        icon: <EditOutlined />,
      },
      {
        label: 'Deletar',
        key: '2',
        onClick: () => {
          toggleModalDeleteCreditCard();
          handleSetCreditCard(creditCard);
        },
        icon: <DeleteOutlined />,
        danger: true,
      },
    ],
  };

  return {
    menuProps,
  };
}
