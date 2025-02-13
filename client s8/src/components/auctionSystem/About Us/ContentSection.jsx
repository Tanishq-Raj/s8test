import React from 'react';

function ContentSection() {
  return (
    <section 
      className="flex z-10 flex-col pl-16 mt-0 w-full max-md:pl-5 max-md:max-w-full"
      aria-labelledby="content-heading"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df192b26d58b7bf2032821a18822751aa88e0af9f8b2fb06f6c2405135c82008?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108"
        alt="Content section illustration"
        className="object-contain w-full aspect-[2.02] max-w-[1312px] max-md:max-w-full"
      />
      <div className="self-end mt-9 mr-36 max-w-full w-[648px] max-md:mr-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <p className="text-base leading-6 text-neutral-800 max-md:mt-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suscipit tortor lobortis purus elit amet aliquam amet,
              pellentesque aenean. Amet eget tortor, ut faucibus vitae elit
              rhoncus. Velit augue nec, urna leo, amet quam. Sit fames at
              proin congue odio. Tristique hendrerit vitae amet arcu commodo
              augue cras non. Semper in massa morbi imperdiet in mattis ac sit
              lectus. Sed tristi
            </p>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <p className="text-base leading-6 text-neutral-800 max-md:mt-7">
              Nulla phasellus vitae amet, molestie. Dignissim augue in rhoncus
              eget nibh adipiscing. Magna feugiat proin semper convallis
              pretium auctor condimentum lorem lobortis. Pretium, facilisis
              amet enim hac. In ut sit gravida quam eu vitae, ultrices
              rhoncus. Viverra quis libero nulla egestas quis ornare vitae.
            </p>
          </div>
        </div>
      </div>
      <h2 
        id="content-heading"
        className="self-start mt-28 ml-36 text-5xl font-bold leading-none text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl"
      >
        Lorem ipsum
      </h2>
      <div className="shrink-0 self-center mt-9 ml-9 max-w-full h-px border border-black border-solid w-[1089px]" />
      <div className="self-end mt-6 w-full max-w-[1229px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="mt-9 text-base leading-6 text-neutral-800 max-md:mt-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suscipit tortor lobortis purus elit amet aliquam amet,
                pellentesque aenean. Amet eget tortor, ut faucibus vitae elit
                rhoncus. Velit augue nec, urna leo, amet quam. Sit fames at
                proin congue odio. Tristique hendrerit vitae amet arcu commodo
                augue cras non. Semper in massa morbi imperdiet in mattis ac sit
                lectus. Sed tristi.
              </p>
              <p className="mt-6">
                Nulla phasellus vitae amet, molestie. Dignissim augue in rhoncus
                eget nibh adipiscing. Magna feugiat proin semper convallis
                pretium auctor condimentum lorem lobortis. Pretium, facilisis
                amet enim hac. In ut sit gravida quam eu vitae, ultrices
                rhoncus. Viverra quis libero nulla egestas quis ornare vitae.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7124222beb660e291682604bfdc18cb0cf810f3cdbdc751aa3e97a91eeb00ce?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108"
                    alt="Featured content image"
                    className="object-contain z-10 mr-0 w-full aspect-[1.35] max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto max-w-full bg-sky-900 h-[879px] w-[388px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;