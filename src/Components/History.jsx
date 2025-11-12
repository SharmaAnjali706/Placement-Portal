import { FaHistory } from "react-icons/fa";

const History = () => {
  const activities = [
    {
      id: 1,
      activity: "Applied for Microsoft Campus Drive",
      company: "Microsoft",
      date: "May 14, 2024",
      status: "Pending",
      type: "Application"
    },
    {
      id: 2,
      activity: "Viewed Google Internship Details",
      company: "Google",
      date: "May 12, 2024",
      status: "Viewed",
      type: "View"
    },
    {
      id: 3,
      activity: "Applied for Amazon SDE Role",
      company: "Amazon",
      date: "May 8, 2024",
      status: "Shortlisted",
      type: "Application"
    },
    {
      id: 4,
      activity: "Attended Career Guidance Session",
      company: "Placement Cell",
      date: "May 1, 2024",
      status: "Completed",
      type: "Workshop"
    },
    {
      id: 5,
      activity: "Updated Resume",
      company: "Self",
      date: "April 28, 2024",
      status: "Completed",
      type: "Profile Update"
    },
    {
      id: 6,
      activity: "Applied for TCS Drive",
      company: "TCS",
      date: "April 25, 2024",
      status: "Rejected",
      type: "Application"
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "Pending":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      case "Shortlisted":
        return "bg-primary text-primary-foreground hover:bg-primary/80";
      case "Completed":
        return "text-foreground border";
      case "Rejected":
        return "bg-destructive text-destructive-foreground hover:bg-destructive/80";
      default:
        return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <FaHistory className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">History</h1>
          <p className="text-muted-foreground">Your placement activity timeline</p>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Track your applications, views, and participation</p>
        </div>
        <div className="p-6 pt-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Activity</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Company</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">{activity.activity}</td>
                    <td className="p-4 align-middle">{activity.company}</td>
                    <td className="p-4 align-middle">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                        {activity.type}
                      </div>
                    </td>
                    <td className="p-4 align-middle text-muted-foreground">{activity.date}</td>
                    <td className="p-4 align-middle">
                      <div className={`inline-flex items-center rounded-full border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getStatusVariant(activity.status)}`}>
                        {activity.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
