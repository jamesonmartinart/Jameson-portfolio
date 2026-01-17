const WORK = [
  // Replace these with your real projects + images
  // slug determines the URL: /project.html?slug=the-national
  {
    title: "Project Title One",
    slug: "project-title-one",
    year: "2026",
    thumb: "assets/work/project1-thumb.jpg",
    images: [
      "assets/work/project1-1.jpg"
    ],
    description: "Short one-liner about the project."
  },
  {
    title: "Project Title Two",
    slug: "project-title-two",
    year: "2026",
    thumb: "assets/work/project2-thumb.jpg",
    images: [
      "assets/work/project2-1.jpg"
    ],
    description: "Short one-liner about the project."
  }
];

// Footer year
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

// Render grid if present
const grid = document.getElementById("workGrid");
if (grid) {
  grid.innerHTML = WORK.map(p => {
    return `
      <a class="card" href="project.html?slug=${encodeURIComponent(p.slug)}" aria-label="${escapeHtml(p.title)}">
        <img class="thumb" src="${p.thumb}" alt="${escapeHtml(p.title)}" loading="lazy" />
        <div class="caption">${escapeHtml(p.title)}</div>
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
    <h1>${escapeHtml(p.title)}</h1>
    <p class="meta">${escapeHtml(p.year || "")}</p>
    ${p.images.map(src => `<img src="${src}" alt="${escapeHtml(p.title)}" loading="lazy" />`).join("")}
    ${p.description ? `<p class="meta">${escapeHtml(p.description)}</p>` : ""}
  `;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[s]));
}
