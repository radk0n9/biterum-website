import path from "path";
import { getItems } from "@/components/get-items";
import ImageGallery from "@/components/image-gallery";
import DefaultBreadcrumb from "@/components/breadcrumb";
import { v4 as uuidv4 } from "uuid";

export default function Page({ params }) {
  const nameOfPost = params.id;

  const itemsDirectory = path.join(
    process.cwd(),
    `/app/aktualnosci/posts/${nameOfPost}`,
  );
  
  const postData = getItems(itemsDirectory);

  return (
    <>
      <div className="flex flex-col gap-10">
        {postData.map((post, index) => (
          <article
            key={uuidv4()}
            className="p-format flex flex-col gap-2 pb-6 pt-4 md:gap-6"
          >
          <DefaultBreadcrumb title={post.data.title} id={post.id}/>
            <div className={`flex flex-col gap-3 p-1`}>
              <p className="text-xs italic">{post.data.date}</p>
              <h2 className="text-lg font-semibold">{post.data.title}</h2>
              <div
                className="text-justify text-base"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />
              <p>
                Kontakt:<a href={`tel:+48${post.data.tel}`}> {post.data.tel}</a>
              </p>
            </div>
            <ImageGallery images={post.data.image.map((image) => `/images-aktualnosci/${post.id}/images/${image}.jpg`)} />
          </article>
        ))}
      </div>
    </>
  );
}
