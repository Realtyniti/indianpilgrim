import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-20 text-center">
      <h1 className="font-display text-4xl text-stone-900">Page not found</h1>
      <p className="mt-4 text-stone-700">This page has moved or never existed. These are the yatras most pilgrims look for:</p>
      <p className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/char-dham-yatra/" className="btn btn-primary">Char Dham Yatra</Link>
        <Link href="/do-dham-yatra/" className="btn btn-outline">Do Dham Yatra</Link>
        <Link href="/vaishno-devi-yatra/" className="btn btn-outline">Vaishno Devi Yatra</Link>
      </p>
    </div>
  );
}
