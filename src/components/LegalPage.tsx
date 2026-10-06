import { Breadcrumbs } from "./Breadcrumbs";

export function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return (
    <div className="container-x max-w-3xl pt-6">
      <Breadcrumbs trail={[{ name: title, path }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900">{title}</h1>
      <div className="prose-section mt-6">{children}</div>
    </div>
  );
}
