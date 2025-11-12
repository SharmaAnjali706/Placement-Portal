import { useState } from "react";
import { toast } from "sonner";
import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store help request in localStorage
    const helpRequests = JSON.parse(localStorage.getItem("helpRequests") || "[]");
    helpRequests.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "pending"
    });
    localStorage.setItem("helpRequests", JSON.stringify(helpRequests));
    
    toast.success("Your query has been submitted! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
        <p className="text-muted-foreground mt-2">Reach out to the Placement Cell for assistance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400/20 rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
            <FaEnvelope className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Email Us</h3>
          <p className="text-sm text-white/90">placement@amity.edu</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 border border-green-400/20 rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
            <FaPhone className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Call Us</h3>
          <p className="text-sm text-white/90">+91 120 4392000</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 border border-purple-400/20 rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
            <FaQuestionCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Office Hours</h3>
          <p className="text-sm text-white/90">Mon-Fri: 9 AM - 5 PM</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-lg h-10 px-6 py-2"
            >
              Submit Query
            </button>
          </div>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">How do I register for a placement drive?</h3>
            <p className="text-sm text-muted-foreground">Check the Updates section regularly for new placement opportunities and follow the registration process mentioned in each drive.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">How can I update my profile?</h3>
            <p className="text-sm text-muted-foreground">Navigate to the Profile section from the sidebar to update your personal information, academic details, and other relevant information.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Where can I see my application history?</h3>
            <p className="text-sm text-muted-foreground">Visit the History section to view all your past applications and their current status.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
