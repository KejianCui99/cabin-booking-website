import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to PineNest
        </h1>

        <div className="space-y-8">
          <p>
            Where the calm of the Australian bush and comfortable living blend
            seamlessly. Tucked into the forested hills of the Dandenong Ranges,
            just an hour from Melbourne, this is your escape from the rush of the
            city. But it&apos;s not just about the luxury cabins. It&apos;s about
            waking among towering mountain ash, breathing the cool,
            eucalyptus-scented air, and rediscovering simple pleasures with the
            people you love.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            magic lies in the landscape that surrounds them. Wander misty fern
            gullies, listen for the lyrebird and the laugh of a kookaburra, and
            watch the southern stars come out over the ranges from the warmth of
            a campfire or your private hot tub.
          </p>
          <p>
            This is where memorable moments are made, cradled by some of the
            oldest forest in Australia. It&apos;s a place to slow down, breathe
            deep, and feel the quiet joy of being together in a truly beautiful
            corner of Victoria.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages PineNest"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, PineNest has been a cherished family-run retreat.
            Started by our grandparents on a quiet patch of land in the ranges,
            this haven has been nurtured with love and care, passing down
            through our family as a testament to our dedication to creating a
            warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve kept the heart of PineNest unchanged,
            blending the timeless beauty of the Australian bush with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So come join us at
            PineNest soon, where the forest meets genuine hospitality, and every
            visit is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
