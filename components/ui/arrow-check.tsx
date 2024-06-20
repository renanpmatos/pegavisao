"use client";

import { ChangeEvent } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface ArrowCheckProps {
  checked: boolean;
  onChange: (type: "up" | "down", checked: boolean) => void;
  type: "up" | "down";
}

export default function ArrowCheck({
  checked,
  onChange,
  type,
}: ArrowCheckProps) {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.checked);
  };

  return (
    <label className="flex items-center space-x-2 ml-4 my-4 cursor-pointer transition-all duration-150 delay-100 ease-in-out">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleCheck}
      />
      <div>
        {type === "up" ? (
          checked ? (
            <div className="rounded-xl p-2 text-green-500 bg-green-100">
              <ArrowUp size={30} className="" />
            </div>
          ) : (
            <div className="rounded-xl p-2 hover:text-green-500 hover:bg-green-100">
              <ArrowUp size={30} className="" />
            </div>
          )
        ) : checked ? (
          <div className="rounded-xl p-2 text-rose-500 bg-rose-100">
            <ArrowDown size={30} />
          </div>
        ) : (
          <div className="rounded-xl p-2 hover:text-rose-500 hover:bg-rose-100">
            <ArrowDown size={30} />
          </div>
        )}
      </div>
    </label>
  );
}
