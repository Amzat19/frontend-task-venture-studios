interface Props {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TabItem({ label, isActive = false, onClick }: Props) {
  return (
    <p
      onClick={onClick}
      className={`font-medium text-[15px] pb-2 font-psans cursor-pointer ${
        isActive
          ? "text-[#437D8E] border-b border-[#4B8B9F]"
          : "text-[#15272D9E]"
      }`}
    >
      {label}
    </p>
  );
}
