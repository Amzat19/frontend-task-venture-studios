import Ellipses from "@/_icons/ellipses";

interface Props {
  title: string;
  value: string;
  change: string;
  bgColor?: string;
}

export default function SummaryCard({
  title,
  value,
  change,
  bgColor = "#34616F17",
}: Props) {
  return (
    <article
      className={`w-[223px] rounded-[20px] p-6`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-center pb-3">
        <p className="font-bold text-[17px] font-psans text-[#1B2528]">
          {title}
        </p>
        <Ellipses />
      </div>
      <p className="text-[#1B2528] font-bold text-[34px] font-psans pb-1">
        {value}
      </p>
      <p className="font-medium text-[13px] text-[#3E7383]">{change}</p>
    </article>
  );
}
