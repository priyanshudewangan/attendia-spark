import React from "react";

type Student = {
  id: number;
  name: string;
  rollNo: string;
  className: string;
  attendance: string;
};

const sampleStudents: Student[] = [
  { id: 1, name: "Student 1", rollNo: "101", className: "10-A", attendance: "99%" },
  { id: 2, name: "Student 2", rollNo: "102", className: "10-B", attendance: "95%" },
  { id: 3, name: "Student 3", rollNo: "103", className: "10-A", attendance: "97%" },
  { id: 4, name: "Student 4", rollNo: "104", className: "10-B", attendance: "91%" },
  { id: 5, name: "Student 5", rollNo: "105", className: "10-A", attendance: "93%" },
  { id: 6, name: "Student 6", rollNo: "106", className: "10-B", attendance: "88%" },
  { id: 7, name: "Student 7", rollNo: "107", className: "10-A", attendance: "90%" },
  { id: 8, name: "Student 8", rollNo: "108", className: "10-B", attendance: "85%" },
  { id: 9, name: "Student 9", rollNo: "109", className: "10-A", attendance: "92%" },
  { id: 10, name: "Student 10", rollNo: "110", className: "10-B", attendance: "86%" },
  { id: 11, name: "Student 11", rollNo: "111", className: "10-A", attendance: "94%" },
  { id: 12, name: "Student 12", rollNo: "112", className: "10-B", attendance: "89%" },
  { id: 13, name: "Student 13", rollNo: "113", className: "10-A", attendance: "91%" },
  { id: 14, name: "Student 14", rollNo: "114", className: "10-B", attendance: "87%" },
  { id: 15, name: "Student 15", rollNo: "115", className: "10-A", attendance: "93%" },
  { id: 16, name: "Student 16", rollNo: "116", className: "10-B", attendance: "84%" },
  { id: 17, name: "Student 17", rollNo: "117", className: "10-A", attendance: "90%" },
  { id: 18, name: "Student 18", rollNo: "118", className: "10-B", attendance: "92%" },
  { id: 19, name: "Student 19", rollNo: "119", className: "10-A", attendance: "88%" },
  { id: 20, name: "Student 20", rollNo: "120", className: "10-B", attendance: "96%" },
  { id: 21, name: "Student 21", rollNo: "121", className: "10-A", attendance: "97%" },
  { id: 22, name: "Student 22", rollNo: "122", className: "10-B", attendance: "85%" },
  { id: 23, name: "Student 23", rollNo: "123", className: "10-A", attendance: "89%" },
  { id: 24, name: "Student 24", rollNo: "124", className: "10-B", attendance: "92%" },
  { id: 25, name: "Student 25", rollNo: "125", className: "10-A", attendance: "95%" },
  { id: 26, name: "Student 26", rollNo: "126", className: "10-B", attendance: "87%" },
  { id: 27, name: "Student 27", rollNo: "127", className: "10-A", attendance: "93%" },
  { id: 28, name: "Student 28", rollNo: "128", className: "10-B", attendance: "84%" },
  { id: 29, name: "Student 29", rollNo: "129", className: "10-A", attendance: "91%" },
  { id: 30, name: "Student 30", rollNo: "130", className: "10-B", attendance: "86%" },
  { id: 31, name: "Student 31", rollNo: "131", className: "10-A", attendance: "90%" },
  { id: 32, name: "Student 32", rollNo: "132", className: "10-B", attendance: "88%" },
  { id: 33, name: "Student 33", rollNo: "133", className: "10-A", attendance: "94%" },
  { id: 34, name: "Student 34", rollNo: "134", className: "10-B", attendance: "89%" },
  { id: 35, name: "Student 35", rollNo: "135", className: "10-A", attendance: "52%" },
  { id: 36, name: "Student 36", rollNo: "136", className: "10-B", attendance: "87%" },
  { id: 37, name: "Student 37", rollNo: "137", className: "10-A", attendance: "96%" },
  { id: 38, name: "Student 38", rollNo: "138", className: "10-B", attendance: "85%" },
  { id: 39, name: "Student 39", rollNo: "139", className: "10-A", attendance: "93%" },
  { id: 40, name: "Student 40", rollNo: "140", className: "10-B", attendance: "84%" },
  { id: 41, name: "Student 41", rollNo: "141", className: "10-A", attendance: "91%" },
  { id: 42, name: "Student 42", rollNo: "142", className: "10-B", attendance: "88%" },
  { id: 43, name: "Student 43", rollNo: "143", className: "10-A", attendance: "95%" },
  { id: 44, name: "Student 44", rollNo: "144", className: "10-B", attendance: "86%" },
  { id: 45, name: "Student 45", rollNo: "145", className: "10-A", attendance: "90%" },
  { id: 46, name: "Student 46", rollNo: "146", className: "10-B", attendance: "89%" },
  { id: 47, name: "Student 47", rollNo: "147", className: "10-A", attendance: "93%" },
  { id: 48, name: "Student 48", rollNo: "148", className: "10-B", attendance: "87%" },
  { id: 49, name: "Student 49", rollNo: "149", className: "10-A", attendance: "92%" },
  { id: 50, name: "Student 50", rollNo: "150", className: "10-B", attendance: "25%" },
  { id: 51, name: "Student 51", rollNo: "151", className: "10-A", attendance: "97%" },
  { id: 52, name: "Student 52", rollNo: "152", className: "10-B", attendance: "91%" },
  { id: 53, name: "Student 53", rollNo: "153", className: "10-A", attendance: "94%" },
  { id: 54, name: "Student 54", rollNo: "154", className: "10-B", attendance: "56%" },
  { id: 55, name: "Student 55", rollNo: "155", className: "10-A", attendance: "89%" },
  { id: 56, name: "Student 56", rollNo: "156", className: "10-B", attendance: "92%" },
  { id: 57, name: "Student 57", rollNo: "157", className: "10-A", attendance: "88%" },
  { id: 58, name: "Student 58", rollNo: "158", className: "10-B", attendance: "95%" },
  { id: 59, name: "Student 59", rollNo: "159", className: "10-A", attendance: "90%" },
  { id: 60, name: "Student 60", rollNo: "160", className: "10-B", attendance: "84%" },
  { id: 61, name: "Student 61", rollNo: "161", className: "10-A", attendance: "93%" },
  { id: 62, name: "Student 62", rollNo: "162", className: "10-B", attendance: "91%" },
  { id: 63, name: "Student 63", rollNo: "163", className: "10-A", attendance: "96%" },
  { id: 64, name: "Student 64", rollNo: "164", className: "10-B", attendance: "87%" },
  { id: 65, name: "Student 65", rollNo: "165", className: "10-A", attendance: "92%" },
  { id: 66, name: "Student 66", rollNo: "166", className: "10-B", attendance: "85%" },
  { id: 67, name: "Student 67", rollNo: "167", className: "10-A", attendance: "94%" },
  { id: 68, name: "Student 68", rollNo: "168", className: "10-B", attendance: "89%" },
  { id: 69, name: "Student 69", rollNo: "169", className: "10-A", attendance: "91%" },
  { id: 70, name: "Student 70", rollNo: "170", className: "10-B", attendance: "88%" },
  { id: 71, name: "Student 71", rollNo: "171", className: "10-A", attendance: "93%" },
  { id: 72, name: "Student 72", rollNo: "172", className: "10-B", attendance: "86%" },
  { id: 73, name: "Student 73", rollNo: "173", className: "10-A", attendance: "90%" },
  { id: 74, name: "Student 74", rollNo: "174", className: "10-B", attendance: "84%" },
  { id: 75, name: "Student 75", rollNo: "175", className: "10-A", attendance: "95%" },
  { id: 76, name: "Student 76", rollNo: "176", className: "10-B", attendance: "89%" },
  { id: 77, name: "Student 77", rollNo: "177", className: "10-A", attendance: "92%" },
  { id: 78, name: "Student 78", rollNo: "178", className: "10-B", attendance: "87%" },
  { id: 79, name: "Student 79", rollNo: "179", className: "10-A", attendance: "91%" },
  { id: 80, name: "Student 80", rollNo: "180", className: "10-B", attendance: "85%" },
];

export default function Students() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Roll No</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {sampleStudents.map((student) => (
              <tr
                key={student.id}
                className={`hover:bg-gray-50 ${
                  parseInt(student.attendance) < 75 ? "bg-yellow-100" 
                  : parseInt(student.attendance) > 95 ? "bg-green-200"
                  : ""
                }`}
              >
                <td className="px-4 py-2 border">{student.id}</td>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">{student.rollNo}</td>
                <td className="px-4 py-2 border">{student.className}</td>
                <td className="px-4 py-2 border">
                  {student.attendance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}