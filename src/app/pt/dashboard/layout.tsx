import DashboardLeftbar from "@/components/DashboardLeftBar";
import DashboardTopbar from "@/components/DashboardTopbar";

export default function DashboardLayout() {
  return (
    <div className="bg-[#ededed] w-full h-screen relative">
      <DashboardTopbar />
      <DashboardLeftbar />
    </div>
  );
}
