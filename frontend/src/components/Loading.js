import React from "react";
import { RefreshIcon } from "@heroicons/react/outline";

export default function Loading() {
  return (
    <div className="h-screen flex text-indigo-500 justify-center">
      <div className="flex justify-center items-center">
        <RefreshIcon className="h-32 w-32 animate-spin" />
      </div>
    </div>
  );
}
