import Link from "next/link"

export default async function Page() {
  let projects = [{
    name: '1111',
    pk: '11111'
  }]
  try {
    const response = await fetch('http://localhost:3000/projects')
    // let data: any = []
    const data = await response.json()
    console.log(data)
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
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {p.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                maiores deleniti consectetur nobis et eaque.
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </Link>

        )}
      </div>
    </>
  )
}