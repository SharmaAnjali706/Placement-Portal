import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGraduationCap, FaChevronDown } from "react-icons/fa";
import { toast } from "sonner";
import { cn } from "../utils";
import campusImage from "../assets/campus-illustration.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Student"
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [selectOpen, setSelectOpen] = useState(false);

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Email or College ID is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Admin emails list
    const adminEmails = ["admin@amity.edu", "placement@amity.edu", "admin@placement.com"];
    
    // Check if logging in as admin
    if (formData.role === "Admin") {
      if (!adminEmails.includes(formData.email.toLowerCase())) {
        toast.error("Invalid admin credentials");
        return;
      }
      // Simple admin password check (in production, use proper authentication)
      if (formData.password === "admin123") {
        const adminData = {
          name: "Admin",
          email: formData.email,
          role: "Admin"
        };
        localStorage.setItem("currentUser", JSON.stringify(adminData));
        toast.success("Admin login successful!");
        navigate("/admin");
        return;
      } else {
        toast.error("Invalid admin credentials");
        return;
      }
    }

    // Student login
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user || formData.email === "demo@student.com") {
      const userData = user || {
        name: "Demo Student",
        email: formData.email,
        role: "Student"
      };
      
      localStorage.setItem("currentUser", JSON.stringify(userData));
      toast.success("Login successful!");
      navigate("/home");
    } else {
      toast.error("Invalid credentials. Try demo@student.com or register first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md rounded-lg border bg-card text-card-foreground shadow-2xl animate-scale-in">
        <div className="flex flex-col space-y-3 p-6 text-center">
          <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <FaGraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight">PlaceNix</h3>
          <p className="text-sm text-muted-foreground">Sign in to access your dashboard</p>
        </div>
        <div className="p-6 pt-0">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email / College ID
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    errors.email ? "border-destructive" : ""
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    errors.password ? "border-destructive" : ""
                  )}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Role
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectOpen(!selectOpen)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {formData.role}
                    <FaChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                  {selectOpen && (
                    <div className="absolute z-50 w-full mt-1 rounded-md border bg-popover text-popover-foreground shadow-md">
                      <div
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground"
                        onClick={() => {
                          setFormData({ ...formData, role: "Student" });
                          setSelectOpen(false);
                        }}
                      >
                        Student
                      </div>
                      <div
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground"
                        onClick={() => {
                          setFormData({ ...formData, role: "Admin" });
                          setSelectOpen(false);
                        }}
                      >
                        Admin
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg transform hover:scale-[1.02] h-10 px-4 py-2 w-full"
              >
                Login
              </button>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Create one
                </Link>
              </div>

              <div className="pt-2 text-center text-xs text-muted-foreground border-t">
                <p>Student Demo: demo@student.com (any password)</p>
                <p className="mt-1">Admin Demo: admin@amity.edu / admin123</p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
