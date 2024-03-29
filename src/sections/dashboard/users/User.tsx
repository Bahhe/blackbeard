import Image from "next/image";
import { api } from "~/utils/api";
import { useState } from "react";
import type { ReactSwitchProps } from "react-switch";
import Switch from "react-switch";
import type { User } from "types";

type UserProps = {
  user: User;
};

export default function User({
  user: { id, email, name, admin, image },
}: UserProps) {
  const [checked, setChecked] = useState<boolean>(admin ? true : false);
  const utils = api.useContext();
  const { mutate: updateUser } = api.users.updateUser.useMutation({
    async onSuccess() {
      await utils.users.getAll.invalidate();
    },
  });

  const handleChange = (val: boolean) => {
    setChecked(val);
    updateUser({ admin: !checked, id });
  };
  function MySwitch(props: ReactSwitchProps) {
    return <Switch {...props} />;
  }
  return (
    <div key={id} className="flex max-h-96 items-center gap-5">
      <div>
        <Image
          className="h-auto w-auto rounded-full"
          src={image as string}
          width={50}
          height={25}
          alt="user image"
        />
      </div>
      <h2 className="w-32 truncate font-semibold capitalize">{name}</h2>
      <p className="w-56 truncate">{email}</p>
      <div className="w-20">
        {admin ? (
          <span className="text-red-500">admin</span>
        ) : (
          <span className="text-green-500">client</span>
        )}
      </div>
      <div className="w-16">
        <MySwitch checked={checked} onChange={handleChange} />
      </div>
    </div>
  );
}
