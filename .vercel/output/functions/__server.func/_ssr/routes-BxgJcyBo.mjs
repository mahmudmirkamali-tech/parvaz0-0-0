import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useLang, n as SectionHeader, o as useT, t as Page } from "./page-DtfH3Xlt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B4a7cLGx.mjs";
import { c as stats, o as projects, s as services, t as Reveal, u as tx } from "./data-8yAfoa2l.mjs";
import { t as ServiceCard } from "./service-card-Cw5wkvdN.mjs";
import { n as ProjectCard, t as FundingCard } from "./project-card-CCIJVZjU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BxgJcyBo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCount(target, active) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setN(target);
			return;
		}
		let start = null;
		const dur = 700;
		let raf = 0;
		const tick = (t) => {
			if (start === null) start = t;
			const p = Math.min(1, (t - start) / dur);
			setN(Math.round(target * (1 - (1 - p) ** 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, active]);
	return n;
}
function Stat({ value, label }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	const n = useCount(value, on);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "rounded-2xl bg-surface px-5 py-8 text-center shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-4xl font-medium tabular-nums tracking-tight text-fg",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xs uppercase tracking-[0.12em] text-subtle",
			children: label
		})]
	});
}
function StatsRow() {
	const lang = useLang((s) => s.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
		children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
			value: s.value,
			label: tx(lang, s.label)
		}, s.value + tx(lang, s.label)))
	});
}
function Home() {
	const t = useT();
	const Arrow = useLang((s) => s.lang) === "fa" ? ArrowLeft : ArrowRight;
	const featured = projects.filter((p) => p.featured);
	const funded = projects.filter((p) => p.funding).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
				className: "relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-xs font-medium uppercase tracking-[0.22em] text-accent",
						children: "Founder & venture studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-6xl font-medium tracking-tight text-fg sm:text-7xl md:text-8xl",
						children: "PARVAZ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-accent sm:text-xl",
						children: t.hero.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-muted",
						children: t.hero.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									children: t.hero.ctaProjects
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/invest",
									children: t.hero.ctaInvest
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: t.hero.ctaWork
								})
							})
						]
					})
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, {}) }) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.buildingEyebrow,
					title: t.home.buildingTitle,
					body: t.home.buildingBody
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p })
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							children: [t.home.allProjects, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
						})
					})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.investEyebrow,
					title: t.home.investTitle,
					body: t.home.investBody
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: funded.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FundingCard, { project: p })
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/invest",
							children: [t.home.investAll, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
						})
					})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.advisoryEyebrow,
					title: t.home.advisoryTitle,
					body: t.home.advisoryBody
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: services.slice(0, 3).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service: s })
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/advisory",
							children: [t.home.advisoryAll, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
						})
					})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl border-s-2 border-accent/40 ps-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-accent",
						children: t.home.founderEyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl",
						children: t.home.founderQuote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/founder",
							children: [t.home.founderCta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
						})
					})
				]
			}) }) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24 pt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 rounded-2xl bg-surface p-8 shadow-[var(--shadow-border)] md:flex-row md:items-center md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-accent",
							children: t.home.contactEyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium tracking-tight",
							children: t.home.contactTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: t.home.contactBody
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: [t.home.contactCta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
					})
				})]
			}) }) })
		})
	] });
}
//#endregion
export { Home as component };
