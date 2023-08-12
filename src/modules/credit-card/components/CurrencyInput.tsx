import React from 'react';
import { InputNumber } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

const MAX_LIMIT = 1000000; // Valor máximo do limite

interface CurrencyInputProps {
  value: number | null; // Accept number or null for 'value' prop
  onChange: (value: number | null) => void; // Accept number or null for 'onChange' prop
}

const formatCurrency = (value = 0) => {
  // Remove todos os caracteres que não são números (exceto o ponto decimal e a vírgula)
  const numericValue = value.toString().replace(/[^0-9.,]/g, '');
  const parts = numericValue.split(',');

  if (parts.length > 1) {
    // Se houver mais de uma vírgula, mantenha apenas a primeira e remova o restante
    parts[1] = parts[1].replace(',', '');
  }

  // Reunir novamente os componentes numéricos
  const formattedValue = parts.join(',');
  return `${formattedValue}`;
};

export function CurrencyInput({ value, onChange }: CurrencyInputProps) {
  const handleChange = (value: number | null) => {
    // Verificar se o valor está dentro do limite máximo
    if (value !== null && value <= MAX_LIMIT) {
      onChange(value);
    }
  };

  return (
    <InputNumber
      value={value}
      formatter={formatCurrency}
      style={{ width: '100%' }}
      placeholder="Limite do cartão"
      precision={2}
      prefix="R$"
      addonAfter={<WalletOutlined />}
      onChange={handleChange}
    />
  );
}
