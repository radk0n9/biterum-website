import { getPosts } from "./get-posts";
import fs from "fs";
import Image from "next/image";

export default function News() {
  const allPosts = getPosts();
  const isOrder1 = 1 % 2 === 0;

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
        <h1 className="mb-10 text-2xl font-bold">Aktualności</h1>
      </div>
      <div className="flex flex-col gap-14">
        {allPosts.map((post, index) => (
          <article className="grid grid-cols-2 gap-6">
            <div className={`flex flex-col gap-3 ${index % 2 === 0? "order-1" : "order-2"}`}>
              <p className="text-xs italic">{post.data.date}</p>
              <h2 className="text-lg font-semibold">{post.data.title}</h2>
              <p className="text-justify text-base leading-6">{post.content}</p>
              <p>Kontakt: {post.data.tel}</p>
            </div>
            {moreThanOneImage[index] ? (
              <div className={`flex justify-center ${index-1 % 2 === 0 ? "order-2" : "order-1"}`}>
                {Array.isArray(post.data.image) &&
                  post.data.image
                    .slice(0, 3)
                    .map((image) => (
                      <Image
                        src={`/aktualnosci/${post.id}/images/${image}.jpg`}
                        alt={`${image}`}
                        width={600}
                        height={600}
                        className="max-h-[19rem]"
                      />
                    ))}
              </div>
            ) : (
              <div className={`grid grid-cols-2 overflow-hidden gap-2 ${index-1 % 2 === 0 ? "order-1" : "order-2"}`}>
                {Array.isArray(post.data.image) &&
                  post.data.image
                    .slice(0, 3)
                    .map((image) => (
                      <Image
                        src={`/aktualnosci/${post.id}/images/${image}.jpg`}
                        alt={`${image}`}
                        width={500}
                        height={500}
                        className="max-h-36 object-cover"
                      />
                    ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
