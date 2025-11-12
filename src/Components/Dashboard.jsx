import { FaGraduationCap } from "react-icons/fa";

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
          <FaGraduationCap className="w-10 h-10 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Welcome, {currentUser.name || "Student"}!
          </h1>
          <p className="text-xl text-muted-foreground">
            Use the sidebar to navigate through the portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
