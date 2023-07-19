"use client";

import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";


export default function CommonListing({data}) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {data && data.length
            ? data.map((item) => (
                <article className="relative flex flex-col overflow-hidden border cursor-pointer" key={item._id}>
                  <ProductTile item={item} />
                  <ProductButton item={item} />
                </article>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
