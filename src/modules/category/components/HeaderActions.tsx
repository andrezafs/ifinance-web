import { Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';

export function HeaderActions() {
  const { toggleModalCreateCategory } = useCategoriesActions();

  return (
    <Row
      style={{
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <ButtonAction
        icon={<PlusOutlined />}
        onClick={() => toggleModalCreateCategory()}
        size="large"
      />
    </Row>
  );
}
