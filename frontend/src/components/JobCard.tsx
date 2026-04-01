import API from "../services/api";

type Job = {
    id: number;
    company: string;
    role: string;
    status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
}

type Props = {
    job: Job;
    refresh: () => void;
};

export default function JobCard({ job, refresh } : Props) {

    const deleteJob = async () => {
        await API.delete(`/jobs/${job.id}`);
        refresh();
    };

    const statusColors: Record<Job["status"], string> = {
        APPLIED: "bg-yellow-100 text-yellow-800",
        INTERVIEW: "bg-blue-100 text-blue-800",
        OFFER: "bg-green-100 text-green-800",
        REJECTED: "bg-red-100 text-red-800"
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{job.company}</h2>
            <p className="text-gray-600 mb-4">{job.role}</p>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[job.status]}`}>
                {job.status}
            </span>

            <button
                onClick={deleteJob}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
                Delete Job
            </button>
        </div>
    );
}