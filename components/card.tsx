"use client";

import { Badge } from "@/components/ui/badge";
import ArrowCheck from "@/components/ui/arrow-check";
import { MessageSquareMore, Share2 } from "lucide-react";
import { Post } from "@/app/home/data";

interface CardProps {
  post: Post;
  upChecked: boolean;
  downChecked: boolean;
  onVote: (type: "up" | "down", checked: boolean) => void;
}

export default function Card({
  post,
  upChecked,
  downChecked,
  onVote,
}: CardProps) {
  const handleVoteChange = (type: "up" | "down", checked: boolean) => {
    onVote(type, checked);
  };

  const handleCommentClick = () => {
    alert(`Comentário clicado no post: ${post.id}`);
  };

  const handleShareClick = () => {
    alert(`Compartilhar clicado no post: ${post.id}`);
  };

  return (
    <div className="flex flex-row">
      <div className="border rounded-lg max-w-3xl p-4 border-slate-300 flex flex-row cursor-pointer">
        <div className="mx-3">
          <div className="flex flex-row justify-between text-xl font-semibold mb-4">
            {post.title}
            <Badge variant="outline" className="text-green-500 text-sm">
              <div className="h-2 w-2 mr-2 rounded-full bg-green-500" />
              {post.category}
            </Badge>
          </div>
          <div className="line-clamp-3 text-wrap text-lg my-3">
            {post.content.substring(0, 300)}
          </div>
          <div className="flex flex-row justify-between ">
            <p className="my-2">{post.postDate}</p>
            <div className="flex flex-row">
              <button
                onClick={handleCommentClick}
                className="rounded-xl flex flex-row gap-1 p-2 font-semibold hover:bg-sky-100 hover:text-blue-600">
                <MessageSquareMore />
                {post.totalComments}
              </button>
              <button
                onClick={handleShareClick}
                className="p-2 rounded-full hover:bg-sky-100 hover:text-blue-600">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <ArrowCheck type="up" checked={upChecked} onChange={handleVoteChange} />
        <p className="ml-6 text-lg font-semibold">12</p>
        <ArrowCheck
          type="down"
          checked={downChecked}
          onChange={handleVoteChange}
        />
      </div>
    </div>
  );
}
