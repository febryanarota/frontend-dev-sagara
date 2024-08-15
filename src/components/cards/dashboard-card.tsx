import Image from "next/image";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";

export default function DashboardCard({
  title,
  total,
  percentage,
  desc,
  isIncreasing,
  icon,
}: {
  title: string;
  total: number;
  percentage: number;
  desc: string;
  isIncreasing: boolean;
  icon: string;
}) {
  return (
    <div className="bg-white-base flex flex-row p-5 shadow-custom rounded-md justify-between items-start">
      <div className="flex flex-col gap-5 text-gray-accent-2">
        <p className=" opacity-[70%] font-bold">{title}</p>
        <p className=" font-bold text-2xl">{total}</p>
        <div className="flex flex-row gap-3 items-center font-medium">
          {isIncreasing ? (
            <TfiStatsUp className="text-green-accent" />
          ) : (
            <TfiStatsDown className="text-red-accent" />
          )}
          <p className="text-gray-accent">
            <span className={`${isIncreasing ? "text-green-accent" : "text-red-accent"} pr-2`} >{percentage}</span>
            {desc}
          </p>
        </div>
      </div>
      <Image src={icon} alt={title} width={40} height={40} />
    </div>
  );
}
