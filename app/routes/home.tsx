import type { Route } from "./+types/home";
import { Link } from "react-router";
import { posts } from "./posts";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chris' 100 Days of CSS" },
    { name: "description", content: "Chris' 100 Days of CSS" },
  ];
}

export default function Home() {
  let orderedPosts = [...posts].reverse();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            100 Days of CSS
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Chris' solutions to the{" "}
            <a href="https://100dayscss.com/">100 Days of CSS</a> challenge.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {orderedPosts?.length <= 0 ? (
            <div className="col-span-full text-center text-gray-600 py-10">
              No solutions yet. Come back soon!
            </div>
          ) : (
            orderedPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Link to={post.href}>
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                  </Link>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <Link to={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
