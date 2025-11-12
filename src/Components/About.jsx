import { FaGraduationCap, FaBriefcase, FaUsers, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">About Us</h1>
        <p className="text-muted-foreground mt-2">Learn about Amity University and our Placement Cell</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Amity University</h2>
              <p className="text-muted-foreground">
                Amity University is one of India's leading education groups with a focus on excellence in education, research, and innovation. With state-of-the-art infrastructure and world-class faculty, we prepare students for global careers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <FaBriefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Placement Cell</h2>
              <p className="text-muted-foreground">
                Our Placement Cell works tirelessly to bridge the gap between academic learning and industry requirements. We facilitate internships, training programs, and placement opportunities with top companies across various sectors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <FaUsers className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower students with industry-relevant skills, professional guidance, and placement opportunities that align with their career aspirations. We strive to maintain strong relationships with recruiters and ensure maximum placement success.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <FaTrophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Our Achievements</h2>
              <p className="text-muted-foreground">
                With partnerships with over 500+ companies including Fortune 500 companies, our students have been placed in leading organizations across IT, Finance, Consulting, and various other domains with competitive packages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
        <div className="space-y-2 text-muted-foreground">
          <p><strong className="text-foreground">Email:</strong> placement@amity.edu</p>
          <p><strong className="text-foreground">Phone:</strong> +91 120 4392000</p>
          <p><strong className="text-foreground">Address:</strong> Amity University, Patna, Bihar</p>
        </div>
      </div>
    </div>
  );
};

export default About;
