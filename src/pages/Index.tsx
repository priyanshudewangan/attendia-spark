import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AttendanceSummaryCards } from "@/components/AttendanceSummaryCards";
import { AttendanceChart } from "@/components/AttendanceChart";
import { StudentTable } from "@/components/StudentTable";

const mockAttendanceStats = {
  totalStudents: 125,
  presentStudents: 118,
  absentStudents: 7,
  attendancePercentage: 94,
};

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-card flex items-center px-6 shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back! Here's your attendance overview.</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Summary Cards */}
            <AttendanceSummaryCards stats={mockAttendanceStats} />

            {/* Chart Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              <AttendanceChart />
              
              {/* Quick Actions */}
              <div className="grid gap-4">
                <div className="bg-gradient-primary rounded-lg p-6 text-white shadow-card">
                  <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Manage attendance and student records efficiently
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left">
                      <div className="text-sm font-medium">Mark Attendance</div>
                      <div className="text-xs text-white/70">Bulk attendance marking</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left">
                      <div className="text-sm font-medium">Generate Report</div>
                      <div className="text-xs text-white/70">Export attendance data</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left">
                      <div className="text-sm font-medium">QR Attendance</div>
                      <div className="text-xs text-white/70">Enable QR code scanning</div>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left">
                      <div className="text-sm font-medium">Student Records</div>
                      <div className="text-xs text-white/70">View all students</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Table */}
            <StudentTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;