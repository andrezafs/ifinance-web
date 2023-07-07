import {
  CalendarOutlined,
  CarryOutOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Form,
  Input,
  InputNumber,
  Select,
  Statistic,
  Typography,
} from "antd";
import { StatisticCards } from "../../Dashboard/StatisticCards";

const { Option } = Select;

const optionsBanks = [
  { value: "nubank", label: "Nubank" },
  { value: "itau", label: "Itaú" },
  { value: "bradesco", label: "Bradesco" },
  { value: "santander", label: "Santander" },
  { value: "inter", label: "Inter" },
  { value: "next", label: "Next" },
  { value: "original", label: "Original" },
  { value: "neon", label: "Neon" },
  { value: "sicoob", label: "Sicoob" },
  { value: "banco-do-brasil", label: "Banco do Brasil" },
  { value: "caixa", label: "Caixa" },
];

// TODO: add form validation
// TODO: add input inserir limite do cartão (limite total)
export function FormCreateCardCredit() {
  const onChange = (value: number | string) => {
    console.log("changed", value);
  };
  return (
    <Form>
      <Form.Item>
        <Typography.Title level={5}>Dados do cartão</Typography.Title>

        <Form.Item name="Limite" label="Insira o limite ">
          <InputNumber
            min={1}
            max={100000}
            formatter={(value) =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Input
          addonAfter={<CreditCardOutlined />}
          placeholder="Nome do cartão"
          width={"100%"}
        />
      </Form.Item>

      <Form.Item>
        <Select placeholder="Selecione o seu Banco">
          {optionsBanks.map((bank) => (
            <Option value={bank.value}>
              <Avatar
                src="/nubank.png"
                style={{
                  marginRight: 10,
                }}
              />
              {bank.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: 16,
          }}
        >
          <InputNumber
            min={1}
            max={31}
            placeholder="Dia do Fechamento"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <InputNumber
            min={1}
            max={31}
            // addonAfter={<CarryOutOutlined />}
            placeholder="Dia do Pagamento"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      </Form.Item>
      {/* <Form.Item>
        <InputNumber
          min={1}
          max={31}
          addonAfter={<CarryOutOutlined />}
          placeholder="Dia do Pagamento"
        />
      </Form.Item> */}
      <Form.Item>
        <Input placeholder="Limite total" />
      </Form.Item>
    </Form>
  );
}
