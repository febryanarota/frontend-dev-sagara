import DashboardCard from "@/components/cards/dashboard-card";
import BarChartComponent from "@/components/charts/bar-chart";
import { cards } from "@/lib/dataType";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

export default function Page() {
  const dummy: cards[] = [
    {
      title: "Total Students",
      total: 513,
      percentage: 8.5,
      desc: "Up from yesteday",
      isIncreasing: true,
      icon: "icons/icon-1.svg",
    },
    {
      title: "Total Certified Students",
      total: 489,
      percentage: 7.9,
      desc: "Up since last week",
      isIncreasing: true,
      icon: "/icons/icon-2.svg",
    },
    {
      title: "Average Certification Score",
      total: 84.62,
      percentage: 3.2,
      desc: "Down since last week",
      isIncreasing: false,
      icon: "/icons/icon-3.svg",
    },
  ];

  return (
    <div className="page-container">
      <div className="flex flex-row justify-between  text-sm text-slate-accent font-medium">
        <div className="component-container w-fit shadow-custom flex flex-row items-center gap-2">
          <CiCalendar className="w-[20px] h-[20px]" />
          Dec 29, 2023 - Jan 4, 2024
        </div>

        <div className="component-container w-fit shadow-custom flex flex-row items-center gap-2">
          Daily <FaChevronDown />
        </div>
      </div>

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {dummy.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            total={item.total}
            percentage={item.percentage}
            desc={item.desc}
            isIncreasing={item.isIncreasing}
            icon={item.icon}
          />
        ))}
      </div>
      
      <BarChartComponent/>

      
    </div>
  );
}
