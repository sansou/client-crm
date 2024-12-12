import Link from "next/link"

export default async function Page() {
  let projects = []
  try {
    const response = await fetch('http://localhost:3000/projects')
    // let data: any = []
    const data = await response.json()
    projects = data
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <div>
        {projects.map((p: any) =>
          <Link
            href={p.pk}
            className="w-1/4 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {p.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600"></p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
                
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Data de Criação</dt>
                <dd className="text-xs text-gray-500">{p.createdAt}</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">STATUS</dt>
                <dd className="text-xs text-gray-500">{p.status}</dd>
              </div>
            </dl>
          </Link>

        )}
      </div>
    </>
  )
}