import { FaGraduationCap, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    toast.success("Signed out successfully");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <FaGraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-semibold">Placenix - Admin</h1>
        </div>

        <div className="flex-1 flex justify-center">
          <p className="text-sm text-muted-foreground">
            Hello, <span className="font-medium text-foreground">Admin</span>
          </p>
        </div>

        <button
          onClick={handleSignOut}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
        >
          <FaSignOutAlt className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
