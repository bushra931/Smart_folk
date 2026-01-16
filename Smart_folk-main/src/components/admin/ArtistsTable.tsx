const ArtistsTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#FAF6F1] text-sm text-gray-600">
          <tr>
            <th className="p-4">Artist</th>
            <th className="p-4">Craft</th>
            <th className="p-4">Location</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-4 font-medium">Ramesh Bhagat</td>
            <td className="p-4">Baul Singer</td>
            <td className="p-4">West Bengal</td>
            <td className="p-4 text-orange-600">Pending</td>
            <td className="p-4 text-right space-x-2">
              <button className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                Approve
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                Reject
              </button>
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">Mohammad Yusuf</td>
            <td className="p-4">Blue Pottery</td>
            <td className="p-4">Rajasthan</td>
            <td className="p-4 text-orange-600">Pending</td>
            <td className="p-4 text-right space-x-2">
              <button className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                Approve
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ArtistsTable;
