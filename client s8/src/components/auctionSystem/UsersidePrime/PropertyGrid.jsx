import * as React from "react";
import { PropertyCard } from "./PropertyCard1";

const properties = [
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f2a0577aa5d00bf3d594607c69140963d434eaefff3629a693861f46e77a7dd?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/571ab98316b7ea66c59b55b252a62b8809f8f7f73d7148bfc3e662d2b1977a22?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/83886957aae783707faf8dede3afa412280ed316621dae53a45fbf3d588572ba?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdfbebef4ff324b65398fa9766032c5b6be28f89c45e6cb3acd82f12e73bbfb?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0494afa057091781d09ebd2c45067cc81cd08310b29d86b04a72a7c03e09d0a?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b18431d63f395c49b683ef847c82c40d05b0739c0888c8f2ff5de1651c30faa6?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf" }
];

export function PropertyGrid() {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between mt-14 w-full font-medium max-w-[1325px] max-md:mt-10 max-md:max-w-full">
        <div className="text-4xl text-slate-900">Recently Added</div>
        {/* <button className="my-auto text-2xl text-sky-500">See all</button> */}
      </div>
      <div className="mt-8 w-full max-w-[1333px] max-md:max-w-full">
        {[0, 1, 2].map((row) => (
          <div key={row} className="mt-8 w-full max-w-[1333px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <PropertyCard image={properties[row * 2].image} />
              <PropertyCard image={properties[row * 2 + 1].image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}