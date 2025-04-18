import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chris' 100 Days of CSS" },
    { name: "description", content: "Chris' 100 Days of CSS" },
  ];
}
let posts = [
  {
    id: 1,
    title: "100 Days CSS",
    href: "/day-1",
    description:
      "The text '100 DAYS CSS CHALLENGE' styled with shadows and gradients. This was a nice introduction to Tailwind v4.",
    imageUrl: "previews/day-1.png",
    date: "Day 1",
  },
];

export default function Home() {
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
          {posts?.length <= 0 ? (
            <div className="col-span-full text-center text-gray-600 py-10">
              No solutions yet. Come back soon!
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
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
