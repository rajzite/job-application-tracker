import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Analytics from "../components/Analytics";

export default function Dashboard() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({
        company: "",
        role: "",
        status: "APPLIED",
    });

    const userId = 1;

    const fetchJobs = async () => {
        const res = await API.get(`/jobs/${userId}`);
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const addJob = async (e : any) => {
        e.preventDefault();

        await API.post("/jobs", {
            ...form,
            appliedDate: new Date().toISOString().split("T")[0],
            user: {
                id: userId,
            },
        });


        setForm({
            company: "",
            role: "",
            status: "APPLIED",
        });

        fetchJobs();
    };

    const filteredJobs = jobs.filter((job: any) =>
        job.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />

            <div className="p-6 max-w-6xl mx-auto">

                <div className ="bg-white p-6 rounded-2xl shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">Job Analytics</h2>
                    <Analytics jobs={jobs ||[]}/>
                </div>

                <form 
                    onSubmit={addJob}
                    className="bg-white p-6 rounded-2xl shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    <input
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Company"
                        value={form.company}
                        onChange={(e) => setForm({...form,company:e.target.value})}
                    />

                    <input
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Role"
                        value={form.role}
                        onChange={(e) => setForm({...form,role:e.target.value})}
                    />

                    <input
                        className="border p-4 rounded mb-4 w-fullborder p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Search company..."
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        value={form.status}
                        onChange={(e) => setForm({...form,status:e.target.value})}
                    >

                    <option value="APPLIED">APPLIED</option>
                    <option value="INTERVIEW">INTERVIEW</option>
                    <option value="OFFER">OFFER</option>
                    <option value="REJECTED">REJECTED</option>
                    </select>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold w-full md:w-auto">
                        Add Job
                    </button>
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job: any) => (
                        <JobCard key={job.id} job={job} refresh={fetchJobs}/>
                    ))}
                </div>
            </div>
        </>
    );
}