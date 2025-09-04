import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, TrendingUp } from "lucide-react";

interface AttendanceStats {
  totalStudents: number;
  presentStudents: number;
  absentStudents: number;
  attendancePercentage: number;
}

interface AttendanceSummaryCardsProps {
  stats: AttendanceStats;
}

export function AttendanceSummaryCards({ stats }: AttendanceSummaryCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="shadow-card hover:shadow-hover transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Students
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {stats.totalStudents}
          </div>
          <p className="text-xs text-muted-foreground">
            Enrolled students
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-hover transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Present Today
          </CardTitle>
          <UserCheck className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">
            {stats.presentStudents}
          </div>
          <p className="text-xs text-muted-foreground">
            Students present
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-hover transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Absent Today
          </CardTitle>
          <UserX className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">
            {stats.absentStudents}
          </div>
          <p className="text-xs text-muted-foreground">
            Students absent
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-hover transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Attendance Rate
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {stats.attendancePercentage}%
          </div>
          <p className="text-xs text-muted-foreground">
            Overall attendance
          </p>
        </CardContent>
      </Card>
    </div>
  );
}