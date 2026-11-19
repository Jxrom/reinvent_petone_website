import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Home() {
  const categories = [
    { src: "/products/dog_food.webp", alt: "Dog Food", label: "Dog Food" },
    { src: "/products/cat_food.jpg", alt: "Cat Food", label: "Cat Food" },
    { src: "/products/wet_food.webp", alt: "Wet Food", label: "Wet Food" },
    { src: "/products/shampoo.webp", alt: "Shampoo", label: "Shampoo" },
  ];

  const brand_desc = [
    {
      src: "/brand_desc/complete_nutrition.png",
      alt: "Complete Nutrition",
      label: "Complete Nutrition",
    },
    {
      src: "/brand_desc/meat.png",
      alt: "Made with Real Meat",
      label: "Made with Real Meat",
    },
    {
      src: "/brand_desc/leaves.png",
      alt: "Natural Ingredients",
      label: "Natural Ingredients",
    },
    {
      src: "/brand_desc/salt.png",
      alt: "Low Sodium Content",
      label: "Low Sodium Content",
    },
    {
      src: "/brand_desc/digestive-organ.png",
      alt: "Probiotics for Digestion",
      label: "Probiotics for Digestion",
    },
  ];

  const types = [
    { src: "/pet_type/puppy.webp", alt: "Puppy", label: "Puppy" },
    { src: "/pet_type/adult.webp", alt: "Adult", label: "Adult" },
    { src: "/pet_type/adult2.webp", alt: "Adult", label: "Adult" },
    {
      src: "/pet_type/highly-active.webp",
      alt: "Highly Active",
      label: "Highly Active",
    },
    { src: "/pet_type/senior.webp", alt: "Senior", label: "Senior" },
    {
      src: "/pet_type/kitten.webp",
      alt: "Kitten",
      label: "Kitten & Adult Cat",
    },
  ];

  const reviews = [
    {
      name: "Rolando F.",
      text: "My pitbull puppies are very hiyang with this dog food. poops are firm and less odor. No allergic reaction also!",
    },
    {
      name: "Laura F.",
      text: "I have mixed this food to the dry food that my Belgian Malinois is eating, and she likes it, first time to try Pet One product, but really satisfying!",
    },
    {
      name: "Darlyn M.",
      text: "My yellow lab definitely loves Pet One. Unlike other dog foods that I have tried, Pet One doesn’t give my dog rashes. He grows fast and full of energy with this dog food.",
    },
  ];

  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-y-0 left-0 z-10 flex max-w-xl items-center px-6 md:px-12">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Philippines' 1st Local Pet Food Brand
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-5xl font-bold text-pink-500">Our Products</h2>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.src}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={category.src}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                  <span className="text-lg font-semibold text-white">
                    {category.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-5xl font-bold text-pink-500 text-center">
            A healthy pet begins with a healthy food
          </h2>
          <p className="font-bold text-3xl text-center text-zinc-700 mt-2">
            From ingredients like real beef and lamb to natural Vitamin E, we
            make sure we give you the quality pet food without sacrificing your
            pet’s long-term health and development.​
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
            {brand_desc.map((item) => (
              <div
                key={item.src}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-20 w-20 md:h-24 md:w-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <span className="mt-4 text-lg font-semibold text-zinc-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-pink-500">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-12 ">
              <div>
                <h2 className="text-4xl font-bold text-white md:text-5xl ">
                  Why Pet One?
                </h2>
                <p className="mt-4 text-lg text-white/90">
                  At Pet One, we prioritize natural ingredients for our products
                  because we believe it’s the best choice. From real beef and
                  lamb to natural vitamin E, we ensure top-quality pet food
                  without compromising your pet’s health and growth.
                </p>

                <p className="mt-4 text-lg text-white/90">
                  We maintain rigorous cleanliness and food safety standards
                  across all our products. Rest assured, your pet’s food is
                  fresh, safe, and free from artificial additives.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-12 ">
              <div>
                <h2 className="text-4xl font-bold text-zinc-700 md:text-5xl ">
                  Targeted Nutrition for every life stage & lifestyle
                </h2>
                <p className="mt-4 text-lg text-black/90">
                  We understand that every pet is unique, with specific
                  nutritional needs based on their life stage and lifestyle.
                  That’s why we offer a range of targeted nutrition tailored to
                  support your pet’s journey at every age and stage of life,
                  ensuring they thrive and live their best life possible.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
              {types.map((category) => (
                <div
                  key={category.src}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={category.src}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <span className="text-lg font-semibold text-white">
                      {category.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-12 ">
              <div>
                <p className="mt-4  text-zinc-700 text-5xl font-bold">
                  We believe that care is key for a long lasting and happy dog
                  and owner relationship.
                </p>

                <div className="justify-end flex">
                  <Image
                    src="/care_naturally.png"
                    alt="Care Naturally"
                    width={200}
                    height={77}
                    className="h-36 w-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-pink-50">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-5xl font-bold text-pink-500 text-center">
              What Pet Parents Say
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <figure
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm"
                >
                  <blockquote className="text-lg text-zinc-700">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-6 font-semibold text-pink-500">
                    {review.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
