import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaClock, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const AdminHistory = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem("companies") || "[]");
    setCompanies(storedCompanies);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-success/10 text-success";
      case "In Progress":
        return "bg-accent/20 text-accent-foreground";
      case "Upcoming":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <FaCheckCircle className="w-4 h-4" />;
      case "In Progress":
        return <FaHourglassHalf className="w-4 h-4" />;
      case "Upcoming":
        return <FaClock className="w-4 h-4" />;
      default:
        return <FaClock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Company History</h1>
        <p className="text-muted-foreground mt-2">View all registered companies for placements</p>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Company Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date of Registration</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Job Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Students Registered</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {companies.length > 0 ? (
                companies.map((company, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FaBuilding className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{company.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {company.registrationDate || new Date().toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{company.jobRole || "Not specified"}</td>
                    <td className="px-6 py-4 text-sm text-foreground text-center">
                      {company.studentsRegistered || 0}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${getStatusColor(
                          company.status || "Upcoming"
                        )}`}
                      >
                        {getStatusIcon(company.status || "Upcoming")}
                        {company.status || "Upcoming"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/admin/company/${company.id}`)}
                        className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold transition-all"
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <FaBuilding className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">No companies registered yet</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHistory;
