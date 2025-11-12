import { useState, useEffect } from "react";
import { FaUsers, FaFileAlt, FaChartLine, FaClipboardCheck } from "react-icons/fa";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalResumes: 0,
    totalApplications: 0,
    activeStudents: 0
  });

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const studentUsers = storedUsers.filter(u => u.role === "Student");
    setUsers(studentUsers);
    
    // Calculate stats
    setStats({
      totalUsers: studentUsers.length,
      totalResumes: studentUsers.filter(u => u.hasResume).length,
      totalApplications: studentUsers.reduce((sum, u) => sum + (u.applications || 0), 0),
      activeStudents: studentUsers.filter(u => u.lastActive).length
    });
  }, []);

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2 text-foreground">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage student placements and track progress</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={FaUsers}
          title="Total Students"
          value={stats.totalUsers}
          color="bg-primary"
        />
        <StatCard
          icon={FaFileAlt}
          title="Resumes Created"
          value={stats.totalResumes}
          color="bg-primary"
        />
        <StatCard
          icon={FaClipboardCheck}
          title="Applications"
          value={stats.totalApplications}
          color="bg-primary"
        />
        <StatCard
          icon={FaChartLine}
          title="Active Students"
          value={stats.activeStudents}
          color="bg-primary"
        />
      </div>

    </div>
  );
};

export default AdminDashboard;
