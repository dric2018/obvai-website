import React from "react";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Globe2,
  Mail,
  Trophy,
  Users,
  HeartHandshake,
} from "lucide-react";
import { posts } from "./blog-data.js";

const words = {
  fr: {
    home: "Accueil",
    about: "À propos",
    activities: "Activités",
    olymp: "Olympiades",
    media: "Médiathèque",
    partners: "Partenaires",
    contact: "Contact",
    blog: "Blog & actualités",
    story: "Notre histoire",
    team: "Notre équipe",
    vision: "Vision & valeurs",
    pillars: "Nos piliers",
    overview: "La compétition",
    selection: "Sélection nationale",
    past: "Éditions précédentes",
    back: "Retour à l’accueil",
    coming: "Contenu en préparation",
    noPosts:
      "Les articles de la communauté seront publiés ici après validation.",
    read: "Lire l’article",
    all: "Tous les articles",
  },
  en: {
    home: "Home",
    about: "About",
    activities: "Activities",
    olymp: "Olympiad",
    media: "Media",
    partners: "Partners",
    contact: "Contact",
    blog: "Blog & news",
    story: "Our story",
    team: "Our team",
    vision: "Vision & values",
    pillars: "Our pillars",
    overview: "Competition overview",
    selection: "National selection",
    past: "Past editions",
    back: "Back to home",
    coming: "Content in preparation",
    noPosts: "Community articles will appear here after review.",
    read: "Read article",
    all: "All articles",
  },
};
const dropdowns = (t) => [
  {
    label: t.about,
    url: "/about",
    items: [
      [t.story, "/about#story"],
      [t.team, "/about#team"],
      [t.vision, "/about#vision"],
      [t.pillars, "/about#pillars"],
    ],
  },
  {
    label: t.olym,
    url: "/olympiades/2027",
    items: [
      [t.overview, "/olympiades/2027#overview"],
      [t.selection, "/olympiades/2027#selection"],
      [t.past, "/olympiades/2027#past"],
    ],
  },
  {
    label: t.media,
    url: "/media",
    items: [
      [t.blog, "/blog"],
      [
        t.home === "Accueil" ? "Vidéos & replays" : "Videos & recordings",
        "/media#recordings",
      ],
      [
        t.home === "Accueil" ? "Galerie photos" : "Photo gallery",
        "/media#gallery",
      ],
      [t.home === "Accueil" ? "Ressources" : "Resources", "/media#resources"],
    ],
  },
];

const CONTACT = {
  email: "hello@obvci.ai", // e.g. official community email
  phoneDisplay: "",
  phoneInternational: "2250102030405", // digits only, e.g. 225XXXXXXXXXX
  whatsappNumber: "2250102030405", // digits only, no + sign
  whatsappGroup: "",
  communityGroups: [
    // { name: "General community", url: "https://..." },
    // { name: "Research group", url: "https://..." },
  ],
  socials: [
    // { name: "LinkedIn", url: "https://..." },
    // { name: "GitHub", url: "https://..." },
    // { name: "YouTube", url: "https://..." },
  ],
};

function SiteHeader({ lang, setLang, t }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="header inner-header">
      <a className="brand" href="/">
        <img className="brand-logo" src="/obv-logo.png" alt="" />
        <span className="brand-mark">
          OBV<span className="brand-dot">.</span>ai
        </span>
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {dropdowns(t)
          .slice(0, 1)
          .map((d) => (
            <div className="nav-dropdown" key={d.url}>
              <a href={d.url} className="nav-dropdown-trigger">
                {d.label}
                <ChevronDown size={14} />
              </a>
              <div className="nav-dropdown-menu">
                {d.items.map(([name, url]) => (
                  <a key={url} href={url}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        <a href="/activities">{t.activities}</a>
        {dropdowns(t)
          .slice(1)
          .map((d) => (
            <div className="nav-dropdown" key={d.url}>
              <a href={d.url} className="nav-dropdown-trigger">
                {d.label}
                <ChevronDown size={14} />
              </a>
              <div className="nav-dropdown-menu">
                {d.items.map(([name, url]) => (
                  <a key={url} href={url}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        <a href="/partners">{t.partners}</a>
        <a href="/contact">{t.contact}</a>
      </nav>
      <div className="head-actions">
        <button
          className="lang"
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        >
          <Globe2 size={15} />
          {lang.toUpperCase()} / {lang === "fr" ? "EN" : "FR"}
        </button>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="page-section">
      <div className="section-top">
        <span className="section-kicker">{kicker}</span>
        <span className="line" />
      </div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function About({ lang, t }) {
  let fr = lang === "fr";
  return (
    <>
      <div className="page-hero">
        <span className="section-kicker">OBV / {t.about}</span>
        <h1>
          {fr
            ? "L’IA à l’Ivoirienne. Ensemble."
            : "AI the Ivorian way. Together."}
        </h1>
        <p>
          {fr
            ? "Découvrez la communauté, les personnes qui la construisent et notre ambition pour une intelligence artificielle ouverte et utile."
            : "Meet the community, the people building it and our ambition for open, useful artificial intelligence."}
        </p>
      </div>
      <Section id="story" kicker="01 / OBV" title={t.story}>
        <p className="page-copy">
          {fr
            ? "OBV est une communauté ivoirienne de passionnés, de chercheurs, d’étudiants et de bâtisseurs en intelligence artificielle. Nous voulons apprendre ensemble, expérimenter et produire des contributions ouvertes, ancrées dans les réalités locales."
            : "OBV is an Ivorian community of AI learners, researchers, students and builders. We want to learn together, experiment and produce open contributions grounded in local realities."}
        </p>
        <p className="page-muted">
          {fr
            ? "Une chronologie détaillée de la fondation sera ajoutée après validation par l’équipe."
            : "A detailed founding timeline will be added once the team has approved it."}
        </p>
      </Section>
      <Section id="team" kicker="02 / PEOPLE" title={t.team}>
        <p className="page-copy">
          {fr
            ? "Les membres fondateurs et l’équipe de coordination seront présentés ici dès que leurs biographies et photos auront été approuvées."
            : "Founders and current coordinators will appear here once their biographies and photos have been approved."}
        </p>
        <div className="team-grid">
          {[
            fr ? "Équipe fondatrice" : "Founding team",
            fr ? "Coordination" : "Leadership",
            fr ? "Contributeurs" : "Contributors",
          ].map((role, i) => (
            <article className="team-card" key={role}>
              <div className="team-avatar">
                <Users size={42} />
              </div>
              <div className="team-details">
                <span className="section-kicker">0{i + 1}</span>
                <h3>{role}</h3>
                <p>
                  {fr
                    ? "Portrait, nom et courte biographie à venir."
                    : "Portrait, name and short biography coming soon."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="vision" kicker="03 / PURPOSE" title={t.vision}>
        <div className="two-col">
          <div>
            <h3>{fr ? "Notre vision" : "Our vision"}</h3>
            <p>
              {fr
                ? "Faire de la Côte d’Ivoire un contributeur reconnu à la recherche en IA appliquée et à l’innovation open source."
                : "Establish Côte d’Ivoire as a recognized contributor to applied AI research and open-source innovation."}
            </p>
          </div>
          <div>
            <h3>{fr ? "Ce qui nous guide" : "What guides us"}</h3>
            <div className="chips">
              {(fr
                ? [
                    "Ouverture",
                    "Collaboration",
                    "Excellence technique",
                    "Pertinence locale",
                    "Indépendance",
                    "IA responsable",
                  ]
                : [
                    "Openness",
                    "Collaboration",
                    "Technical excellence",
                    "Local relevance",
                    "Independence",
                    "Responsible AI",
                  ]
              ).map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section id="pillars" kicker="04 / ACTION" title={t.pillars}>
        <div className="page-cards">
          {(fr
            ? [
                [
                  "Communauté & apprentissage",
                  "Rencontres, ateliers et mentorat.",
                ],
                [
                  "Recherche & open source",
                  "Données, outils et travaux reproductibles.",
                ],
                [
                  "Écosystème & visibilité",
                  "Liens entre talents, universités et diaspora.",
                ],
              ]
            : [
                ["Community & learning", "Meetups, workshops and mentoring."],
                [
                  "Research & open source",
                  "Datasets, tools and reproducible research.",
                ],
                [
                  "Ecosystem & visibility",
                  "Connecting talent, universities and the diaspora.",
                ],
              ]
          ).map(([name, desc], i) => (
            <article className="page-card" key={name}>
              <span className="section-kicker">0{i + 1}</span>
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
function Olympiad({ lang, t }) {
  let fr = lang === "fr";
  const stages = fr
    ? [
        [
          "Nov. 2026",
          "Ignite",
          "Sensibilisation et ouverture envisagée des inscriptions",
        ],
        [
          "Déc. 2026",
          "Orient",
          "QCM de logique, mathématiques et algorithmique",
        ],
        [
          "Jan.–fév. 2027",
          "Advance",
          "Épreuves pratiques Python et analyse de données",
        ],
        ["Mars 2027", "Immerse", "Finale nationale et immersion"],
        [
          "Avr.–juin 2027",
          "Préparation",
          "Mentorat technique et préparation en anglais",
        ],
        [
          "Juil. 2027",
          "International",
          "Participation internationale visée, sous réserve de confirmation",
        ],
      ]
    : [
        ["Nov 2026", "Ignite", "Outreach and proposed registration launch"],
        ["Dec 2026", "Orient", "Logic, mathematics and algorithmic reasoning"],
        ["Jan–Feb 2027", "Advance", "Python and data analysis challenges"],
        ["Mar 2027", "Immerse", "National final and immersion"],
        [
          "Apr–Jun 2027",
          "Preparation",
          "Technical mentoring and English preparation",
        ],
        [
          "Jul 2027",
          "International",
          "Target international participation, subject to confirmation",
        ],
      ];
  return (
    <>
      <div className="page-hero">
        <span className="section-kicker">CÔTE D'IVOIRE / 2027</span>
        <h1>
          {fr
            ? "Olympiades d’intelligence artificielle"
            : "Artificial Intelligence Olympiad"}
        </h1>
        <p>
          {fr
            ? "Accompagner les talents ivoiriens vers la compétition internationale."
            : "Supporting Ivorian talent on the path to international competition."}
        </p>
        <div className="page-notice">
          {fr
            ? "Le calendrier et les modalités nationales ci-dessous sont des propositions en cours de structuration, et non des inscriptions officielles."
            : "The national timeline and selection process below are proposals in development, not official registration information."}
        </div>
      </div>
      <Section id="overview" kicker="01 / IOAI" title={t.overview}>
        <p className="page-copy">
          {fr
            ? "L’International Olympiad in Artificial Intelligence (IOAI) est une compétition internationale destinée aux élèves du secondaire, centrée sur les connaissances et les compétences pratiques en IA. Les règles, l’éligibilité et le calendrier officiels sont définis par les organisateurs."
            : "The International Olympiad in Artificial Intelligence (IOAI) is an international competition for secondary-school students, focusing on AI knowledge and practical skills. Official rules, eligibility and schedules are determined by the organizers."}
        </p>
        <a
          className="text-link"
          href="https://ioai-official.org/"
          target="_blank"
          rel="noreferrer"
        >
          {fr
            ? "Consulter le site officiel de l’IOAI ↗"
            : "Visit the official IOAI website ↗"}
        </a>
      </Section>
      <Section id="selection" kicker="02 / ROADMAP" title={t.selection}>
        <p className="page-copy">
          {fr
            ? "OBV envisage de soutenir la sélection et la préparation aux côtés d’Alpha Space Robotics et de partenaires institutionnels. Les responsabilités et étapes devront être confirmées."
            : "OBV aims to support selection and preparation alongside Alpha Space Robotics and institutional partners. Responsibilities and stages remain subject to confirmation."}
        </p>
        <div className="stages">
          {stages.map(([date, name, description]) => (
            <article key={name}>
              <span className="stage-date">{date}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="past" kicker="03 / HISTORY" title={t.past}>
        <p className="page-copy">
          {fr
            ? "L’IOAI a tenu sa première édition en 2024 à Burgas, en Bulgarie. Retrouvez les archives et les résultats des éditions précédentes auprès de l’organisation officielle."
            : "The inaugural IOAI took place in Burgas, Bulgaria, in 2024. Previous editions, results and archives are available through the official organization."}
        </p>
        <a
          className="text-link"
          href="https://ioai-official.org/"
          target="_blank"
          rel="noreferrer"
        >
          {fr
            ? "Archives et éditions officielles ↗"
            : "Official editions and archives ↗"}
        </a>
      </Section>
    </>
  );
}
function Blog({ lang, t, path }) {
  const filtered = posts.filter((p) => p.lang === lang);
  const slug = path.startsWith("/blog/")
    ? decodeURIComponent(path.slice(6))
    : null;
  const article = slug ? filtered.find((p) => p.slug === slug) : null;
  if (slug && !article)
    return (
      <div className="page-hero">
        <h1>404</h1>
        <p>{t.coming}</p>
        <a className="text-link" href="/blog">
          {t.all} →
        </a>
      </div>
    );
  if (article)
    return (
      <article className="blog-article">
        <a className="backlink" href="/blog">
          <ArrowLeft size={16} />
          {t.all}
        </a>
        <span className="section-kicker">
          {article.date} · {article.author}
        </span>
        <h1>{article.title}</h1>
        <p className="sublead">{article.summary}</p>
        {article.cover && (
          <img className="article-cover" src={article.cover} alt="" />
        )}
        <div className="markdown-body">
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      </article>
    );
  return (
    <>
      <div className="page-hero">
        <span className="section-kicker">OBV / MEDIA</span>
        <h1>{t.blog}</h1>
        <p>
          {lang === "fr"
            ? "Articles, analyses et ressources de la communauté."
            : "Community news, analysis and resources."}
        </p>
      </div>
      <section className="page-section">
        <div className="post-grid">
          {filtered.length ? (
            filtered.map((post) => (
              <a
                className="post-card"
                href={"/blog/" + encodeURIComponent(post.slug)}
                key={post.slug}
              >
                {post.cover && <img src={post.cover} alt="" />}
                <div>
                  <span className="section-kicker">
                    {post.date} · {post.author}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <span className="text-link">{t.read} →</span>
                </div>
              </a>
            ))
          ) : (
            <div className="page-card">
              <BookOpen size={32} />
              <h3>{t.coming}</h3>
              <p>{t.noPosts}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
function SimplePage({ path, lang, t }) {
  const fr = lang === "fr";

  if (path === "/activities") {
    const activities = [
      {
        name: "Meetups",
        fr: "Rencontres communautaires",
        descFr:
          "Rencontres pour échanger, partager des expériences et créer des collaborations.",
        descEn:
          "Community gatherings to exchange ideas, share experiences and build collaborations.",
      },
      {
        name: "Hackathons",
        fr: "Hackathons",
        descFr:
          "Défis collaboratifs pour concevoir des solutions IA concrètes.",
        descEn: "Collaborative challenges to build practical AI solutions.",
      },
      {
        name: "IndabaX",
        fr: "IndabaX",
        descFr:
          "Initiatives locales d'apprentissage et de partage autour de la recherche en IA.",
        descEn:
          "Local learning and knowledge-sharing initiatives focused on AI research.",
      },
      {
        name: "Paper Reading",
        fr: "Lecture d'articles scientifiques",
        descFr:
          "Sessions collectives pour comprendre et discuter des publications scientifiques.",
        descEn: "Group sessions to understand and discuss research papers.",
      },
      {
        name: "Workshops",
        fr: "Ateliers pratiques",
        descFr:
          "Formations pratiques sur les outils, méthodes et applications de l'IA.",
        descEn: "Hands-on sessions on AI tools, methods and applications.",
      },
    ];

    return (
      <>
        <div className="page-hero">
          <span className="section-kicker">OBV / COMMUNITY</span>
          <h1>{t.activities}</h1>
          <p>
            {fr
              ? "Apprendre, expérimenter et construire ensemble."
              : "Learn, experiment and build together."}
          </p>
        </div>

        <Section
          id="activities"
          kicker="01 / COMMUNITY"
          title={fr ? "Nos activités" : "What we do"}
        >
          <div className="page-cards">
            {activities.map((item, i) => (
              <article className="page-card" key={item.name}>
                <span className="section-kicker">0{i + 1}</span>
                <h3>{fr ? item.fr : item.name}</h3>
                <p>{fr ? item.descFr : item.descEn}</p>
              </article>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (path === "/media") {
    return (
      <>
        <div className="page-hero">
          <span className="section-kicker">OBV / MEDIA</span>
          <h1>{t.media}</h1>
          <p>
            {fr
              ? "Retrouvez les contenus et ressources de la communauté."
              : "Explore content and resources from our community."}
          </p>
        </div>

        <Section id="news" kicker="01 / BLOG" title={t.blog}>
          <p className="page-copy">
            {fr
              ? "Actualités, analyses et contributions de nos membres."
              : "News, insights and contributions from our members."}
          </p>
          <a className="text-link" href="/blog">
            {fr ? "Explorer les articles →" : "Explore articles →"}
          </a>
        </Section>

        <Section
          id="recordings"
          kicker="02 / VIDEOS"
          title={fr ? "Vidéos & replays" : "Videos & recordings"}
        >
          <p className="page-copy">
            {fr
              ? "Enregistrements de meetups, conférences, présentations et ateliers."
              : "Recordings of meetups, talks, presentations and workshops."}
          </p>

          <div className="page-cards">
            <article className="page-card">
              <h3>{fr ? "Replays des meetups" : "Meetup recordings"}</h3>
              <p>{t.coming}</p>
            </article>
            <article className="page-card">
              <h3>
                {fr ? "Conférences & présentations" : "Talks & presentations"}
              </h3>
              <p>{t.coming}</p>
            </article>
          </div>
        </Section>

        <Section
          id="gallery"
          kicker="03 / GALLERY"
          title={fr ? "Galerie photos" : "Photo gallery"}
        >
          <p className="page-muted">{t.coming}</p>
        </Section>

        <Section
          id="resources"
          kicker="04 / RESOURCES"
          title={fr ? "Ressources" : "Resources"}
        >
          <p className="page-muted">{t.coming}</p>
        </Section>
      </>
    );
  }

  if (path === "/partners") {
    const partners = [
      {
        name: "Ministry of Digital Transition and Technological Innovation",
        nameFr:
          "Ministère de la Transition numérique et de l'Innovation technologique",
        type: "Institution",
      },
      {
        name: "Souba.ai",
        nameFr: "Souba.ai",
        type: "AI Ecosystem",
      },
      {
        name: "Dipr AI",
        nameFr: "Dipr AI",
        type: "AI Ecosystem",
      },
    ];

    return (
      <>
        <div className="page-hero">
          <span className="section-kicker">OBV / ECOSYSTEM</span>
          <h1>{t.partners}</h1>
          <p>
            {fr
              ? "Construire un écosystème d'intelligence artificielle fort et collaboratif."
              : "Building a strong and collaborative AI ecosystem."}
          </p>
        </div>

        <Section
          id="partners"
          kicker="01 / ECOSYSTEM"
          title={fr ? "Organisations partenaires" : "Partner organizations"}
        >
          <p className="page-muted">
            {fr
              ? "Organisations envisagées pour des collaborations. Les partenariats officiels restent à confirmer."
              : "Organizations identified for potential collaboration. Formal partnerships remain to be confirmed."}
          </p>

          <div className="page-cards">
            {partners.map((partner) => (
              <article className="page-card" key={partner.name}>
                <HeartHandshake size={26} />
                <h3>{fr ? partner.nameFr : partner.name}</h3>
                <p>{partner.type}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="collaborate"
          kicker="02 / COLLABORATE"
          title={fr ? "Devenir partenaire" : "Become a partner"}
        >
          <p className="page-copy">
            {fr
              ? "Vous souhaitez soutenir nos initiatives, nos événements ou nos projets de recherche ?"
              : "Interested in supporting our initiatives, events or research projects?"}
          </p>
          <a className="text-link" href="/contact">
            {fr ? "Contactez-nous →" : "Get in touch →"}
          </a>
        </Section>

        <Section
          id="why-partner"
          kicker="02 / WHY PARTNER WITH US"
          title={fr ? "Pourquoi devenir partenaire ?" : "Why partner with OBV?"}
        >
          <div className="page-cards">
            {[
              {
                title: fr ? "Soutenir les talents" : "Support local talent",
                desc: fr
                  ? "Contribuer au développement des compétences et à l'émergence de nouveaux talents en intelligence artificielle."
                  : "Help develop AI skills and support the next generation of local talent.",
              },
              {
                title: fr
                  ? "Accéder à un écosystème dynamique"
                  : "Connect with the ecosystem",
                desc: fr
                  ? "Échanger avec des étudiants, chercheurs, ingénieurs et entrepreneurs passionnés par l'IA."
                  : "Engage with students, researchers, engineers and entrepreneurs working in AI.",
              },
              {
                title: fr
                  ? "Encourager la recherche ouverte"
                  : "Advance open research",
                desc: fr
                  ? "Soutenir des projets, outils et ressources ouverts répondant aux besoins locaux."
                  : "Support open projects, tools and resources addressing local challenges.",
              },
              {
                title: fr
                  ? "Contribuer à un impact durable"
                  : "Create lasting impact",
                desc: fr
                  ? "Participer à la construction d'un écosystème ivoirien d'IA plus inclusif et compétitif."
                  : "Help build a more inclusive and competitive Ivorian AI ecosystem.",
              },
            ].map((item) => (
              <article className="page-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="recognition"
          kicker="03 / PARTNER RECOGNITION"
          title={
            fr
              ? "Comment nous valorisons nos partenaires"
              : "How we recognize our partners"
          }
        >
          <p className="page-copy">
            {fr
              ? "Nous souhaitons construire des partenariats visibles, transparents et mutuellement bénéfiques."
              : "We aim to build visible, transparent and mutually beneficial partnerships."}
          </p>

          <div className="page-cards">
            {[
              {
                title: fr ? "Visibilité sur notre site" : "Website recognition",
                desc: fr
                  ? "Présentation des partenaires, de leur contribution et de leur logo avec leur accord."
                  : "Partner profiles, contributions and logos displayed with their permission.",
              },
              {
                title: fr
                  ? "Communication sur les réseaux"
                  : "Social media visibility",
                desc: fr
                  ? "Mentions et publications lors d'annonces de partenariats ou d'initiatives soutenues."
                  : "Announcements and mentions for partnerships and supported initiatives.",
              },
              {
                title: fr
                  ? "Présence lors des événements"
                  : "Event recognition",
                desc: fr
                  ? "Remerciements et visibilité adaptés au rôle du partenaire lors des activités concernées."
                  : "Acknowledgment and visibility aligned with the partner's role at relevant events.",
              },
              {
                title: fr ? "Newsletter communautaire" : "Community newsletter",
                desc: fr
                  ? "Mise en avant des collaborations et de leurs résultats dans nos communications périodiques."
                  : "Highlighting collaborations and their outcomes in our periodic communications.",
              },
            ].map((item) => (
              <article className="page-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <p className="page-muted">
            {fr
              ? "Les modalités de visibilité sont définies conjointement selon la nature du partenariat."
              : "Recognition arrangements are agreed jointly according to the nature of each partnership."}
          </p>
        </Section>
      </>
    );
  }

  return (
    <>
      <div className="page-hero">
        <span className="section-kicker">OBV / CONTACT</span>
        <h1>{t.contact}</h1>
        <p>
          {fr
            ? "Une question, une idée ou une proposition de collaboration ?"
            : "Have a question, an idea or a collaboration proposal?"}
        </p>
      </div>

      <Section
        id="contact"
        kicker="01 / CONTACT"
        title={fr ? "Écrivez-nous" : "Send us a message"}
      >
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (!CONTACT.email) return;

            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(
              String(data.get("subject") || ""),
            );
            const body = encodeURIComponent(
              `Name: ${data.get("name")}
Email: ${data.get("email")}

${data.get("message")}`,
            );

            window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
          }}
        >
          <label>
            {fr ? "Nom complet" : "Full name"}
            <input name="name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            {fr ? "Objet" : "Subject"}
            <select name="subject" required defaultValue="">
              <option value="" disabled>
                {fr ? "Choisir un sujet" : "Choose a subject"}
              </option>
              <option value="General inquiry">
                {fr ? "Question générale" : "General inquiry"}
              </option>
              <option value="Partnership">Partnership</option>
              <option value="Community membership">
                {fr ? "Rejoindre la communauté" : "Join the community"}
              </option>
              <option value="Events">Events</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>

          <button
            className="btn btn-orange"
            type="submit"
            disabled={!CONTACT.email}
          >
            {fr ? "Préparer l'email" : "Compose email"}
          </button>

          <p className="page-muted">
            {fr
              ? "Le formulaire ouvre votre application de messagerie pour l'envoi."
              : "This form opens your email application to send the message."}
          </p>
        </form>
      </Section>

      <Section
        id="channels"
        kicker="02 / CONNECT"
        title={fr ? "Nos coordonnées" : "Contact details"}
      >
        <div className="contact-links">
          {CONTACT.email && (
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={19} /> {CONTACT.email}
            </a>
          )}

          {CONTACT.phoneInternational && (
            <a href={`tel:+${CONTACT.phoneInternational}`}>
              {CONTACT.phoneDisplay || `+${CONTACT.phoneInternational}`}
            </a>
          )}

          {CONTACT.whatsappNumber && (
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
          )}

          {CONTACT.whatsappGroup && (
            <a
              href={CONTACT.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
            >
              {fr ? "Rejoindre le groupe WhatsApp ↗" : "Join WhatsApp group ↗"}
            </a>
          )}

          {CONTACT.communityGroups.map((group) => (
            <a
              key={group.name}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {group.name} ↗
            </a>
          ))}

          {CONTACT.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name} ↗
            </a>
          ))}

          {!CONTACT.email &&
            !CONTACT.phoneInternational &&
            !CONTACT.whatsappNumber &&
            !CONTACT.whatsappGroup &&
            CONTACT.communityGroups.length === 0 &&
            CONTACT.socials.length === 0 && (
              <p className="page-muted">{t.coming}</p>
            )}
        </div>
      </Section>
    </>
  );
}
export function ExtraPage({ lang, setLang }) {
  const safe = words[lang] ? lang : "fr";
  const t = words[safe];
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  let content =
    path === "/about" ? (
      <About lang={safe} t={t} />
    ) : path.startsWith("/olympiades") || path.startsWith("/olympiad") ? (
      <Olympiad lang={safe} t={t} />
    ) : path.startsWith("/blog") ? (
      <Blog lang={safe} t={t} path={path} />
    ) : (
      <SimplePage path={path} lang={safe} t={t} />
    );
  return (
    <div className="subsite">
      <SiteHeader lang={safe} setLang={setLang} t={t} />
      <main className="page-container">{content}</main>
      <footer className="subfooter">
        © 2026 OBV · L'IA à l'Ivoirienne · Abidjan, Côte d'Ivoire
      </footer>
    </div>
  );
}
