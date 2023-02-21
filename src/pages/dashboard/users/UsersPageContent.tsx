import { MdPerson } from "react-icons/md";

export default function UsersPageContent() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center rounded-lg p-10 shadow-lg">
        <div className="flex max-h-96 items-center gap-5">
          <MdPerson className="text-7xl text-blue-700" />
          <h2 className="font-semibold capitalize">baha eddine</h2>
          <p>marchelldteach@gmail.com</p>
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              edit
            </button>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              delete
            </button>
          </div>
        </div>
        <div className="flex max-h-96 items-center gap-5">
          <MdPerson className="text-7xl text-blue-700" />
          <h2 className="font-semibold capitalize">baha eddine</h2>
          <p>marchelldteach@gmail.com</p>
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              edit
            </button>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              delete
            </button>
          </div>
        </div>
        <div className="flex max-h-96 items-center gap-5">
          <MdPerson className="text-7xl text-blue-700" />
          <h2 className="font-semibold capitalize">baha eddine</h2>
          <p>marchelldteach@gmail.com</p>
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              edit
            </button>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              delete
            </button>
          </div>
        </div>
        <div className="flex max-h-96 items-center gap-5">
          <MdPerson className="text-7xl text-blue-700" />
          <h2 className="font-semibold capitalize">baha eddine</h2>
          <p>marchelldteach@gmail.com</p>
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              edit
            </button>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}