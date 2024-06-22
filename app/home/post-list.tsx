"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { usePost } from "./use-post";
import { Post } from "./data";
import Card from "@/components/card";

interface PostListProps {
  items: Post[];
}

export default function PostList({ items }: PostListProps) {
  const { config, setConfig, votes, handleVoteChange } = usePost();

  return (
    <>
      <ScrollArea className="h-screen">
        <div className="flex flex-col gap-8 p-4 pt-0">
          {items.map((item) => {
            const vote = votes.find((v) => v.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() =>
                  setConfig({
                    ...config,
                    selected: item.id,
                  })
                }>
                <Card
                  key={item.id}
                  post={item}
                  upChecked={vote?.upChecked || false}
                  downChecked={vote?.downChecked || false}
                  onVote={(type, checked) =>
                    handleVoteChange(item.id, type, checked)
                  }
                />
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
}
