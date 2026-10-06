import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PackageCard } from "@/components/PackageCard";
import { pageByPath } from "@/data";
import type { LandingPage } from "@/data/types";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pilgrimage Tours in India, Nepal & Tibet | All Yatras",
  description:
    "Every yatra we plan: Char Dham, Do Dham, Kedarnath, Badrinath, Vaishno Devi, Jyotirlinga, Kashi-Ayodhya, Amarnath, Pashupatinath and Kailash Mansarovar.",
  path: "/pilgrimages/",
});

const groups: { title: string; paths: string[] }[] = [
  { title: "Uttarakhand Char Dham", paths: ["/char-dham-yatra/", "/do-dham-yatra/", "/kedarnath-yatra/", "/badrinath-yatra/", "/yamunotri-gangotri-yatra/", "/char-dham-yatra/by-helicopter/"] },
  { title: "Jammu & Kashmir", paths: ["/vaishno-devi-yatra/", "/vaishno-devi-yatra/with-amritsar/", "/amarnath-yatra/"] },
  { title: "Across India", paths: ["/jyotirlinga-yatra/", "/kashi-ayodhya-yatra/"] },
  { title: "Nepal and Tibet", paths: ["/pashupatinath-nepal-tour/", "/kailash-mansarovar-yatra/"] },
];

export default function Pilgrimages() {
  return (
    <div className="container-x pt-6">
      <Breadcrumbs trail={[{ name: "Pilgrimages", path: "/pilgrimages/" }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900 sm:text-5xl">All pilgrimages we plan</h1>
      <p className="mt-4 max-w-prose text-lg text-stone-700">
        We plan only pilgrimages. Start with the Himalayan Char Dham, or choose a sacred journey elsewhere in India, Nepal or Tibet.
      </p>
      {groups.map((g) => (
        <section key={g.title} className="mt-12">
          <h2 className="font-display text-2xl text-stone-900">{g.title}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.paths
              .map(pageByPath)
              .filter((p): p is LandingPage => !!p)
              .map((p) => (
                <PackageCard key={p.path} page={p} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
