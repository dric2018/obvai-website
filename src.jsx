import { ExtraPage } from "./extra.jsx";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Globe2,
  Code2,
  Users,
  Microscope,
  Handshake,
  CalendarDays,
  MapPin,
  Check,
  ChevronRight,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import "./style.css";
const content = {
  fr: {
    nav: [
      "À propos",
      "Nos piliers",
      "Projets",
      "Feuille de route",
      "Partenaires",
    ],
    join: "Rejoindre la communauté",
    eyebrow: "COMMUNAUTÉ IVOIRIENNE D'INTELLIGENCE ARTIFICIELLE",
    hero1: "L'intelligence artificielle,",
    hero2: "à l'Ivoirienne.",
    lead: "Une communauté de bâtisseurs, chercheurs et passionnés qui apprennent, expérimentent et créent ensemble une IA ouverte, utile et ancrée dans nos réalités.",
    explore: "Découvrir OBV",
    badge: "Ancrés en Côte d'Ivoire. Connectés au monde.",
    scroll: "DÉFILER POUR EXPLORER",
    missionLabel: "NOTRE RAISON D'ÊTRE",
    missionTitle: "Le talent est partout.",
    missionTitle2: "L'opportunité doit l'être aussi.",
    mission:
      "Nous rassemblons étudiants, praticiens, chercheurs et passionnés pour transformer les connaissances collectives en contributions concrètes à l'écosystème mondial de l'IA.",
    vision: "Notre vision",
    visionText:
      "Faire de la Côte d'Ivoire un contributeur reconnu à la recherche en IA appliquée et à l'innovation open source.",
    principles: "Ce qui nous guide",
    principlesList: [
      "Ouverture",
      "Collaboration",
      "Excellence technique",
      "Pertinence locale",
      "Indépendance",
      "IA responsable",
    ],
    pillarsLabel: "CE QUI NOUS ANIME",
    pillarsTitle: "Trois piliers.",
    pillarsSubtitle: "Une même ambition.",
    pillars: [
      [
        "01",
        "Communauté & apprentissage",
        "Grandir ensemble grâce aux rencontres, ateliers pratiques, mentorat et chapitres universitaires.",
      ],
      [
        "02",
        "Recherche & open source",
        "Construire des benchmarks, jeux de données, outils et travaux reproductibles qui servent à tous.",
      ],
      [
        "03",
        "Écosystème & visibilité",
        "Relier les talents ivoiriens aux universités, à la diaspora et aux communautés IA du monde.",
      ],
    ],
    projectsLabel: "DE L'IDÉE À L'IMPACT",
    projectsTitle: "Construire, pas seulement en parler.",
    projectsIntro:
      "Nos premières pistes de recherche privilégient les contributions ouvertes, documentées et réutilisables.",
    projectTag: "PROJET PHARE PROPOSÉ",
    projectTitle: "Évaluer l'IA dans nos langues et nos contextes.",
    projectText:
      "Une initiative envisagée pour comparer des modèles linguistiques sur le français ivoirien, les langues ivoiriennes et des tâches ancrées dans nos réalités.",
    deliverables: "Livrables envisagés",
    deliverableList: [
      "Jeu de données d'évaluation documenté",
      "Code d'évaluation reproductible",
      "Rapport de référence public",
    ],
    roadLabel: "NOTRE PREMIÈRE ANNÉE",
    roadTitle: "De l'élan aux résultats.",
    road: [
      [
        "Mois 1–2",
        "Poser les fondations",
        "Charte, équipe fondatrice, première rencontre et projet initial.",
      ],
      [
        "Mois 3–4",
        "Activer les équipes",
        "Dépôts publics, feuilles de route et sessions de recherche.",
      ],
      [
        "Mois 5–6",
        "Démontrer les progrès",
        "Premiers rapports techniques et atelier pratique.",
      ],
      [
        "Mois 7–9",
        "Élargir la communauté",
        "Universités, diaspora et nouvelles équipes projet.",
      ],
      [
        "Mois 10–12",
        "Partager les résultats",
        "Présentation annuelle et plan de deuxième année.",
      ],
    ],
    eventsLabel: "À L'HORIZON",
    eventsTitle: "Des rendez-vous pour avancer.",
    events: [
      [
        "2027",
        "Small AI Hackathon — chapitre CIV",
        "Abidjan · printemps / été 2027",
        "En discussion",
      ],
      [
        "2027",
        "Deep Learning Indaba",
        "Afrique du Sud · 2–7 août 2027",
        "Participation envisagée",
      ],
      [
        "2027",
        "Olympiades internationales de l'IA",
        "Singapour · 4–10 juillet 2027",
        "Soutien envisagé",
      ],
    ],
    partnersLabel: "GRANDIR ENSEMBLE",
    partnersTitle: "L'innovation est collective.",
    partnersText:
      "Universités, laboratoires, entreprises, télécoms, associations et diaspora : soutenez une recherche indépendante, ouverte et utile.",
    partnerTypes: [
      "Expertise & mentorat",
      "Ressources de calcul & données",
      "Équipement & connectivité",
      "Soutien financier & espace",
    ],
    partnerNote:
      "Nos partenaires soutiennent la mission sans contrôler les priorités de recherche.",
    ctaTitle: "La prochaine avancée",
    ctaTitle2: "commence avec nous.",
    ctaText:
      "Curieux, étudiant, ingénieur ou chercheur ? Aucune candidature formelle ni niveau technique minimum requis.",
    ctaButton: "Je veux participer",
    ctaNote:
      "La communauté prévoit WhatsApp comme canal principal. Le lien d'invitation sera ajouté à son ouverture.",
    footer:
      "Une communauté de bâtisseurs. Fièrement ivoirienne, résolument ouverte.",
    status: "En préparation",
    contact: "Contact",
    soon: "Lien communautaire à venir",
    copy: "© 2026 OBV. Fait avec ambition en Côte d'Ivoire.",
  },
  en: {
    nav: ["About", "Our pillars", "Projects", "Roadmap", "Partners"],
    join: "Join the community",
    eyebrow: "IVORIAN ARTIFICIAL INTELLIGENCE COMMUNITY",
    hero1: "Artificial intelligence,",
    hero2: "the Ivorian way.",
    lead: "A community of builders, researchers and curious minds learning, experimenting and creating open, useful AI grounded in our realities.",
    explore: "Discover OBV",
    badge: "Rooted in Côte d'Ivoire. Connected to the world.",
    scroll: "SCROLL TO EXPLORE",
    missionLabel: "WHY WE EXIST",
    missionTitle: "Talent is everywhere.",
    missionTitle2: "Opportunity should be too.",
    mission:
      "We bring together students, practitioners, researchers and AI enthusiasts to turn collective knowledge into meaningful contributions to the global AI ecosystem.",
    vision: "Our vision",
    visionText:
      "Establish Côte d'Ivoire as a recognized contributor to applied AI research and open-source innovation.",
    principles: "What guides us",
    principlesList: [
      "Openness",
      "Collaboration",
      "Technical excellence",
      "Local relevance",
      "Independence",
      "Responsible AI",
    ],
    pillarsLabel: "WHAT DRIVES US",
    pillarsTitle: "Three pillars.",
    pillarsSubtitle: "One shared ambition.",
    pillars: [
      [
        "01",
        "Community & learning",
        "Grow together through meetups, hands-on workshops, mentorship and university chapters.",
      ],
      [
        "02",
        "Research & open source",
        "Build benchmarks, datasets, tools and reproducible research that benefit everyone.",
      ],
      [
        "03",
        "Ecosystem & visibility",
        "Connect Ivorian talent with universities, the diaspora and AI communities worldwide.",
      ],
    ],
    projectsLabel: "FROM IDEAS TO IMPACT",
    projectsTitle: "Build it. Don't just talk about it.",
    projectsIntro:
      "Our early research directions prioritize open, documented and reusable contributions.",
    projectTag: "PROPOSED FLAGSHIP PROJECT",
    projectTitle: "Evaluating AI in our languages and contexts.",
    projectText:
      "A proposed initiative to benchmark language models on Ivorian French, Ivorian languages and locally relevant tasks.",
    deliverables: "Proposed outputs",
    deliverableList: [
      "Documented evaluation dataset",
      "Reproducible evaluation code",
      "Public baseline report",
    ],
    roadLabel: "OUR FIRST YEAR",
    roadTitle: "From momentum to results.",
    road: [
      [
        "Months 1–2",
        "Lay the foundations",
        "Charter, founding team, first meetup and initial project.",
      ],
      [
        "Months 3–4",
        "Activate technical teams",
        "Public repositories, project roadmaps and research sessions.",
      ],
      [
        "Months 5–6",
        "Show progress",
        "First technical reports and a hands-on workshop.",
      ],
      [
        "Months 7–9",
        "Expand participation",
        "Universities, diaspora and additional project teams.",
      ],
      [
        "Months 10–12",
        "Share the results",
        "Annual showcase and second-year plan.",
      ],
    ],
    eventsLabel: "ON THE HORIZON",
    eventsTitle: "Coming together to move forward.",
    events: [
      [
        "2027",
        "Small AI Hackathon — CIV chapter",
        "Abidjan · spring / summer 2027",
        "Under discussion",
      ],
      [
        "2027",
        "Deep Learning Indaba",
        "South Africa · August 2–7, 2027",
        "Participation proposed",
      ],
      [
        "2027",
        "International AI Olympiad",
        "Singapore · July 4–10, 2027",
        "Support proposed",
      ],
    ],
    partnersLabel: "GROWING TOGETHER",
    partnersTitle: "Innovation is collective.",
    partnersText:
      "Universities, research labs, companies, telecoms, nonprofits and the diaspora: support independent, open and impactful research.",
    partnerTypes: [
      "Expertise & mentorship",
      "Compute resources & data",
      "Equipment & connectivity",
      "Funding & shared space",
    ],
    partnerNote:
      "Partners support the mission without controlling research priorities.",
    ctaTitle: "The next breakthrough",
    ctaTitle2: "starts with us.",
    ctaText:
      "Curious, student, engineer or researcher? No formal application or minimum technical level required.",
    ctaButton: "I want to participate",
    ctaNote:
      "WhatsApp is the planned primary community channel. An invitation link will be added when available.",
    footer: "A community of builders. Proudly Ivorian, radically open.",
    status: "Coming soon",
    contact: "Contact",
    soon: "Community link coming soon",
    copy: "© 2026 OBV. Made with ambition in Côte d'Ivoire.",
  },
};
function App() {
  const [lang, setLang] = useState(localStorage.getItem("obv-lang") || "fr");
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState(false);
  const t = content[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("obv-lang", lang);
  }, [lang]);
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path !== "/" && path !== "/index.html")
    return <ExtraPage lang={lang} setLang={setLang} />;
  const navIds = ["about", "pillars", "projects", "roadmap", "partners"];
  const notify = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="OBV home">
          <img className="brand-logo" src="/obv-logo.png" alt="OBV logo" />
          <span className="brand-mark">
            OBV<span className="brand-dot">.</span>ai
          </span>
        </a>
        <nav
          className={menu ? "nav open" : "nav"}
          aria-label={
            lang === "fr" ? "Navigation principale" : "Main navigation"
          }
        >
          <div className="nav-dropdown">
            <a
              className="nav-dropdown-trigger"
              href="/about"
              onClick={() => setMenu(false)}
            >
              {lang === "fr" ? "À propos" : "About"} <ChevronDown size={14} />
            </a>
            <div className="nav-dropdown-menu">
              <a href="/about#story">
                {lang === "fr" ? "Notre histoire" : "Our story"}
              </a>
              <a href="/about#team">
                {lang === "fr" ? "Notre équipe" : "Our team"}
              </a>
              <a href="/about#vision">
                {lang === "fr" ? "Vision & valeurs" : "Vision & values"}
              </a>
              <a href="/about#pillars">
                {lang === "fr" ? "Nos piliers" : "Our pillars"}
              </a>
            </div>
          </div>
          <a href="/activities">{lang === "fr" ? "Activités" : "Activities"}</a>
          <div className="nav-dropdown">
            <a
              className="nav-dropdown-trigger"
              href="/olympiades/2027"
              onClick={() => setMenu(false)}
            >
              {lang === "fr" ? "Olympiades" : "Olympiad"}{" "}
              <ChevronDown size={14} />
            </a>
            <div className="nav-dropdown-menu">
              <a href="/olympiades/2027#overview">
                {lang === "fr" ? "La compétition" : "Competition overview"}
              </a>
              <a href="/olympiades/2027#selection">
                {lang === "fr" ? "Sélection nationale" : "National selection"}
              </a>
              <a href="/olympiades/2027#past">
                {lang === "fr" ? "Éditions précédentes" : "Past editions"}
              </a>
            </div>
          </div>
          <div className="nav-dropdown">
            <a
              className="nav-dropdown-trigger"
              href="/media"
              onClick={() => setMenu(false)}
            >
              {lang === "fr" ? "Médiathèque" : "Media"}{" "}
              <ChevronDown size={14} />
            </a>
            <div className="nav-dropdown-menu">
              <a href="/blog">
                {lang === "fr" ? "Blog & actualités" : "Blog & news"}
              </a>
              <a href="/media#gallery">
                {lang === "fr" ? "Galerie" : "Gallery"}
              </a>
              <a href="/media#resources">
                {lang === "fr" ? "Ressources" : "Resources"}
              </a>
            </div>
          </div>
          <a href="/partners">{lang === "fr" ? "Partenaires" : "Partners"}</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="head-actions">
          <button
            className="lang"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label="Switch language"
          >
            <Globe2 size={15} />
            <b className={lang === "fr" ? "active" : ""}>FR</b>
            <span>/</span>
            <b className={lang === "en" ? "active" : ""}>EN</b>
          </button>
          <button className="head-join" onClick={notify}>
            {t.join}
            <ArrowUpRight size={16} />
          </button>
          <button
            className="hamburger"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="live-dot" />
              {t.eyebrow}
            </div>
            <h1>
              {t.hero1}
              <br />
              <em>{t.hero2}</em>
            </h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-actions">
              <button className="btn btn-orange" onClick={notify}>
                {t.join}
                <ArrowUpRight size={18} />
              </button>
              <a className="btn btn-ghost" href="#about">
                {t.explore}
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-bottom">
              <span className="flag">
                <i />
                <i />
                <i />
              </span>
              {t.badge}
            </div>
          </div>
          {/* <div className="hero-art">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orb orange-orb" />
            <div className="orb green-orb" />
            <span className="art-label art-label-1">ABIDJAN · CI</span>
            <span className="art-label art-label-2">
              AI / OPEN SOURCE / RESEARCH
            </span>
            <div className="art-corner">
              225°<span> / FUTURE IN MOTION</span>
            </div>
          </div> */}

          <div className="hero-art hero-art-editorial">
            <div className="hero-image-frame">
              <img
                src="/obv-ai-civ.png"
                alt="Illustration of AI innovation in Côte d'Ivoire"
                className="hero-photo"
              />

              <div className="hero-image-overlay" />

              <div className="hero-image-badge">
                <span className="hero-badge-dot" />
                <span>
                  {lang === "fr"
                    ? "L'IA à l'Ivoirienne"
                    : "AI, the Ivorian way"}
                </span>
              </div>
            </div>

            <div className="hero-image-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <span className="scroll-indicator">{t.scroll} ↓</span>
        </section>
        <section className="section mission" id="about">
          <div className="section-top">
            <span className="section-kicker">01 / {t.missionLabel}</span>
            <span className="line" />
          </div>
          <div className="mission-grid">
            <div>
              <h2>
                {t.missionTitle}
                <br />
                <span className="orange-text">{t.missionTitle2}</span>
              </h2>
              <p className="big-copy">{t.mission}</p>
            </div>
            <div className="vision-card">
              {/* <div className="vision-symbol">✳</div> */}
              <h3>{t.vision}</h3>
              <p>{t.visionText}</p>
              <div className="vision-rule" />
              <h4>{t.principles}</h4>
              <div className="chips">
                {t.principlesList.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section pillars" id="pillars">
          <div className="section-top">
            <span className="section-kicker">02 / {t.pillarsLabel}</span>
            <span className="line" />
          </div>
          <div className="section-heading">
            <h2>
              {t.pillarsTitle}
              <br />
              <span>{t.pillarsSubtitle}</span>
            </h2>
            <p>OBV — COMMUNITY · RESEARCH · ECOSYSTEM</p>
          </div>
          <div className="pillar-grid">
            {t.pillars.map((p, i) => {
              let Icon = [Users, Code2, Handshake][i];
              return (
                <article className="pillar-card" key={i}>
                  <div className="pillar-head">
                    <span>{p[0]} / 03</span>
                    <Icon size={27} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>{p[1]}</h3>
                    <p>{p[2]}</p>
                  </div>
                  <ArrowUpRight className="pillar-arrow" size={22} />
                </article>
              );
            })}
          </div>
        </section>
        <section className="section projects" id="projects">
          <div className="section-top">
            <span className="section-kicker">03 / {t.projectsLabel}</span>
            <span className="line" />
          </div>
          <div className="section-heading">
            <h2>{t.projectsTitle}</h2>
            <p className="heading-copy">{t.projectsIntro}</p>
          </div>
          <div className="feature">
            <div className="feature-visual">
              <div className="code-card">
                <div className="code-head">
                  <span>● ● ●</span>obv / research / evaluation
                </div>
                <div className="code-body">
                  <div>
                    <span className="code-purple">from</span> obv{" "}
                    <span className="code-purple">import</span> community
                  </div>
                  <div className="code-space" />
                  <div>
                    <span className="code-green"># Build for our context</span>
                  </div>
                  <div>
                    languages = [<span className="code-orange">"fr-CI"</span>,{" "}
                    <span className="code-orange">"local"</span>]
                  </div>
                  <div>
                    research ={" "}
                    <span className="code-orange">"open_source"</span>
                  </div>
                  <div className="code-space" />
                  <div>
                    community.<span className="code-purple">build</span>
                    (together=<span className="code-orange">True</span>)
                  </div>
                  <div className="code-space" />
                  <div className="code-green">✓ Reproducible. Open. Local.</div>
                </div>
              </div>
              <div className="visual-ring" />
            </div>
            <div className="feature-copy">
              <span className="tag">{t.projectTag}</span>
              <h3>{t.projectTitle}</h3>
              <p>{t.projectText}</p>
              <h4>{t.deliverables}</h4>
              <ul>
                {t.deliverableList.map((x) => (
                  <li key={x}>
                    <Check size={17} />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="section roadmap" id="roadmap">
          <div className="section-top">
            <span className="section-kicker">04 / {t.roadLabel}</span>
            <span className="line" />
          </div>
          <h2>{t.roadTitle}</h2>
          <div className="road-list">
            {t.road.map((r, i) => (
              <div className="road-row" key={i}>
                <span className="road-number">0{i + 1}</span>
                <span className="road-time">{r[0]}</span>
                <h3>{r[1]}</h3>
                <p>{r[2]}</p>
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="section events">
          <div className="section-top">
            <span className="section-kicker">05 / {t.eventsLabel}</span>
            <span className="line" />
          </div>
          <h2>{t.eventsTitle}</h2>
          <div className="event-grid">
            {t.events.map((e, i) => (
              <article className="event-card" key={i}>
                <div className="event-top">
                  <CalendarDays size={20} />
                  <span>{e[0]}</span>
                </div>
                <h3>{e[1]}</h3>
                <p>
                  <MapPin size={15} />
                  {e[2]}
                </p>
                <span className="event-status">{e[3]}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="olym-home">
          <div>
            <span className="section-kicker">CÔTE D'IVOIRE / 2027</span>
            <h2>
              {lang === "fr"
                ? "Une équipe ivoirienne sur la scène mondiale."
                : "An Ivorian team on the world stage."}
            </h2>
            <p>
              {lang === "fr"
                ? "OBV souhaite soutenir la sélection nationale et la préparation des élèves aux côtés d'Alpha Space Robotics et des partenaires institutionnels. Initiative en cours de structuration."
                : "OBV aims to support national selection and student preparation alongside Alpha Space Robotics and institutional partners. Initiative in preparation."}
            </p>
            <a className="btn btn-orange" href="/olympiades/2027">
              {lang === "fr"
                ? "Découvrir les Olympiades"
                : "Explore the Olympiad"}{" "}
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="olym-symbol">2027</div>
        </section>
        <section className="section partners" id="partners">
          <div className="section-top">
            <span className="section-kicker">06 / {t.partnersLabel}</span>
            <span className="line" />
          </div>
          <div className="partners-grid">
            <div>
              <h2>{t.partnersTitle}</h2>
              <p className="big-copy">{t.partnersText}</p>
              <p className="partner-note">{t.partnerNote}</p>
            </div>
            <div className="partner-list">
              {t.partnerTypes.map((x, i) => (
                <div key={i}>
                  <span>0{i + 1}</span>
                  <h3>{x}</h3>
                  <ArrowUpRight size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="cta-glow" />
          <div className="cta-content">
            <span className="section-kicker">OBV / L'IA À L'IVOIRIENNE</span>
            <h2>
              {t.ctaTitle}
              <br />
              <em>{t.ctaTitle2}</em>
            </h2>
            <p>{t.ctaText}</p>
            <button className="btn btn-light" onClick={notify}>
              {t.ctaButton}
              <ArrowUpRight size={18} />
            </button>
            <small>{t.ctaNote}</small>
          </div>
          <span className="cta-watermark">OBV</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          {/* Brand and description */}
          <div className="footer-brand">
            <a href="/" className="footer-brand-link">
              <img
                src="/obv-logo.png"
                alt="OBV logo"
                className="footer-brand-logo"
              />
              <span className="footer-brand-name">
                OBV<span>.</span>ai
              </span>
            </a>

            <p>{t.footer}</p>
            <span className="footer-location">ABIDJAN, CÔTE D'IVOIRE</span>
          </div>

          {/* Main navigation */}
          <div className="footer-column">
            <h4>{lang === "fr" ? "Explorer" : "Explore"}</h4>
            <a href="/about">{lang === "fr" ? "À propos" : "About us"}</a>
            <a href="/activities">
              {lang === "fr" ? "Activités" : "Activities"}
            </a>
            <a href="/olympiades/2027">
              {lang === "fr" ? "Olympiades IA" : "AI Olympiad"}
            </a>
            <a href="/media">{lang === "fr" ? "Médiathèque" : "Media"}</a>
            <a href="/partners">{lang === "fr" ? "Partenaires" : "Partners"}</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Community activities */}
          <div className="footer-column">
            <h4>{lang === "fr" ? "Communauté" : "Community"}</h4>
            <a href="/activities#meetups">Meetups</a>
            <a href="/activities#hackathons">Hackathons</a>
            <a href="/activities#indabaX">IndabaX</a>
            <a href="/activities#paper-reading">
              {lang === "fr" ? "Lecture d'articles" : "Paper reading"}
            </a>
            <a href="/activities#workshops">Workshops</a>
          </div>

          {/* Newsletter and connection */}
          <div className="footer-column footer-connect">
            <h4>{lang === "fr" ? "Restons connectés" : "Stay connected"}</h4>

            <p>
              {lang === "fr"
                ? "Recevez chaque mois les actualités de l'IA en Côte d'Ivoire."
                : "Get monthly updates from the Ivorian AI ecosystem."}
            </p>

            <a className="footer-newsletter" href="/media#newsletter">
              OBV AI Pulse <ArrowUpRight size={15} />
            </a>

            <div className="footer-socials">
              {/* Add verified social links here when available */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.copy}</span>
          <span>FR / EN · OPEN SOURCE MINDSET</span>
        </div>
      </footer>

      {toast && (
        <div className="toast" role="status">
          <Check size={17} />
          {t.soon}
          <button onClick={() => setToast(false)} aria-label="Close">
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
