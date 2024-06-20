"use client";

import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";
import { Badge } from "@/components/ui/badge";
import ArrowCheck from "@/components/ui/arrow-check";
import { ArrowUp, ArrowDown, MessageSquareMore, Share2 } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  coments: number;
  postDate: string;
}

export default function Card({
  title,
  description,
  coments,
  postDate,
}: CardProps) {
  const [upChecked, setUpChecked] = useState(false);
  const [downChecked, setDownChecked] = useState(false);

  const handleChange = (type: "up" | "down", checked: boolean) => {
    if (type === "up") {
      setUpChecked(checked);
      if (checked) {
        setDownChecked(false);
      }
    } else if (type === "down") {
      setDownChecked(checked);
      if (checked) {
        setUpChecked(false);
      }
    }
  };

  return (
    <>
      <div className="border rounded-lg max-w-3xl p-4 border-slate-300 flex flex-row">
        <div className="mx-3">
          <div className="flex flex-row justify-between text-xl font-semibold mb-4">
            {title}
            <Badge variant="outline" className="text-green-500 text-sm">
              <div className="h-2 w-2 mr-2 rounded-full bg-green-500" />
              On progress
            </Badge>
          </div>
          <div className="text-wrap text-lg my-3">{description}</div>
          <div className="flex flex-row justify-between ">
            <p className="my-2">{postDate}</p>
            <div className="flex flex-row">
              <button className="rounded-xl flex flex-row gap-1 p-2 font-semibold hover:bg-sky-100 hover:text-blue-600">
                <MessageSquareMore />
                {coments}
              </button>
              <button className="p-2 rounded-full hover:bg-sky-100 hover:text-blue-600">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <ArrowCheck type="up" checked={upChecked} onChange={handleChange} />
        <p className="ml-6 text-lg font-semibold">12</p>
        <ArrowCheck type="down" checked={downChecked} onChange={handleChange} />
      </div>
    </>
  );
}
