import StatusBadge from "./StatusBadge";

interface Props {
  date: string;
  remark: string;
  amount: string;
  currency: string;
  type: "Credit" | "Debit";
}

export default function TransactionRow({
  date,
  remark,
  amount,
  currency,
  type,
}: Props) {
  const color = type === "Credit" ? "#087A2E" : "#D10000";
  return (
    <tr>
      <td className="w-[555px] border-t-[1.5px] border-t-[#49656E33] py-3">
        {date}
      </td>
      <td className="border-t-[1.5px] border-t-[#49656E33] py-3">{remark}</td>
      <td className="border-t-[1.5px] border-t-[#49656E33] py-3">{amount}</td>
      <td className="border-t-[1.5px] border-t-[#49656E33] py-3">{currency}</td>
      <td className="border-t-[1.5px] border-t-[#49656E33] py-3">
        <StatusBadge label={type} color={color} />
      </td>
    </tr>
  );
}
