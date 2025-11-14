import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBuilding, FaCalendar, FaBriefcase, FaMoneyBillWave, FaArrowLeft } from "react-icons/fa";

const CompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const companies = JSON.parse(localStorage.getItem("companies") || "[]");
    const foundCompany = companies.find((c) => c.id === parseInt(id));
    setCompany(foundCompany);
  }, [id]);

  if (!company) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-muted-foreground">Company not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <FaBuilding className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{company.companyName}</h1>
            <p className="text-muted-foreground">{company.jobCategory || "Company Recruitment"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-muted-foreground">Job Role</label>
              <p className="text-foreground flex items-center gap-2">
                <FaBriefcase className="w-4 h-4 text-primary" />
                {company.jobRole || "Not specified"}
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-muted-foreground">Type</label>
              <p className="text-foreground">{company.type}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-muted-foreground">Package Offered</label>
              <p className="text-foreground flex items-center gap-2">
                <FaMoneyBillWave className="w-4 h-4 text-emerald-600" />
                {company.packageOffered || "Not disclosed"}
              </p>
            </div>

            {company.internshipStipend && (
              <div>
                <label className="text-sm font-semibold text-muted-foreground">Internship Stipend</label>
                <p className="text-foreground">{company.internshipStipend}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-muted-foreground">Registration Period</label>
              <p className="text-foreground flex items-center gap-2">
                <FaCalendar className="w-4 h-4 text-primary" />
                {company.startRegistrationDate} - {company.endRegistrationDate}
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-muted-foreground">Visit Date</label>
              <p className="text-foreground">{company.visitDate || "TBA"}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-muted-foreground">Skills Required</label>
              <p className="text-foreground">{company.skillsRequired || "Not specified"}</p>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-muted-foreground">Description</label>
          <p className="text-foreground mt-2">{company.description}</p>
        </div>

        <div>
          <label className="text-sm font-semibold text-muted-foreground">Hiring Process</label>
          <p className="text-foreground mt-2">{company.hiringProcess || "Not specified"}</p>
        </div>

        <button
          onClick={() => navigate(`/home/apply/${company.id}`)}
          className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all transform hover:scale-[1.02]"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CompanyDetails;
