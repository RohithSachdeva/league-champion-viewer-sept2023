"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <div className="flex flex-col my-10 h-screen">
      <h2 className="flex justify-center text-white">
        Please Log in to view your dashboard
      </h2>
      <button className="mt-24 text-white" onClick={() => router.push(`/`)}>
        Return Home
      </button>
    </div>
  );
}
