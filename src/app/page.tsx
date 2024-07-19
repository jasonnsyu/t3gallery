import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/673790b0-6221-49ee-a2ff-2cf2d15295ff-sqit2x.png",
  "https://utfs.io/f/3fb2b29f-d3bf-4b16-977b-c0b69a4d956a-j0cmsh.png",
  "https://utfs.io/f/1eaa992e-8421-45b0-80d1-d30a7ef47ac3-tlqme6.png",
  "https://utfs.io/f/3da7dd2d-61a2-4015-a050-abf4bd8695d6-9dhe9b.png",
  "https://utfs.io/f/87635448-dc0a-4a96-a42c-41ed27472ff3-2da3ci.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
