import { useState } from "react";
import { toast } from "sonner";

const CoverLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    jobDescription: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.jobTitle || !formData.jobDescription) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Cover letter generated successfully!");
    console.log("Cover Letter Data:", formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Generate Cover Letter</h1>
      <p className="text-muted-foreground mb-6">Here create your Cover Letter.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Job Title <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Job Description <span className="text-destructive">*</span>
          </label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows="6"
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-md hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg transition-all font-medium"
        >
          Generate Cover Letter
        </button>
      </form>
    </div>
  );
};

export default CoverLetter;
