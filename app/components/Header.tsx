"use client";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import React from "react";

type AppProps = {
  session: any;
};

const Header = ({ session }: AppProps) => {
  const user = session?.user;
  console.log(user);
  return (
    <div>
      <button onClick={() => signIn("google")}>sign i</button>
      <h1>{user?.name}</h1>
    </div>
  );
};

export default Header;

//Need to get proper typings from Next-auth; or just use custom ones for now.
{
  /* <button onClick={!user ? () => signIn("google") : () => signOut()}>
        Sign in
      </button> */
}
