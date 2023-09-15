import { getPosts } from "./get-posts";
import NewsArticle from "@/components/news-article";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default function News() {
  const postsDirectory = path.join(process.cwd(), "app/aktualnosci/posts");
  const allPosts = getPosts(postsDirectory);

  const moreThanOneImage = allPosts.map((post) => {
    const howManyImages = post.data.image.length;
    if (howManyImages === 1) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <div className="my-10 flex justify-center">
        <h1 className="text-2xl font-bold">Aktualności</h1>
      </div>
      <div className="flex flex-col gap-10">
        {allPosts.map((post, index) => (
          <NewsArticle
            key={uuidv4()}
            index={index}
            date={post.data.date}
            title={post.data.title}
            htmlContent={post.htmlContent}
            tel={post.data.tel}
            moreThanOneImage={moreThanOneImage}
            image={post.data.image}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
