import { useState } from "react";
import { toast } from "sonner";

const CreateResume = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    marks10th: "",
    marks12th: "",
    degree: "",
    college: "",
    semester: "",
    cgpa: "",
    backlogs: "",
    technicalSkills: "",
    softSkills: "",
    projectTitle: "",
    projectDescription: "",
    techStack: "",
    internship: "",
    certifications: "",
    achievements: "",
    declaration: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      toast.error("Please accept the declaration");
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile ||
        !formData.marks10th || !formData.marks12th || !formData.degree || !formData.college ||
        !formData.semester || !formData.cgpa || !formData.technicalSkills || 
        !formData.projectTitle || !formData.projectDescription) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Resume created successfully!");
    console.log("Resume Data:", formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Create Resume</h1>
      <p className="text-muted-foreground mb-6">Here create your Resume.</p>
      
      <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 p-6 rounded-lg border border-border shadow-sm">
        {/* Personal Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                First Name <span className="text-destructive">*</span>
              </label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Middle Name</label>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Last Name <span className="text-destructive">*</span>
              </label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Email ID <span className="text-destructive">*</span>
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Mobile Number <span className="text-destructive">*</span>
              </label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-foreground">Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows="2"
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Academic Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Academic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                10th Marks/Percentage <span className="text-destructive">*</span>
              </label>
              <input type="text" name="marks10th" value={formData.marks10th} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                12th Marks/Percentage <span className="text-destructive">*</span>
              </label>
              <input type="text" name="marks12th" value={formData.marks12th} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Current Degree/Course <span className="text-destructive">*</span>
              </label>
              <input type="text" name="degree" value={formData.degree} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                College/University Name <span className="text-destructive">*</span>
              </label>
              <input type="text" name="college" value={formData.college} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Current Semester <span className="text-destructive">*</span>
              </label>
              <input type="text" name="semester" value={formData.semester} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                CGPA till now <span className="text-destructive">*</span>
              </label>
              <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Backlogs</label>
              <input type="text" name="backlogs" value={formData.backlogs} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Technical Skills <span className="text-destructive">*</span>
              </label>
              <textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleChange}
                rows="3" placeholder="e.g., JavaScript, React, Python (comma separated)"
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Soft Skills</label>
              <textarea name="softSkills" value={formData.softSkills} onChange={handleChange}
                rows="2" placeholder="e.g., Communication, Leadership (comma separated)"
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Projects/Internships */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Projects / Internships</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Project Title <span className="text-destructive">*</span>
              </label>
              <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Project Description <span className="text-destructive">*</span>
              </label>
              <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange}
                rows="4" className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Tech Stack</label>
              <input type="text" name="techStack" value={formData.techStack} onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Internship Experience</label>
              <textarea name="internship" value={formData.internship} onChange={handleChange}
                rows="3" className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Achievements/Certifications */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Achievements / Certifications</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Certifications</label>
              <textarea name="certifications" value={formData.certifications} onChange={handleChange}
                rows="3" className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Achievements</label>
              <textarea name="achievements" value={formData.achievements} onChange={handleChange}
                rows="3" className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Declaration */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">Declaration</h2>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-primary"
              required
            />
            <label className="text-sm text-foreground">
              I hereby declare that the information provided above is true to the best of my knowledge. 
              <span className="text-destructive"> *</span>
            </label>
          </div>
        </section>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-md hover:from-violet-600 hover:to-violet-700 hover:shadow-lg transition-all font-semibold"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default CreateResume;
