export default function OrderSummary() {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">order summary :</h3>
          <p className="text-md text-gray-500">184000 da</p>
        </div>
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">additional services :</h3>
          <p className="text-md text-gray-500">500 da</p>
        </div>
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">order total :</h3>
          <p className="text-md text-gray-500">184500 da</p>
        </div>
        <button className="mx-5 my-5 rounded bg-red-500 py-2 px-4 capitalize text-white">
          checkout
        </button>
      </div>
    </section>
  );
}
