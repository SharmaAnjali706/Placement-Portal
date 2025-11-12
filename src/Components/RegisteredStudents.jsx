import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaGraduationCap } from "react-icons/fa";

const RegisteredStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Load students from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const studentUsers = storedUsers.filter(u => u.role === "Student");
    setStudents(studentUsers);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Registered Students</h1>
        <p className="text-muted-foreground mt-2">View all student profiles and information</p>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Student Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">College ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FaUser className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FaEnvelope className="w-4 h-4" />
                        {student.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {student.collegeId || "N/A"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <FaGraduationCap className="w-4 h-4 text-primary" />
                        {student.department || "Not specified"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-success/10 text-success">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <FaUser className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">No students registered yet</p>
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

export default RegisteredStudents;
