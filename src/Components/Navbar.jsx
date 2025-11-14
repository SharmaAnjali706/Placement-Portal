import { useState, useEffect } from "react";
import { FaGraduationCap, FaSignOutAlt, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const loadNotifications = () => {
      const companies = JSON.parse(localStorage.getItem("companies") || "[]");
      const viewedNotifications = JSON.parse(localStorage.getItem("viewedNotifications") || "[]");
      
      const notifs = companies.map((company, index) => ({
        id: `company-${index}`,
        title: `New Placement Drive: ${company.companyName}`,
        message: `${company.companyName} is hiring! Application deadline: ${company.endRegistrationDate}`,
        date: company.startRegistrationDate,
        type: "placement",
        isRead: viewedNotifications.includes(`company-${index}`)
      }));

      // Add deadline notifications for companies ending soon
      const today = new Date();
      const deadlineNotifs = companies
        .filter(company => {
          const endDate = new Date(company.endRegistrationDate);
          const daysUntilDeadline = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
          return daysUntilDeadline <= 3 && daysUntilDeadline >= 0;
        })
        .map((company, index) => ({
          id: `deadline-${index}`,
          title: `Application Deadline Approaching`,
          message: `${company.companyName} applications close on ${company.endRegistrationDate}`,
          date: company.endRegistrationDate,
          type: "deadline",
          isRead: viewedNotifications.includes(`deadline-${index}`)
        }));

      const allNotifications = [...notifs, ...deadlineNotifs].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
      );

      setNotifications(allNotifications);
      setUnreadCount(allNotifications.filter(n => !n.isRead).length);
    };

    loadNotifications();
    const interval = setInterval(loadNotifications, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    toast.success("Signed out successfully");
    navigate("/login");
  };

  const markAsRead = (notificationId) => {
    const viewedNotifications = JSON.parse(localStorage.getItem("viewedNotifications") || "[]");
    if (!viewedNotifications.includes(notificationId)) {
      viewedNotifications.push(notificationId);
      localStorage.setItem("viewedNotifications", JSON.stringify(viewedNotifications));
      setNotifications(prev => prev.map(n => 
        n.id === notificationId ? { ...n, isRead: true } : n
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
  };

  const markAllAsRead = () => {
    const allIds = notifications.map(n => n.id);
    localStorage.setItem("viewedNotifications", JSON.stringify(allIds));
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    setUnreadCount(0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <FaGraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-semibold">PlaceNix</h1>
        </div>

        <div className="flex-1 flex justify-center">
          <p className="text-sm text-muted-foreground">
            Hello, <span className="font-medium text-foreground">{currentUser.name || "Student"}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <FaBell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-card border rounded-lg shadow-lg z-50 max-h-[500px] overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold text-lg">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-primary hover:underline"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="overflow-y-auto flex-1">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-muted-foreground">
                        <FaBell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No notifications yet</p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            onClick={() => markAsRead(notification.id)}
                            className={`p-4 cursor-pointer transition-colors hover:bg-accent ${
                              !notification.isRead ? 'bg-primary/5' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                !notification.isRead ? 'bg-primary' : 'bg-transparent'
                              }`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className={`font-medium text-sm ${
                                    !notification.isRead ? 'text-foreground' : 'text-muted-foreground'
                                  }`}>
                                    {notification.title}
                                  </h4>
                                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                                    notification.type === 'deadline' 
                                      ? 'bg-destructive/10 text-destructive' 
                                      : 'bg-primary/10 text-primary'
                                  }`}>
                                    {notification.type === 'deadline' ? 'Urgent' : 'New'}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {notification.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <button
            onClick={handleSignOut}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
          >
            <FaSignOutAlt className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
