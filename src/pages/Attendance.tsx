import React from "react";

type AttendanceRecord = {
  id: number;
  name: string;
  rollNo: string;
  date: string;
  status: "Present" | "Absent";
};

const sampleAttendance: AttendanceRecord[] = [
  { id: 1, name: "Kinjal", rollNo: "101", date: "2025-09-05", status: "Present" },
  { id: 2, name: "Priyanshu", rollNo: "102", date: "2025-09-05", status: "Absent" },
  { id: 3, name: "Anuska", rollNo: "103", date: "2025-09-05", status: "Present" },
  { id: 4, name: "Piyush", rollNo: "104", date: "2025-09-05", status: "Absent" },
  { id: 5, name: "Krishna", rollNo: "105", date: "2025-09-05", status: "Present" },
  { id: 6, name: "Aditya", rollNo: "106", date: "2025-09-05", status: "Absent" },
];

export default function Attendance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Roll No</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleAttendance.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{record.rollNo}</td>
                <td className="px-4 py-2 border">{record.name}</td>
                <td className="px-4 py-2 border">{record.date}</td>
                <td
                  className={`px-4 py-2 border font-semibold ${
                    record.status === "Present" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}