import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaCalendar, FaBuilding } from "react-icons/fa";

const Updates = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem("companies") || "[]");
    setCompanies(storedCompanies);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-emerald-500 text-white";
      case "Active":
        return "bg-emerald-500 text-white";
      case "Completed":
        return "bg-slate-400 text-white";
      default:
        return "bg-slate-400 text-white";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <FaBell className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Updates</h1>
          <p className="text-muted-foreground">Latest placement announcements and opportunities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {companies.length > 0 ? (
          companies.map((company) => (
            <div
              key={company.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{company.companyName}</h3>
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(company.status || "Active")}`}>
                        {company.status || "Active"}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {company.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FaBuilding className="w-4 h-4" />
                        {company.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendar className="w-4 h-4" />
                        {company.startRegistrationDate} - {company.endRegistrationDate}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/home/company/${company.id}`)}
                  className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>No companies registered yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;
