import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Filter } from "lucide-react";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  attendancePercentage: number;
  status: "present" | "absent" | "late";
  lastSeen: string;
}

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Kinjal Agarwal",
    rollNumber: "CS001",
    class: "AIML section C",
    attendancePercentage: 95,
    status: "present",
    lastSeen: "Today, 9:00 AM",
  },
  {
    id: "2",
    name: "Priyanshu Dewangan",
    rollNumber: "CS002",
    class: "AIML section C",
    attendancePercentage: 87,
    status: "absent",
    lastSeen: "Yesterday, 2:30 PM",
  },
  {
    id: "3",
    name: "Anuska IDK",
    rollNumber: "CS003",
    class: "AIML section C",
    attendancePercentage: 92,
    status: "present",
    lastSeen: "Today, 8:45 AM",
  },
  {
    id: "4",
    name: "Krishna Mehta",
    rollNumber: "CS004",
    class: "AIML section C",
    attendancePercentage: 98,
    status: "present",
    lastSeen: "Today, 9:15 AM",
  },
  {
    id: "5",
    name: "Aditya Agarwal",
    rollNumber: "CS006",
    class: "AIML section C",
    attendancePercentage: 89,
    status: "late",
    lastSeen: "Today, 9:30 AM",
  },
  {
    id: "6",
    name: "Piyush Jangid",
    rollNumber: "CS005",
    class: "AIML section C",
    attendancePercentage: 83,
    status: "late",
    lastSeen: "Today, 9:30 AM",
  },
];

export function StudentTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students] = useState<Student[]>(mockStudents);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: Student["status"]) => {
    switch (status) {
      case "present":
        return <Badge className="bg-success text-success-foreground">Present</Badge>;
      case "absent":
        return <Badge variant="destructive">Absent</Badge>;
      case "late":
        return <Badge className="bg-warning text-warning-foreground">Late</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return "text-success";
    if (percentage >= 85) return "text-warning";
    return "text-destructive";
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              Student Attendance
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Track and manage student attendance records
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search students by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-foreground">Student</th>
                  <th className="text-left p-4 font-medium text-foreground">Roll Number</th>
                  <th className="text-left p-4 font-medium text-foreground">Class</th>
                  <th className="text-left p-4 font-medium text-foreground">Attendance</th>
                  <th className="text-left p-4 font-medium text-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-foreground">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`border-t hover:bg-muted/30 transition-colors ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/10"
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground">{student.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{student.rollNumber}</td>
                    <td className="p-4 text-muted-foreground">{student.class}</td>
                    <td className="p-4">
                      <span className={`font-medium ${getAttendanceColor(student.attendancePercentage)}`}>
                        {student.attendancePercentage}%
                      </span>
                    </td>
                    <td className="p-4">{getStatusBadge(student.status)}</td>
                    <td className="p-4 text-muted-foreground">{student.lastSeen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No students found matching your search.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}