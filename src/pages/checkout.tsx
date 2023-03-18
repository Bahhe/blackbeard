import { useRouter } from "next/router";
import React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { Order, RootState } from "types";
import { resetCart } from "~/redux/cartSlice";
import { api } from "~/utils/api";

const inputStyle = "border py-2 px-5 rounded-lg";
export default function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const utils = api.useContext();
  const { mutate: createOrder } = api.orders.createOrder.useMutation({
    async onSuccess() {
      await utils.orders.invalidate();
    },
  });
  const cart = useSelector((state: RootState) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>();
  const onSubmit: SubmitHandler<Order> = async (data) => {
    createOrder({ ...data, orders: cart });
    dispatch(resetCart());
    alert("your order has been placed thanks for purchasing from us");
    await router.push("/");
  };
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
            placeholder="email"
            {...register("email", { required: true })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
              max: 15,
              min: 5,
              maxLength: 15,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="address"
            {...register("address", {
              required: true,
              max: 100,
              min: 10,
              maxLength: 100,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="city"
            {...register("city", {
              required: true,
              max: 20,
              min: 4,
              maxLength: 20,
            })}
            className={inputStyle}
          />
          <input
            type="tel"
            placeholder="number"
            {...register("number", { required: true })}
            className={inputStyle}
          />
          <input
            type="submit"
            className="w-full rounded-lg bg-red-500 py-2 px-4 text-white"
          />
        </form>
      </div>
    </section>
  );
}
