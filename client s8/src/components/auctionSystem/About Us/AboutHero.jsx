import React from 'react';

function AboutHero() {
  return (
    <section 
      className="flex relative flex-col items-end px-16 pt-20 pb-56 w-full min-h-[744px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
      aria-labelledby="about-heading"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45cd3f498de6ea92c1b0ff513a94ef6986022646bbc5ceca843df47a55ffd0e?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108"
        alt="About section background"
        className="object-cover absolute inset-0 size-full"
        role="presentation"
      />
      <div className="relative mb-0 max-w-full w-[938px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <h1 
              id="about-heading"
              className="relative text-7xl font-extrabold text-right leading-[63px] text-zinc-800 max-md:mt-10 max-md:text-4xl max-md:leading-10"
            >
              About <span className="text-8xl text-sky-900">S8</span>
            </h1>
          </div>
          <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <p className="relative text-lg leading-7 text-neutral-800 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suscipit tortor lobortis purus elit amet aliquam amet,
              pellentesque aenean. Amet eget tortor, ut faucibus vitae elit
              rhoncus. Velit augue nec, urna leo, amet quam. Sit fames at
              proin congue odio. Tristique hendrerit vitae amet arcu commodo
              augue cras non. Semper in massa morbi imperdiet in mattis ac sit
              lectus. Sed tristique eu neque sem pellentesque nisi ultrices.
              Porttitor sed pellentesque phasellus amet turpis. A lacus,
              sagittis eget vehicula. Cursus in nibh felis at a. Metus,
              egestas potenti a etiam cursus duis.
            </p>
            <p className="relative text-lg leading-7 text-neutral-800 mt-7 max-md:max-w-full">
              Nulla phasellus vitae amet, molestie. Dignissim augue in rhoncus
              eget nibh adipiscing. Magna feugiat proin semper convallis
              pretium auctor condimentum lorem lobortis. Pretium, facilisis
              amet enim hac. In ut sit gravida quam eu vitae, ultrices
              rhoncus. Viverra quis libero nulla egestas quis ornare vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;