import { posts } from "./data";
import PostList from "./post-list";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-40">
      <PostList items={posts} />
    </div>
  );
}
