import AdminLayout from "../components/layout/AdminLayout";

const AdminArtists = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold text-[#F5A2E1B]">
        Artists Management
      </h1>

      <p className="text-gray-600 mt-2">
        Approve, reject and manage folk artists here.
      </p>
    </AdminLayout>
  );
};

export default AdminArtists;

