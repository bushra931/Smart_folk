import React from "react";

const FolkDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F1] p-6">

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-2xl">
          🎨
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#5A2E1B]">
            Lakshmi Devi
          </h2>
          <p className="text-[#8B5E3C]">Madhubani Painter</p>
          <p className="text-sm text-gray-500">
            ⭐ 4.9 · Madhubani, Bihar
          </p>
        </div>

        <button className="ml-auto px-4 py-2 rounded-full bg-[#C04A1A] text-white text-sm">
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatCard title="Total Bookings" value="12" />
        <StatCard title="Pending Requests" value="3" />
        <StatCard title="Rating" value="4.9" />
        <StatCard title="Profile Views" value="120" />
      </div>

      {/* Booking Requests */}
      <h3 className="text-xl font-semibold text-[#5A2E1B] mt-10 mb-4">
        Booking Requests
      </h3>

      <div className="space-y-4">
        <BookingCard
          event="Wedding Performance"
          client="Rahul Sharma"
          date="25 Jan 2026"
          location="Jaipur"
        />
        <BookingCard
          event="Cultural Festival"
          client="Anita Verma"
          date="2 Feb 2026"
          location="Delhi"
        />
      </div>

      {/* ✅ Portfolio Section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-32 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-medium"
            >
              Artwork {item}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Reviews Summary */}
      <section className="mt-10 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Reviews
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Rahul Sharma</p>
            <p className="text-sm text-gray-600">⭐ 5.0</p>
            <p className="text-gray-700 mt-1">
              Amazing performance! Very professional and punctual.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Anita Verma</p>
            <p className="text-sm text-gray-600">⭐ 4.5</p>
            <p className="text-gray-700 mt-1">
              Beautiful work. Guests really loved it.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

/* Small Components */

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

type BookingCardProps = {
  event: string;
  client: string;
  date: string;
  location: string;
};

const BookingCard: React.FC<BookingCardProps> = ({
  event,
  client,
  date,
  location,
}) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="font-semibold text-[#5A2E1B]">{event}</p>
    <p className="text-sm text-gray-600">Client: {client}</p>
    <p className="text-sm text-gray-600">Date: {date}</p>
    <p className="text-sm text-gray-600">Location: {location}</p>

    <div className="flex gap-3 mt-4">
      <button className="px-4 py-1 rounded-full bg-green-600 text-white text-sm">
        Accept
      </button>
      <button className="px-4 py-1 rounded-full bg-red-500 text-white text-sm">
        Reject
      </button>
    </div>
  </div>
);

export default FolkDashboard;

