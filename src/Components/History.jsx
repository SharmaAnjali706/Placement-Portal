import { useState, useEffect } from "react";
import { FaHistory } from "react-icons/fa";

const History = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem("applications") || "[]");
    setApplications(storedApplications);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-500 text-white";
      case "Shortlisted":
        return "bg-emerald-600 text-white";
      case "Completed":
        return "bg-emerald-600 text-white";
      case "Rejected":
        return "bg-rose-600 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <FaHistory className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">History</h1>
          <p className="text-muted-foreground">Your placement activity timeline</p>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Track your applications, views, and participation</p>
        </div>
        <div className="p-6 pt-0">
          {applications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Company</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Applied Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{application.companyName}</td>
                      <td className="p-4 align-middle">{new Date(application.appliedAt).toLocaleDateString()}</td>
                      <td className="p-4 align-middle">
                        <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(application.status)}`}>
                          {application.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No applications yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
