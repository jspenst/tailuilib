import DashboarddSidebar from "@/components/DasboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function dashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="relative text-[#555555]">
            <DashboardNavbar />
            <DashboarddSidebar />
            <div className="fixed flex top-[100px] left-0 lg:left-[300px] h-[calc(100vh-100px)] w-screen lg:w-[calc(100vw-300px)] overflow-scroll z-0">
                {children}
            </div>
        </div>
    )
}