import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { storage as fireBaseStorage } from "~/utils/firebase";
import { BsUpload } from "react-icons/bs";
import type { Accessory } from "types";
import { api } from "~/utils/api";
import AdminHeader from "~/components/AdminHeader";
import { useRouter } from "next/router";

type ProductProps = {
  product: Accessory;
};

const inputStyle = "rounded border p-2 shadow my-2 bg-white";

export default function Product({
  product: {
    id,
    title,
    description,
    image,
    price,
    stock,
    section,
    brand,
    category,
  },
}: ProductProps) {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const utils = api.useContext();
  const { mutate } = api.accessories.updateProduct.useMutation({
    async onSuccess() {
      await utils.accessories.getAll.invalidate();
      await router.push("/dashboard/accessories");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const imageName = new Date().toISOString();
    const imageRef = ref(fireBaseStorage, imageName);
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
  } = useForm<Accessory>({
    defaultValues: {
      title: title,
      description: description,
      price: price,
      stock: stock,
      section: section,
      brand: brand,
      category: category,
    },
  });

  const onSubmit: SubmitHandler<Accessory> = (data) => {
    mutate({ ...data, image: url ? url : image, id: id });
  };
  console.log(errors);

  return (
    <>
      <AdminHeader />
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 rounded-lg p-5 shadow-lg"
        >
          <div className="flex items-center justify-center py-5">
            <Image
              src={url ? url : image}
              width={150}
              height={70}
              alt="product"
              className="h-auto w-auto"
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
            })}
            className={inputStyle}
          />
          <textarea
            {...register("description", {
              required: true,
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
            })}
            className={inputStyle}
          />
          <input
            type="number"
            placeholder="stock"
            {...register("stock", {
              required: true,
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
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="section"
            {...register("section", {
              required: true,
            })}
            className={inputStyle}
          />
          <input
            type="submit"
            className="cursor-pointer rounded border bg-blue-700 py-2 px-4 text-white shadow"
          />
        </form>
      </div>
    </>
  );
}
