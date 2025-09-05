import { notFound } from "next/navigation";
import { CVView } from "@/components/CvView";
import { type CVSlug, cvs } from "@/data";

type Props = {
  params: { slug: string };
};

export default async function CVPage({ params }: Props) {
  const slug = (await params).slug;
  const cv = cvs[slug as CVSlug];

  if (!cv) return notFound();

  return <CVView {...cv} />;
}

export function generateStaticParams() {
  return Object.keys(cvs).map((slug) => ({ slug }));
}
