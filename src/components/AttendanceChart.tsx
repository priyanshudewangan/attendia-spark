import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { date: "Jan 1", attendance: 92 },
  { date: "Jan 2", attendance: 87 },
  { date: "Jan 3", attendance: 94 },
  { date: "Jan 4", attendance: 89 },
  { date: "Jan 5", attendance: 96 },
  { date: "Jan 6", attendance: 85 },
  { date: "Jan 7", attendance: 91 },
  { date: "Jan 8", attendance: 88 },
  { date: "Jan 9", attendance: 93 },
  { date: "Jan 10", attendance: 90 },
  { date: "Jan 11", attendance: 95 },
  { date: "Jan 12", attendance: 87 },
  { date: "Jan 13", attendance: 92 },
  { date: "Jan 14", attendance: 89 },
];

export function AttendanceChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Attendance Trends
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Daily attendance percentage over the last 2 weeks
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="date"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              className="fill-muted-foreground"
            />
            <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              className="fill-muted-foreground"
              domain={[80, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-card)",
              }}
              labelStyle={{
                color: "hsl(var(--foreground))",
              }}
            />
            <Line
              type="monotone"
              dataKey="attendance"
              strokeWidth={2}
              stroke="hsl(var(--primary))"
              dot={{
                fill: "hsl(var(--primary))",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                r: 6,
                stroke: "hsl(var(--primary))",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}