import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBuilding, FaArrowLeft, FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";

const CompanyApplicants = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const companies = JSON.parse(localStorage.getItem("companies") || "[]");
    const foundCompany = companies.find((c) => c.id === parseInt(id));
    setCompany(foundCompany);

    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    const companyApplicants = applications.filter((app) => app.companyId === parseInt(id));
    setApplicants(companyApplicants);
  }, [id]);

  if (!company) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="text-muted-foreground">Company not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-card border border-border rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <FaBuilding className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{company.companyName}</h1>
            <p className="text-muted-foreground">Total Applicants: {applicants.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground">Job Role</p>
            <p className="font-medium">{company.jobRole || "Not specified"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Type</p>
            <p className="font-medium">{company.type}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Package</p>
            <p className="font-medium">{company.packageOffered || "Not disclosed"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Registration Period</p>
            <p className="font-medium">{company.startRegistrationDate} - {company.endRegistrationDate}</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-foreground">Student Applications</h2>
        </div>

        {applicants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">CGPA</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Branch</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Resume</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Applied Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {applicants.map((applicant) => (
                  <tr key={applicant.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{applicant.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="w-3 h-3" />
                        {applicant.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FaPhone className="w-3 h-3" />
                        {applicant.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{applicant.cgpa || "N/A"}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{applicant.branch || "N/A"}</td>
                    <td className="px-6 py-4 text-sm">
                      {applicant.resume ? (
                        <a
                          href={applicant.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 hover:underline"
                        >
                          <FaFileAlt className="w-3 h-3" />
                          View
                        </a>
                      ) : (
                        <span className="text-muted-foreground">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(applicant.appliedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-muted-foreground">
            <p>No applications received yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyApplicants;
