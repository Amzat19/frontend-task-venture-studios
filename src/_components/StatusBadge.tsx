interface Props {
  label: string;
  color?: string;
}

export default function StatusBadge({ label, color = "#087A2E" }: Props) {
  return (
    <div className="bg-[#34616F17] rounded-2xl flex gap-2 items-center py-1 px-2">
      <span
        className="block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="font-psans font-medium text-[15px] block">{label}</span>
    </div>
  );
}
