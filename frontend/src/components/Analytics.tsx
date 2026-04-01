import { PieChart, Pie, Cell } from "recharts";

export default function Analytics({jobs} : any) {

    const data = [
        { name: "Applied", value: jobs.filter((j: any) => j.status === "APPLIED").length },
        { name: "Interview", value: jobs.filter((j: any) => j.status === "INTERVIEW").length },
        { name: "Offer", value: jobs.filter((j: any) => j.status === "OFFER").length },
        { name: "Rejected", value: jobs.filter((j: any) => j.status === "REJECTED").length },
    ];

    const COLORS = ["#FFBB28", "#0088FE", "#00C49F", "#FF8042"];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="value"
                outerRadius={100}
            >
                {data.map((_, index) => (
                    <Cell key={index}  fill={COLORS[index % COLORS.length]}/>
                ))} 
            </Pie>
        </PieChart>
    );
}