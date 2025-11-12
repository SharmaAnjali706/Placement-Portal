import { FaBell, FaCalendar, FaBuilding } from "react-icons/fa";

const Updates = () => {
  const announcements = [
    {
      id: 1,
      title: "Microsoft Hiring Drive - 2024",
      company: "Microsoft",
      date: "May 15, 2024",
      type: "On-Campus",
      description: "Microsoft is visiting our campus for recruitment. Eligibility: CSE, IT students with CGPA > 7.5",
      status: "Active"
    },
    {
      id: 2,
      title: "Google Summer Internship Program",
      company: "Google",
      date: "May 10, 2024",
      type: "Internship",
      description: "Applications open for Google Summer Internship 2024. Apply before May 20th.",
      status: "New"
    },
    {
      id: 3,
      title: "Amazon Off-Campus Drive",
      company: "Amazon",
      date: "May 5, 2024",
      type: "Off-Campus",
      description: "Amazon is conducting an off-campus drive for Software Development Engineer roles.",
      status: "Active"
    },
    {
      id: 4,
      title: "Tech Talk: Career Guidance Session",
      company: "Placement Cell",
      date: "May 1, 2024",
      type: "Workshop",
      description: "Interactive session with industry experts on career planning and interview preparation.",
      status: "Completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-green-500";
      case "Active":
        return "bg-blue-500";
      case "Completed":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <FaBell className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Updates</h1>
          <p className="text-muted-foreground">Latest placement announcements and opportunities</p>
        </div>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold leading-none tracking-tight">{announcement.title}</h3>
                    <div className={`inline-flex items-center rounded-full border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 ${getStatusColor(announcement.status)}`}>
                      {announcement.status}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FaBuilding className="w-4 h-4" />
                      {announcement.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-4 h-4" />
                      {announcement.date}
                    </span>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                      {announcement.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-muted-foreground">{announcement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
