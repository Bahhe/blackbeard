import React from "react";
import { useForm } from "react-hook-form";

const inputStyle = "border py-2 px-5 rounded-lg";
export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="mx-auto flex w-5/6 items-center justify-center">
      <div className="my-32 rounded-lg border p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-10"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: true })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Name"
            {...register("Name", {
              required: true,
              max: 15,
              min: 5,
              maxLength: 15,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Address"
            {...register("Address", {
              required: true,
              max: 100,
              min: 10,
              maxLength: 100,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="City"
            {...register("City", {
              required: true,
              max: 20,
              min: 4,
              maxLength: 20,
            })}
            className={inputStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("Phone Number", { required: true })}
            className={inputStyle}
          />
          <select
            {...register("Delivery", { required: true })}
            className={inputStyle}
          >
            <option value="Yalidine">Yalidine</option>
            <option value="Ems">Ems</option>
            <option value="DHL">DHL</option>
            <option value="FedEx">FedEx</option>
          </select>

          <input
            type="submit"
            className="w-full rounded-lg bg-red-500 py-2 px-4 text-white"
          />
        </form>
      </div>
    </section>
  );
}
