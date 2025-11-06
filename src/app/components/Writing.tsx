import Link from "next/link";

export interface Article {
  date: string;
  title: string;
  description: string;
  slug: string;
}

interface WritingProps {
  articles?: Article[];
}

const defaultArticles: Article[] = [
  {
    date: "Nov 5, 2025",
    title: "Optical Alignment",
    description:
      "Discover the tiny visual adjustments that make your designs look professional. Learn how optical alignment transforms your UI from good to exceptional.",
    slug: "blog/optical-alignment",
  },
];

export function Writing({ articles = defaultArticles }: WritingProps) {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">writing</h1>

      <div className="space-y-6 max-w-2xl">
        {articles.map((article) => (
          <article key={article.slug} className="group">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-[var(--muted-foreground)] rounded-full" />
                  <time className="text-sm text-[var(--muted-foreground)]">
                    {article.date}
                  </time>
                </div>
              </div>
            </div>

            <div className="mt-3 ml-7">
              <Link href={`/${article.slug}`}>
                <h3 className="text-base font-medium text-[var(--foreground)] hover:opacity-80 transition-opacity cursor-pointer mb-2">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {article.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
