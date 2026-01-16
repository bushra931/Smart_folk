const AdminDashboardHome = () => {
  return (
    <>
      {/* Platform Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatCard title="Total Artists" value="124" />
        <StatCard title="Pending Approvals" value="6" />
        <StatCard title="Total Users" value="1,540" />
        <StatCard title="Total Bookings" value="320" />
      </div>

      {/* Pending Artist Approvals */}
      <h3 className="text-xl font-semibold text-[#5A2E1B] mt-10 mb-4">
        Pending Artist Approvals
      </h3>

      <div className="space-y-4">
        <ApprovalCard
          name="Ramesh Bhagat"
          craft="Baul Singer"
          location="Santiniketan, West Bengal"
        />
        <ApprovalCard
          name="Mohammad Yusuf"
          craft="Blue Pottery Artisan"
          location="Jaipur, Rajasthan"
        />
      </div>

      {/* Recent Activity */}
      <h3 className="text-xl font-semibold text-[#5A2E1B] mt-10 mb-4">
        Recent Activity
      </h3>

      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
        <p className="text-sm text-gray-600">
          ✅ New artist <span className="font-medium">Sunita Kumari</span> registered
        </p>
        <p className="text-sm text-gray-600">
          📅 New booking created for <span className="font-medium">Wedding Performance</span>
        </p>
        <p className="text-sm text-gray-600">
          ✔ Artist <span className="font-medium">Lakshmi Devi</span> approved
        </p>
      </div>
    </>
  );
};

export default AdminDashboardHome;
type StatCardProps = {
  title: string;
  value: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-[#5A2E1B]">{value}</p>
  </div>
);

type ApprovalCardProps = {
  name: string;
  craft: string;
  location: string;
};

const ApprovalCard: React.FC<ApprovalCardProps> = ({
  name,
  craft,
  location,
}) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center">
    <div>
      <p className="font-semibold text-[#5A2E1B]">{name}</p>
      <p className="text-sm text-gray-600">{craft}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </div>

    <div className="flex gap-3">
      <button className="px-4 py-1 rounded-full bg-green-600 text-white text-sm">
        Approve
      </button>
      <button className="px-4 py-1 rounded-full bg-red-500 text-white text-sm">
        Reject
      </button>
    </div>
  </div>
);

