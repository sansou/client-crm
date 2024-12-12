export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const response = await fetch('http://localhost:3000/leads/project/'+ params.id)
  const data = await response.json()
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-x divide-gray-200">
          {data.map((l: any) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{l.name}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{l.createdAt}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{l.sk}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{l.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}