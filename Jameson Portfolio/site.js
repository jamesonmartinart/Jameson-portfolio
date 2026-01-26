const WORK = [
  {
    title: "Tour poster for Destroyer - Fall 2024",
    slug: "2024-destroyer-poster",
    year: "2024",
    thumb: "/assets/work/destroyer-poster-thumb.jpg",
    images: ["/assets/work/2024-destroyer-poster.jpg"],
    description: ""
  },
  {
    title: "The War On Drugs poster - personal project",
    slug: "2024-war-on-drugs-poster",
    year: "2024",
    thumb: "/assets/work/war-on-drugs-poster-personal-thumb.jpg",
    images: ["/assets/work/2024-war-on-drugs-poster.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-3",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-3.jpg",
    images: ["/assets/work/2025-hot-creations-cover-3.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-6",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-6-thumb.jpg",
    images: ["/assets/work/2025-hot-creations-cover-6.jpg"],
    description: ""
  },
  {
    title: "Tour poster for Sungazer - Summer 2024",
    slug: "2025-sungazer-poster",
    year: "2025",
    thumb: "/assets/work/sungazer-poster-personal-thumb.jpg",
    images: ["/assets/work/2025-sungazer-poster.jpg"],
    description: ""
  },
  {
    title: "Cover art & vinyl layout for Wavelength by Shane Sato",
    slug: "2025-ss-vinyl-layout-mockup",
    year: "2025",
    thumb: "/assets/work/shane-sato-vinyl-layout-thumb.jpg",
    images: ["/assets/work/2025-ss-vinyl-layout-mockup.jpg"],
    description: ""
  },
  {
    title: "Free poster. Available in the",
    slug: "2025-free-poster-personal",
    year: "2025",
    thumb: "/assets/work/free-poster-personal-thumb.jpg",
    images: ["/assets/work/2025-free-poster-personal.jpg"],
    description: ""
  },
  {
    title: "Merch design for Paradise in the City Festival - Summer 2025",
    slug: "2025-paradise-merch-mockup",
    year: "2025",
    thumb: "/assets/work/paradise-festival-merch-thumb.jpg",
    images: ["/assets/work/2025-paradise-merch-mockup.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-4",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-4.jpg",
    images: ["/assets/work/2025-hot-creations-cover-4.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-2",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-2.jpg",
    images: ["/assets/work/2025-hot-creations-cover-2.jpg"],
    description: ""
  },
  {
    title: "Merch design for The Neighbourhood",
    slug: "2026-neighbourhood-merch-mockup",
    year: "2026",
    thumb: "/assets/work/neighbourhood-merch-mockup-thumb.jpg",
    images: ["/assets/work/neighbourhood-merch-mockup.jpg"],
    description: ""
  },
  {
    title: "You Are Now poster. Available in the shop.",
    slug: "2024-you-are-now-personal",
    year: "2024",
    thumb: "/assets/work/you-are-now-poster-personal.jpg",
    images: [
      "/assets/work/you-are-now-poster-personal.jpg"
    ],
    description: ""
  },
  {
    title: "Cover art for Everydayness by Darksoft",
    slug: "2025-darksoft-cassette-tape-mockup",
    year: "2025",
    thumb: "/assets/work/darksoft-mockup-thumb.jpg",
    images: ["/assets/work/2025-darksoft-cassette-tape-mockup.jpg"],
    description: ""
  },
  {
    title: "Just Say No poster. Available in the shop.",
    slug: "2026-just-say-no-red-pink",
    year: "2026",
    thumb: "/assets/work/just-say-no-poster-personal-thumb-4.jpg",
    images: ["/assets/work/2026-just-say-no-red-pink.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-1",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-1.jpg",
    images: ["/assets/work/2025-hot-creations-cover-1.jpg"],
    description: ""
  },
  {
    title: "Cover design for Stupid Love Songs by Eric Zayne",
    slug: "2025-eric-zayne-album-art",
    year: "2025",
    thumb: "/assets/work/eric-zayne-single-art-thumb.jpg",
    images: ["/assets/work/2025-eric-zayne-album-art.jpg"],
    description: ""
  },
  {
    title: "Cover art series created for Hot Creations’ digital label releases",
    slug: "2025-hot-creations-cover-5",
    year: "2025",
    thumb: "/assets/work/2025-hot-creations-cover-5.jpg",
    images: ["/assets/work/2025-hot-creations-cover-5.jpg"],
    description: ""
  }
];


// Footer year
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

// Render grid if present
const grid = document.getElementById("workGrid");
if (grid) {
  grid.innerHTML = WORK.map(p => {
    return `
      <a class="card" href="/project.html?slug=${encodeURIComponent(p.slug)}" aria-label="${escapeHtml(p.title)}">
        <img class="thumb" src="${p.thumb}" alt="${escapeHtml(p.title)}" loading="lazy" />
      </a>
    `;
  }).join("");
}

// Render project if present
const projectEl = document.getElementById("project");
if (projectEl) {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const p = WORK.find(x => x.slug === slug) || WORK[0];

  document.title = `Jameson Martin — ${p.title}`;
projectEl.innerHTML = `
  <div class="project-media">
    ${p.images.map(src => `<img src="${src}" alt="${escapeHtml(p.title)}" loading="lazy" />`).join("")}
    <div class="project-caption">
      <h1>${escapeHtml(p.title)}</h1>
      <p class="meta">${escapeHtml(p.year || "")}</p>
    </div>
  </div>
  ${p.description ? `<p class="meta">${escapeHtml(p.description)}</p>` : ""}
`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[s]));
}
