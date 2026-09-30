import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FundingCard, ProjectCard } from "@/components/project-card";
import { Page, SectionHeader } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { StatsRow } from "@/components/stats-row";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/copy";
import { projects, services } from "@/lib/data";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const t = useT();
  const lang = useLang((s) => s.lang);
  const Arrow = lang === "fa" ? ArrowLeft : ArrowRight;
  const featured = projects.filter((p) => p.featured);
  const funded = projects.filter((p) => p.funding).slice(0, 2);

  return (
    <>
      <section className="relative">
        <Page className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-20">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Founder & venture studio
            </p>
            <h1 className="font-display text-6xl font-medium tracking-tight text-fg sm:text-7xl md:text-8xl">
              PARVAZ
            </h1>
            <p className="mt-5 max-w-xl text-lg text-accent sm:text-xl">{t.hero.tagline}</p>
            <p className="mt-4 max-w-xl text-base text-muted">{t.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/projects">{t.hero.ctaProjects}</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/invest">{t.hero.ctaInvest}</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/contact">{t.hero.ctaWork}</Link>
              </Button>
            </div>
          </Reveal>
        </Page>
      </section>

      <section className="pb-20">
        <Page>
          <Reveal>
            <StatsRow />
          </Reveal>
        </Page>
      </section>

      <section className="py-16 md:py-24">
        <Page>
          <Reveal>
            <SectionHeader
              eyebrow={t.home.buildingEyebrow}
              title={t.home.buildingTitle}
              body={t.home.buildingBody}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link to="/projects">
                {t.home.allProjects}
                <Arrow className="size-4" />
              </Link>
            </Button>
          </div>
        </Page>
      </section>

      <section className="py-16 md:py-24">
        <Page>
          <Reveal>
            <SectionHeader
              eyebrow={t.home.investEyebrow}
              title={t.home.investTitle}
              body={t.home.investBody}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {funded.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <FundingCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link to="/invest">
                {t.home.investAll}
                <Arrow className="size-4" />
              </Link>
            </Button>
          </div>
        </Page>
      </section>

      <section className="py-16 md:py-24">
        <Page>
          <Reveal>
            <SectionHeader
              eyebrow={t.home.advisoryEyebrow}
              title={t.home.advisoryTitle}
              body={t.home.advisoryBody}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link to="/advisory">
                {t.home.advisoryAll}
                <Arrow className="size-4" />
              </Link>
            </Button>
          </div>
        </Page>
      </section>

      <section className="py-16 md:py-24">
        <Page>
          <Reveal>
            <div className="max-w-3xl border-s-2 border-accent/40 ps-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {t.home.founderEyebrow}
              </p>
              <blockquote className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
                {t.home.founderQuote}
              </blockquote>
              <Button asChild variant="secondary" className="mt-8">
                <Link to="/founder">
                  {t.home.founderCta}
                  <Arrow className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Page>
      </section>

      <section className="pb-24 pt-8">
        <Page>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-surface p-8 shadow-[var(--shadow-border)] md:flex-row md:items-center md:p-10">
              <div className="max-w-xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {t.home.contactEyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
                  {t.home.contactTitle}
                </h2>
                <p className="mt-3 text-sm text-muted">{t.home.contactBody}</p>
              </div>
              <Button asChild>
                <Link to="/contact">
                  {t.home.contactCta}
                  <Arrow className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Page>
      </section>
    </>
  );
}
