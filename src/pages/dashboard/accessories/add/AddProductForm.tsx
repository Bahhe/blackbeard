import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import imagePlaceholder from "/public/imagePlaceholder.jpg";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { storage } from "~/utils/firebase";
import { BsUpload } from "react-icons/bs";
import type { Accessory } from "types";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const inputStyle = "rounded border p-2 shadow my-2 bg-white";

export default function AddProductForm() {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const utils = api.useContext();
  const { mutate, isError } = api.accessories.createProduct.useMutation({
    async onSuccess() {
      await utils.accessories.getAll.invalidate();
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const imageName = new Date().toISOString();
    const imageRef = ref(storage, imageName);
    uploadBytesResumable(imageRef, file as Blob)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error, "error uploading image");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Accessory>();
  const onSubmit: SubmitHandler<Accessory> = async (data) => {
    mutate({ ...data, image: url });
    if (isError) {
      return alert(`something went wrong`);
    }
    await router.push("/dashboard/accessories");
  };
  console.log(errors);

  return (
    <div className="mb-56 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 rounded-lg p-5 shadow-lg"
      >
        <div className="flex items-center justify-center py-5">
          <Image
            src={url ? url : imagePlaceholder}
            width={120}
            height={120}
            alt="product"
            className="h-auto w-auto"
            priority
          />
          <label>
            <BsUpload className="mx-2 text-4xl" />
            <input
              type="file"
              id="image-file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <input
          type="text"
          placeholder="title"
          {...register("title", {
            required: true,
            max: 24,
            min: 16,
            maxLength: 24,
          })}
          className={inputStyle}
        />
        <textarea
          {...register("description", {
            required: true,
            max: 200,
            min: 50,
            maxLength: 200,
          })}
          placeholder="description"
          className={inputStyle}
        />
        <input
          type="number"
          placeholder="price"
          {...register("price", {
            valueAsNumber: true,
            required: true,
            max: 50000,
            min: 1000,
          })}
          className={inputStyle}
        />
        <input
          type="number"
          placeholder="stock"
          {...register("stock", {
            required: true,
            max: 100,
            min: 1,
            maxLength: 100,
          })}
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="brand"
          {...register("brand", {
            required: true,
          })}
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="category"
          {...register("category", {
            required: true,
            max: 100,
            min: 1,
            maxLength: 100,
          })}
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="section"
          {...register("section", {
            required: true,
            max: 100,
            min: 1,
            maxLength: 100,
          })}
          className={inputStyle}
        />
        <input
          type="submit"
          className="cursor-pointer rounded border bg-blue-700 py-2 px-4 text-white shadow"
        />
      </form>
    </div>
  );
}
