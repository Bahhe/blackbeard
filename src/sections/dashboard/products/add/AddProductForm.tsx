import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import imagePlaceholder from "/public/imagePlaceholder.jpg";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { storage } from "~/utils/firebase";
import { BsUpload } from "react-icons/bs";
import type { Product } from "types";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const inputStyle = "rounded border p-2 shadow my-2 bg-white";

export default function AddProductForm() {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const utils = api.useContext();
  const { mutate } = api.products.createProduct.useMutation({
    async onSuccess() {
      await utils.products.getAll.invalidate();
      await router.push("/dashboard/products");
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
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => {
    mutate({ ...data, image: url });
  };
  console.log(errors);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 rounded-lg p-5 shadow-lg"
      >
        <div className="flex flex-col">
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
            type="text"
            placeholder="cpu"
            {...register("cpu", {
              required: true,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="ram"
            {...register("ram", {
              required: true,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="storage"
            {...register("storage", {
              required: true,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="display"
            {...register("display", {
              required: true,
            })}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="gpu"
            {...register("gpu", {
              required: true,
            })}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-5">
            <Image
              src={url ? url : imagePlaceholder}
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
          <select {...register("category")} className={inputStyle}>
            <option value="all in one">all in one</option>
            <option value="chromebook">chromebook</option>
            <option value="touchescreen">touchescreen</option>
            <option value="gaming">gaming</option>
            <option value="apple">apple</option>
            <option value="other">other</option>
          </select>
          <select {...register("brand")} className={inputStyle}>
            <option value="acer">acer</option>
            <option value="lenovo">lenovo</option>
            <option value="dell">dell</option>
            <option value="hp">hp</option>
            <option value="asus">asus</option>
            <option value="msi">msi</option>
            <option value="apple">apple</option>
            <option value="microsoft">microsoft</option>
          </select>
          <input
            type="number"
            placeholder="stock"
            {...register("stock", {
              required: true,
            })}
            className={inputStyle}
          />
          <select {...register("section")} className={inputStyle}>
            <option value="landing page">landing page</option>
            <option value="discover">discover</option>
            <option value="best selling">best selling</option>
          </select>

          <input
            type="submit"
            className="cursor-pointer rounded border bg-blue-700 py-2 px-4 text-white shadow"
          />
        </div>
      </form>
    </div>
  );
}
