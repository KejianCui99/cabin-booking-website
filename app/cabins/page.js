import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins nestled in the forested hills of the Dandenong
        Ranges, just outside Melbourne. Imagine waking up to misty mountain
        views, spending your days wandering ancient fern gullies and towering
        eucalyptus forest, or just relaxing in your private hot tub under the
        southern stars. Enjoy the beauty of the Australian bush in your own
        little home away from home. The perfect spot for a peaceful, calm
        getaway. Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
