import Chart from "@/components/Chart"
import DashboardCard from "@/components/DashboardCard"
import Rightbar from "@/components/Rightbar"
import Transactions from "@/components/Transactions"

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[3fr_1fr] p-5">
      <div className="space-y-5">
        <div className="flex gap-5">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <DashboardCard key={index} />
            ))}
        </div>

        <Transactions />
        <Chart />
      </div>
      <div className="pl-5">
        <Rightbar />
      </div>
    </div>
  )
}
