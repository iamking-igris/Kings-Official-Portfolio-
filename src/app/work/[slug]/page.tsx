import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

function Block({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-[var(--color-line)] py-12 md:grid-cols-12 md:py-16">
      <p className="kicker md:col-span-3">{kicker}</p>
      <div className="max-w-[42rem] space-y-4 text-body text-[var(--color-muted)] md:col-span-8 md:col-start-5">
        {children}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <>
      <main id="main">
        <article>
          <header className="page-wrap pb-12 pt-10 md:pb-16 md:pt-16">
            <p className="kicker">
              {project.number}
              <span className="mx-3 text-[var(--color-subtle)]">/</span>
              Selected work
            </p>
            <h1 className="headline mt-6">{project.title}</h1>
            <p className="mt-4 max-w-[42rem] text-body text-[var(--color-muted)]">
              {project.summary}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-8 md:grid-cols-4">
              {[
                ["Category", project.category],
                ["Year", project.year],
                ["Role", project.role],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div key={label as string}>
                  <dt className="kicker">{label}</dt>
                  <dd className="mt-3 text-sm md:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className="page-wrap">
            <div className="img-frame relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="project-visual"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div className="page-wrap mt-8 md:mt-12">
            <Block kicker="The idea">
              <p>{project.idea}</p>
            </Block>
            <Block kicker="The problem">
              <p>{project.problem}</p>
            </Block>
            <Block kicker="The approach">
              <p>{project.approach}</p>
            </Block>
            <Block kicker="My role">
              <p>{project.contribution}</p>
            </Block>
            <Block kicker="The build">
              <p>{project.build}</p>
              <ul className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[var(--color-line)] px-3 py-1 text-sm text-[var(--color-ink)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Block>
            {project.engineering ? (
              <Block kicker="Engineering">
                <p>{project.engineering}</p>
              </Block>
            ) : null}
            {project.product ? (
              <Block kicker="Product">
                <p>{project.product}</p>
              </Block>
            ) : null}
            <Block kicker="Details">
              <p>{project.details}</p>
            </Block>
            <Block kicker="Status">
              <p>{project.status}.</p>
            </Block>
            <Block kicker="Links">
              {project.liveUrl || project.githubUrl ? (
                <ul className="space-y-3 text-[var(--color-ink)]">
                  {project.liveUrl ? (
                    <li>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="cta-link"
                      >
                        {project.status === "IN DEVELOPMENT"
                          ? "View project"
                          : "Visit live site"} <span className="arrow">→</span>
                      </a>
                    </li>
                  ) : null}
                  {project.githubUrl ? (
                    <li>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="cta-link"
                      >
                        GitHub <span className="arrow">→</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p>
                  {project.status === "IN DEVELOPMENT"
                    ? "This project is still actively being developed and is not yet presented as a launched production product."
                    : "Public links will appear here when the work is available to share."}
                </p>
              )}
            </Block>
          </div>
        </article>

        <section className="border-t border-[var(--color-line)]">
          <Link
            href={`/work/${next.slug}`}
            className="group page-wrap section-y flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="kicker">Next project</p>
              <p className="headline mt-4">{next.title}</p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                {next.number} · {next.category}
              </p>
            </div>
            <span className="cta-link">
              Continue
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
