const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const waLink = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg || SITE.mensagemPadrao)}`;

// Links de WhatsApp: <a data-wa> ou <a data-wa="arquiteto">
$$("[data-wa]").forEach((a) => {
  a.href = waLink(a.dataset.wa === "arquiteto" ? SITE.mensagemArquiteto : "");
  a.target = "_blank"; a.rel = "noopener noreferrer";
});
$("#ano").textContent = new Date().getFullYear();

// Header muda ao rolar
const header = $("#header");
const onScroll = () => {
  const solido = window.scrollY > 40;
  header.classList.toggle("bg-creme/90", solido);
  header.classList.toggle("backdrop-blur", solido);
  header.classList.toggle("border-b", solido);
  header.classList.toggle("text-verde-profundo", solido);
  header.classList.toggle("text-white", !solido);
  $("#logo").classList.toggle("brightness-0", !solido);
  $("#logo").classList.toggle("invert", !solido);
};
onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const menu = $("#menu-mobile"), btnMenu = $("#btn-menu");
const setMenu = (aberto) => {
  menu.classList.toggle("aberto", aberto);
  btnMenu.setAttribute("aria-expanded", aberto);
  document.body.classList.toggle("overflow-hidden", aberto);
};
btnMenu.addEventListener("click", () => setMenu(true));
$$("[data-fechar-menu]").forEach((el) => el.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Portfólio
const grid = $("#grid"), filtros = $("#filtros"), modal = $("#modal");
const categorias = ["Todos", ...new Set(PROJETOS.map((p) => p.categoria))];
const foto = (p, cls) => p.img
  ? `<img src="${p.img}" alt="${p.titulo}, ${p.local}" loading="lazy" decoding="async" class="${cls}">`
  : `<div role="img" aria-label="Imagem ilustrativa: ${p.titulo}" class="${cls}" style="background:${p.cor}"></div>`;

function renderGrid(cat) {
  const lista = PROJETOS.map((p, i) => ({ ...p, i })).filter((p) => cat === "Todos" || p.categoria === cat);
  grid.innerHTML = lista.map((p) => `
    <li class="reveal visivel"><button data-i="${p.i}" class="group block w-full text-left">
      <div class="relative aspect-[4/5] overflow-hidden">${foto(p, "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105")}</div>
      <p class="mt-4 font-serif text-xl text-verde-profundo">${p.titulo}</p>
      <p class="text-sm text-texto-suave">${p.categoria}, ${p.local}</p>
    </button></li>`).join("");
}
filtros.innerHTML = categorias.map((c, i) => `<button aria-pressed="${i === 0}" data-cat="${c}" class="filtro shrink-0 border px-5 py-2.5 text-sm transition">${c}</button>`).join("");
const estiloFiltro = () => $$(".filtro").forEach((b) => {
  const on = b.getAttribute("aria-pressed") === "true";
  b.className = `filtro shrink-0 border px-5 py-2.5 text-sm transition ${on ? "border-verde-profundo bg-verde-profundo text-creme" : "border-cinza text-texto-suave hover:border-verde-profundo"}`;
});
filtros.addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  $$(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
  estiloFiltro(); renderGrid(b.dataset.cat);
});
estiloFiltro(); renderGrid("Todos");

grid.addEventListener("click", (e) => {
  const b = e.target.closest("[data-i]"); if (!b) return;
  const p = PROJETOS[b.dataset.i];
  $("#modal-foto").innerHTML = foto(p, "h-full w-full object-cover");
  $("#modal-titulo").textContent = p.titulo;
  $("#modal-desc").textContent = p.descricao;
  $("#modal-cat").textContent = p.categoria; $("#modal-local").textContent = p.local; $("#modal-tecido").textContent = p.tecido;
  modal.showModal();
});
$("#modal-fechar").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => e.target === modal && modal.close());

// Depoimentos
$("#depoimentos-lista").innerHTML = DEPOIMENTOS.map((d) => `
  <figure class="reveal"><blockquote class="font-serif text-xl leading-relaxed text-verde-profundo">“${d.texto}”</blockquote>
  <figcaption class="mt-5 border-t border-bege pt-4 text-sm text-texto-suave"><span class="text-verde-profundo">${d.autor}</span>, ${d.cargo}</figcaption></figure>`).join("");

// Revelar ao rolar
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -80px 0px" });
$$(".reveal:not(.visivel)").forEach((el) => io.observe(el));

lucide.createIcons({ attrs: { "stroke-width": 1.25 } });
