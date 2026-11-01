// ====== KONFIGURASI (edit di sini) ======
const KAS_URL = "https://kas.sisteminformasi-a.fun/"; // ganti dengan link web app Kas
const WA_URL = "https://wa.me/628561507488?text=Halo%20SI01A"; // ganti nomor WhatsApp (format 62xxxx, tanpa +/0 depan)
const MEMBERS = [
  { nama: "Lulu Kamaludin", nim: "2627572010002", peran: "Ketua Kelas" },
  { nama: "Ahmad Yusuf", nim: "2627572010004", peran: "Wakil Ketua Kelas" },
  { nama: "Imam Koswara", nim: "2627572010023", peran: "Sekretaris" },
  { nama: "Hasni Nastiti Said", nim: "2627572010005", peran: "Bendahara" },
  {
    nama: "Alsena Regienaldo Pancasona Wibowo",
    nim: "2627572010024",
    peran: "Humas",
  },
  { nama: "Junior Putra Santosa", nim: "2627572010001", peran: "Anggota" },
  { nama: "Arman Agustian", nim: "2627572010003", peran: "Anggota" },
  { nama: "M. Huzayfahtun Najmi", nim: "2627572010007", peran: "Anggota" },
  { nama: "Yoga Alam Anwari", nim: "2627572010008", peran: "Anggota" },
  { nama: "Nabhansyah Yusup", nim: "2627572010009", peran: "Anggota" },
  { nama: "Rifky Akbar Ramadhan", nim: "2627572010011", peran: "Anggota" },
  { nama: "Alpin Budiana", nim: "2627572010012", peran: "Anggota" },
  {
    nama: "Muhammad Syahyan Rasyid Permana",
    nim: "2627572010013",
    peran: "Anggota",
  },
  { nama: "Annisa Nursalsabila", nim: "2627572010014", peran: "Anggota" },
  { nama: "Dwi Praja", nim: "2627572010015", peran: "Anggota" },
  { nama: "Riki Saputra", nim: "2627572010016", peran: "Anggota" },
  { nama: "Prayoga Dwi Handika", nim: "2627572010017", peran: "Anggota" },
  { nama: "Aldi Firansyah", nim: "2627572010019", peran: "Anggota" },
  { nama: "Rizki Prayoga", nim: "2627572010020", peran: "Anggota" },
  { nama: "Muhamad Azis Rahmat", nim: "2627572010021", peran: "Anggota" },
  { nama: "Jasir Adil Syaoqi", nim: "2627572010037", peran: "Anggota" },
  {
    nama: "Muhamad Rizky Maulana Saputra",
    nim: "2627572010038",
    peran: "Anggota",
  },
  { nama: "Syahru Alma'ruf Muzaqi", nim: "2627572010042", peran: "Anggota" },
  { nama: "Anggra Hidayat", nim: "2627572010045", peran: "Anggota" },
  { nama: "Ardhi Rizaldi", nim: "2627572010046", peran: "Anggota" },
  { nama: "Wahid Dicky Nugroho", nim: "2627572010048", peran: "Anggota" },
];
const NEWS = [
  [
    "Pengumuman",
    "Jadwal UTS Semester Ganjil dirilis",
    "30 Okt 2026",
    "#00a88f",
    "#012a2b",
    [
      "Jadwal Ujian Tengah Semester (UTS) semester ganjil telah resmi dirilis. Seluruh mahasiswa SI01A diharapkan memeriksa jadwal dan ruangan ujian masing-masing mata kuliah.",
      "Pastikan kartu ujian dan perlengkapan sudah disiapkan satu hari sebelumnya. Mahasiswa yang berhalangan hadir diminta menghubungi dosen pengampu melalui ketua kelas.",
      "Semoga seluruh mahasiswa diberi kelancaran dan hasil yang terbaik.",
    ],
  ],
  [
    "Akademik",
    "Pengisian KRS dibuka minggu depan",
    "27 Okt 2026",
    "#2b6cb0",
    "#012a2b",
    [
      "Pengisian Kartu Rencana Studi (KRS) akan dibuka mulai minggu depan melalui portal akademik kampus.",
      "Mahasiswa disarankan berkonsultasi dengan dosen wali sebelum mengisi KRS agar beban SKS sesuai kemampuan dan kebutuhan studi.",
    ],
  ],
  [
    "Kegiatan",
    "Rapat kelas & pemilihan pengurus baru",
    "24 Okt 2026",
    "#d69e2e",
    "#4a2c00",
    [
      "Rapat kelas akan membahas evaluasi kegiatan semester ini serta pemilihan pengurus kelas yang baru.",
      "Seluruh anggota SI01A diharapkan hadir dan menyampaikan aspirasi demi kemajuan bersama.",
    ],
  ],
  [
    "Kas",
    "Rekap kas kelas bulan Oktober",
    "20 Okt 2026",
    "#38a169",
    "#022c22",
    [
      "Rekap pemasukan dan pengeluaran kas kelas bulan Oktober telah diperbarui oleh bendahara.",
      "Rincian lengkap dapat dilihat melalui web app Kas pada menu Kas Kelas.",
    ],
  ],
  [
    "Info",
    "Workshop pemrograman web gratis",
    "15 Okt 2026",
    "#805ad5",
    "#1a0b3a",
    [
      "Akan diadakan workshop pemrograman web gratis untuk mahasiswa Sistem Informasi.",
      "Peserta akan belajar dasar HTML, CSS, dan JavaScript secara langsung. Pendaftaran dibuka melalui ketua kelas.",
    ],
  ],
  [
    "Prestasi",
    "Mahasiswa SI01A juara lomba UI/UX",
    "10 Okt 2026",
    "#e53e3e",
    "#3a0b0b",
    [
      "Selamat kepada perwakilan SI01A yang berhasil meraih juara pada lomba UI/UX tingkat kampus.",
      "Prestasi ini menjadi motivasi bagi seluruh anggota kelas untuk terus berkarya.",
    ],
  ],
];
const HERO = [
  {
    img: "kelassi1.avif",
    t: "Selamat datang di kelas SI01A",
    d: "Website resmi kelas Sistem Informasi 01A — informasi, kolaborasi, dan cerita kami dalam satu tempat.",
    b: "Kenali kelas kami",
    h: "index.html#profile",
  },
  {
    img: "kelassi2.avif",
    t: "Kompak, kreatif & berkolaborasi",
    d: "Kenalan dengan seluruh mahasiswa SI01A yang siap tumbuh dan berkarya bersama.",
    b: "Lihat members",
    h: "halaman/members.html",
  },
  {
    img: "kelassi3.avif",
    t: "Kas kelas yang transparan",
    d: "Pantau pemasukan dan pengeluaran kas kelas secara terbuka melalui web app khusus.",
    b: "Buka kas",
    h: KAS_URL,
    ext: 1,
  },
];
const NAV = [
  ["Home", "index.html"],
  ["Profile Kelas", "index.html#profile"],
  ["Struktur", "halaman/struktur.html"],
  ["Members", "halaman/members.html"],
  ["Akademik", "index.html#akademik"],
  ["News", "index.html#news"],
  ["Contact", "index.html#contact"],
];
const B = document.body.dataset.base || "";
const $ = (s) => document.querySelector(s);
const pill = (txt, href, ext) =>
  `<a href="${href}" ${ext ? 'target="_blank" rel="noopener"' : ""} class="group inline-flex items-center gap-6 bg-lime text-dark font-semibold pl-7 pr-1.5 py-1.5 rounded-full text-lg hover:bg-white transition">${txt}<span class="w-12 h-12 rounded-full bg-white group-hover:bg-dark group-hover:text-white grid place-items-center transition"><i class="bi bi-arrow-right text-xl transition group-hover:translate-x-0.5"></i></span></a>`;
// ====== HEADER ======
const cta = (c) =>
  `<a href="${WA_URL}" target="_blank" rel="noopener" class="${c} items-center gap-3 bg-lime text-dark font-semibold rounded-full pl-5 pr-1.5 py-1.5 text-sm hover:bg-white transition">Let's Talk<span class="w-8 h-8 rounded-full bg-white grid place-items-center"><i class="bi bi-whatsapp"></i></span></a>`;
$("#site-header").innerHTML =
  `<header id="hdr" class="fixed top-0 inset-x-0 z-50 text-white transition-colors duration-300 bg-gradient-to-b from-black/40 to-transparent">
<div class="flex items-center justify-between h-20 px-5 lg:px-20">
<a href="${B}index.html" class="relative z-[70]"><img src="${B}asset/Logo2.svg" alt="SI01A" class="h-10 w-auto"></a>
<nav id="menu" class="fixed inset-0 w-full h-screen bg-dark z-[60] flex flex-col justify-center gap-1 px-8 sm:px-16 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:gap-8 lg:p-0">
${NAV.map((n) => `<a href="${B + n[1]}" class="menu-link font-display uppercase tracking-wide text-4xl py-3 border-b border-white/15 max-lg:hover:text-lime lg:font-sans lg:normal-case lg:tracking-normal lg:text-[15px] lg:font-medium lg:py-1 lg:border-0">${n[0]}</a>`).join("")}
${cta("menu-link mt-8 inline-flex justify-center sm:hidden")}</nav>
<div class="flex items-center gap-3 relative z-[70]">${cta("hidden sm:inline-flex")}
<button id="burger" aria-label="Menu" class="lg:hidden w-11 h-11 grid place-items-center text-3xl"><i class="bi bi-list"></i></button></div></div></header>`;
const hdr = $("#hdr"),
  menu = $("#menu"),
  burger = $("#burger");
const onScroll = () => {
  const s = scrollY > 40;
  hdr.classList.toggle("hdr-solid", s);
  hdr.classList.toggle("bg-gradient-to-b", !s);
};
onScroll();
addEventListener("scroll", onScroll, { passive: true });
const CLOSE_MS = 500; // samakan dengan duration-500 pada #menu
const isOpen = () => menu.classList.contains("is-open");
const toggle = (f) => {
  menu.classList.toggle("is-open", f);
  burger.innerHTML = `<i class="bi bi-${f ? "x-lg" : "list"}"></i>`;
  burger.setAttribute("aria-expanded", f);
  document.body.style.overflow = f ? "hidden" : "";
  if (window.gsap) {
    gsap.killTweensOf(".menu-link"); // batalkan animasi lama supaya tidak bentrok
    if (f)
      gsap.fromTo(
        ".menu-link",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.06,
          delay: 0.25,
          duration: 0.5,
          clearProps: "transform,opacity",
        },
      );
    else gsap.set(".menu-link", { clearProps: "transform,opacity" });
  }
};
burger.onclick = () => toggle(!isOpen());
// normalisasi path: "/index.html" dianggap sama dengan "/"
const normPath = (p) => p.replace(/index\.html$/, "");
menu.querySelectorAll("a").forEach((a) => {
  a.onclick = (e) => {
    // desktop: perilaku link normal
    if (innerWidth >= 1024) return;
    // link eksternal (tab baru): cukup tutup menu
    if (a.target === "_blank") return toggle(false);
    e.preventDefault();
    toggle(false); // 1) tutup menu dulu dengan mulus
    const url = new URL(a.href, location.href);
    const samePage =
      url.origin === location.origin &&
      normPath(url.pathname) === normPath(location.pathname);
    // 2) setelah panel selesai menutup, baru scroll / pindah halaman
    setTimeout(() => {
      if (!samePage) return (location.href = a.href);
      const t = url.hash && document.querySelector(url.hash);
      if (t) t.scrollIntoView({ behavior: "smooth" });
      else scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", url.pathname + url.hash);
    }, CLOSE_MS - 20);
  };
});
addEventListener("resize", () => {
  if (innerWidth >= 1024 && isOpen()) toggle(false);
});
// ====== FOOTER ======
const fl = (t, h) =>
  `<li><a href="${h}" class="group inline-flex items-center gap-2 py-1 hover:text-lime transition"><i class="bi bi-chevron-right text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></i>${t}</a></li>`;
$("#site-footer").innerHTML = `<footer class="bg-[#06191a] text-white/80 pt-16">
<div class="max-w-[1400px] mx-auto px-5 lg:px-20"><div class="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
<div class="lg:col-span-2"><img src="${B}asset/Logo2.svg" class="h-12 w-auto mb-5" alt=""><p class="max-w-sm">Kelas Sistem Informasi 01A — belajar, berkolaborasi, dan bertumbuh bersama.</p>
<div class="flex gap-3 mt-6 text-lg">${["instagram", "youtube", "linkedin", "twitter-x", "tiktok"].map((i) => `<a href="#" aria-label="${i}" class="w-10 h-10 rounded-full border border-white/30 grid place-items-center hover:bg-lime hover:text-dark hover:border-lime transition"><i class="bi bi-${i}"></i></a>`).join("")}</div></div>
<div><h5 class="text-white font-semibold uppercase tracking-widest text-sm mb-4">Kelas</h5><ul>${NAV.slice(
  1,
  4,
)
  .map((n) => fl(n[0], B + n[1]))
  .join("")}</ul></div>
<div><h5 class="text-white font-semibold uppercase tracking-widest text-sm mb-4">Informasi</h5><ul>${NAV.slice(
  4,
)
  .map((n) => fl(n[0], B + n[1]))
  .join(
    "",
  )}<li><a href="${KAS_URL}" target="_blank" class="group inline-flex items-center gap-2 py-1 hover:text-lime">Kas <i class="bi bi-arrow-up-right text-xs"></i></a></li></ul></div>
<div><h5 class="text-white font-semibold uppercase tracking-widest text-sm mb-4">Kontak</h5><ul class="space-y-2"><li><i class="bi bi-envelope me-2"></i>si01a@gmail.com</li><li><i class="bi bi-geo-alt me-2"></i>Sukabumi, Jawa Barat</li></ul></div></div>
<div class="mt-14 py-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-sm"><span>© ${new Date().getFullYear()} SI01A. All rights reserved.</span>
<div class="flex flex-wrap gap-6"><a href="#" class="hover:text-lime">Privacy</a><a href="#" class="hover:text-lime">Terms</a><a href="#" class="hover:text-lime">Cookies</a></div>
<a href="#" aria-label="Ke atas" class="w-11 h-11 rounded-full bg-lime text-dark grid place-items-center text-lg hover:bg-white transition"><i class="bi bi-arrow-up"></i></a></div></div></footer>`;
// ====== MEMBERS ======
const hue = (i) =>
  `linear-gradient(135deg,hsl(${(i * 47) % 360} 60% 42%),hsl(${(i * 47 + 40) % 360} 65% 30%))`;
const ini = (n) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
const memCards = (l) =>
  l
    .map(
      (m, i) =>
        `<div class="mem group text-center"><div class="relative aspect-[4/5] overflow-hidden bg-slate-200"><div class="absolute inset-0 grid place-items-center text-white text-6xl font-bold" style="background:${hue(i)}">${ini(m.nama)}</div><img src="${B}asset/members/${m.nim}.avif" alt="${m.nama}" loading="lazy" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"><div class="soc absolute inset-x-0 bottom-0 pt-12 pb-4 flex justify-center gap-2 bg-gradient-to-t from-dark/90 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">${["instagram", "linkedin", "envelope"].map((c) => `<a href="#" aria-label="${c}" class="w-9 h-9 rounded-full bg-white text-dark grid place-items-center hover:bg-lime transition"><i class="bi bi-${c}"></i></a>`).join("")}</div></div><h4 class="mt-5 font-bold text-lg leading-snug">${m.nama}</h4><p class="text-teal text-sm font-semibold uppercase tracking-wider mt-1">${m.peran}</p><p class="text-xs text-slate-500">${m.nim}</p></div>`,
    )
    .join("");
// Mobile/sentuh: tombol sosmed muncul saat kartu di-tap
const mobileMq = matchMedia("(max-width:767px), (hover:none)");
document.addEventListener("click", (e) => {
  if (!mobileMq.matches) return;
  const card = e.target.closest(".mem");
  document.querySelectorAll(".mem.open").forEach((c) => {
    if (c !== card) c.classList.remove("open");
  });
  if (!card || e.target.closest(".soc a")) return;
  card.classList.toggle("open");
});
const mp = $("#members-preview");
if (mp) mp.innerHTML = memCards(MEMBERS.slice(0, 8));
const ma = $("#members-all");
if (ma) {
  ma.innerHTML = memCards(MEMBERS);
  $("#q").oninput = (e) => {
    const q = e.target.value.toLowerCase();
    ma.innerHTML = memCards(
      MEMBERS.filter((m) => (m.nama + m.nim).toLowerCase().includes(q)),
    );
  };
}
// ====== NEWS SLIDER ======
const tr = $("#news-track");
if (tr) {
  tr.innerHTML = NEWS.map(
    (n, i) =>
      `<a href="${B}halaman/berita.html?id=${i}" class="ncard group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"><div class="relative aspect-[16/10] overflow-hidden" style="background:linear-gradient(135deg,${n[3]},${n[4]})"><img src="${B}asset/berita/berita-${i + 1}.webp" alt="" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div><div class="p-5"><span class="meta text-xs font-bold uppercase tracking-widest text-teal">${n[0]}</span><h4 class="font-semibold text-lg leading-snug my-1">${n[1]}</h4><p class="meta text-sm text-slate-500">${n[2]}</p><span class="inline-flex items-center gap-1 text-sm font-semibold text-teal mt-3 group-hover:gap-2 transition-all">Baca selengkapnya <i class="bi bi-arrow-right"></i></span></div></a>`,
  ).join("");
  const v = $("#news-view"),
    p = $("#prev"),
    nx = $("#next"),
    gap = () => parseFloat(getComputedStyle(tr).gap),
    cw = () => tr.firstElementChild.offsetWidth + gap(),
    step = () => cw() * Math.max(1, Math.round(v.clientWidth / cw()));
  const upd = () => {
    p.disabled = v.scrollLeft < 5;
    nx.disabled = v.scrollLeft + v.clientWidth >= v.scrollWidth - 5;
  };
  p.onclick = () => v.scrollBy({ left: -step(), behavior: "smooth" });
  nx.onclick = () => v.scrollBy({ left: step(), behavior: "smooth" });
  v.onscroll = upd;
  addEventListener("resize", upd);
  upd();
}
const cf = $("#cf");
if (cf)
  cf.onsubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda terkirim (demo).");
    cf.reset();
  };
// ====== HERO SLIDER (GSAP) ======
const hr = $("#hero");
if (hr && !window.gsap) {
  hr.style.background = "url(asset/" + HERO[0].img + ") center/cover";
  hr.innerHTML = `<div class="absolute inset-0 bg-[#0b4f4c]/75"></div><div class="relative h-full flex flex-col justify-center px-5 lg:px-20"><h1 class="font-display uppercase text-5xl lg:text-8xl">${HERO[0].t}</h1><p class="my-6 max-w-2xl text-xl">${HERO[0].d}</p></div>`;
}
if (hr && window.gsap) {
  hr.innerHTML = `${HERO.map((s, i) => `<div class="slide absolute inset-0 bg-cover bg-center" style="background-image:url(asset/${s.img});opacity:${i ? 0 : 1}"></div>`).join("")}
 <div class="absolute inset-0 bg-[#0b4f4c]/75"></div><div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
 <div class="relative h-full flex flex-col justify-center px-5 lg:px-20 pt-16 pb-24"><h1 id="h-t" class="font-display uppercase leading-[.98] text-5xl sm:text-7xl lg:text-[6.5rem] max-w-5xl"></h1><p id="h-d" class="mt-6 mb-9 max-w-2xl text-lg sm:text-2xl text-white/90"></p><div id="h-b"></div></div>
 <div class="absolute bottom-8 inset-x-5 lg:inset-x-20 flex items-center gap-4"><div class="flex gap-2 flex-1 max-w-md">${HERO.map((_, i) => `<button data-i="${i}" aria-label="Slide ${i + 1}" class="seg flex-1 h-1.5 bg-white/30 rounded overflow-hidden"><span class="block h-full w-0 bg-lime"></span></button>`).join("")}</div>
 <div class="ml-auto flex gap-2"><button id="hp" aria-label="Sebelumnya" class="w-12 h-12 rounded-full border border-white/60 grid place-items-center text-xl hover:bg-lime hover:text-dark hover:border-lime transition"><i class="bi bi-arrow-left"></i></button><button id="hn" aria-label="Berikutnya" class="w-12 h-12 rounded-full border border-white/60 grid place-items-center text-xl hover:bg-lime hover:text-dark hover:border-lime transition"><i class="bi bi-arrow-right"></i></button></div></div>`;
  const sl = hr.querySelectorAll(".slide"),
    bars = hr.querySelectorAll(".seg span");
  let cur = -1,
    tw;
  const go = (i) => {
    i = (i + HERO.length) % HERO.length;
    const s = HERO[i];
    // hentikan tween lama di semua slide supaya tidak saling menimpa saat tombol ditekan cepat
    gsap.killTweensOf(sl);
    gsap.killTweensOf(["#h-t", "#h-d", "#h-b"]);
    sl.forEach((el, k) => {
      if (k === i) {
        // slide tujuan: fade-in dari opacity saat ini (tanpa scale)
        if (cur < 0) gsap.set(el, { opacity: 1 });
        else gsap.to(el, { opacity: 1, duration: 1.2, ease: "power1.out" });
      } else {
        // slide lain: fade-out
        gsap.to(el, { opacity: 0, duration: 1.2 });
      }
    });
    $("#h-t").textContent = s.t;
    $("#h-d").textContent = s.d;
    $("#h-b").innerHTML = pill(
      s.b,
      s.h.startsWith("http") || s.ext ? s.h : B + s.h,
      s.ext,
    );
    gsap.fromTo(
      ["#h-t", "#h-d", "#h-b"],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        delay: cur < 0 ? 0.3 : 0.2,
        overwrite: true,
      },
    );
    bars.forEach((b, k) => gsap.set(b, { width: k < i ? "100%" : "0%" }));
    tw && tw.kill();
    tw = gsap.to(bars[i], {
      width: "100%",
      duration: 6,
      ease: "none",
      onComplete: () => go(i + 1),
    });
    cur = i;
  };
  go(0);
  $("#hp").onclick = () => go(cur - 1);
  $("#hn").onclick = () => go(cur + 1);
  hr.querySelectorAll(".seg").forEach(
    (b) => (b.onclick = () => go(+b.dataset.i)),
  );
}
// ====== DETAIL BERITA ======
const bd = $("#berita-detail");
if (bd) {
  const raw = new URLSearchParams(location.search).get("id"),
    id = raw === null ? -1 : +raw,
    n = NEWS[id];
  if (!n) {
    $("#page-title").textContent = "Berita";
    bd.innerHTML = `<div class="text-center py-20"><h2 class="font-display uppercase text-4xl mb-6">Berita tidak ditemukan</h2><a href="${B}index.html#news" class="inline-flex items-center gap-2 font-semibold border-2 border-dark rounded-full px-6 py-3 hover:bg-dark hover:text-white transition"><i class="bi bi-arrow-left"></i> Kembali ke News</a></div>`;
  } else {
    document.title = n[1] + " — SI01A";
    $("#page-title").textContent = n[1];
    $("#berita-meta").textContent = n[0] + " · " + n[2];
    const nav = (i, l, ic) =>
      i >= 0 && i < NEWS.length
        ? `<a href="?id=${i}" class="group flex-1 min-w-[220px] border border-slate-200 rounded-lg p-5 hover:bg-dark hover:text-white transition ${l == "Berikutnya" ? "text-right" : ""}"><small class="uppercase tracking-widest text-teal group-hover:text-lime font-bold">${l}</small><div class="font-semibold mt-1">${NEWS[i][1]}</div></a>`
        : "";
    const more = NEWS.map((x, i) => [x, i])
      .filter((x) => x[1] !== id)
      .slice(0, 3)
      .map(
        ([x, i]) =>
          `<a href="?id=${i}" class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"><div class="relative aspect-[16/10] overflow-hidden" style="background:linear-gradient(135deg,${x[3]},${x[4]})"><img src="${B}asset/berita/berita-${i + 1}.webp" alt="" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover"></div><div class="p-5"><span class="text-xs font-bold uppercase tracking-widest text-teal">${x[0]}</span><h4 class="font-semibold leading-snug my-1">${x[1]}</h4><p class="text-sm text-slate-500">${x[2]}</p></div></a>`,
      )
      .join("");
    bd.innerHTML = `<article class="max-w-3xl mx-auto"><a href="${B}index.html#news" class="inline-flex items-center gap-2 text-sm font-semibold text-teal mb-6 hover:gap-3 transition-all"><i class="bi bi-arrow-left"></i> Kembali ke News</a>
  <div class="relative aspect-[16/9] rounded-lg overflow-hidden mb-10" style="background:linear-gradient(135deg,${n[3]},${n[4]})"><img src="${B}asset/berita/berita-${id + 1}.webp" alt="" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover"></div>
  <div class="space-y-5 text-lg text-slate-700 leading-relaxed">${n[5].map((t) => `<p>${t}</p>`).join("")}</div>
  <div class="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">${nav(id - 1, "Sebelumnya")}${nav(id + 1, "Berikutnya")}</div></article>
  <div class="max-w-[1400px] mx-auto mt-20"><h3 class="font-display uppercase text-3xl lg:text-4xl mb-8">Berita Lainnya</h3><div class="grid gap-6 md:grid-cols-3">${more}</div></div>`;
  }
}
// ====== ANIMASI GSAP (aman: konten tetap tampil walau animasi gagal) ======
try {
  if (window.gsap) {
    const ph = $("#page-title");
    if (ph)
      gsap.from(ph, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        clearProps: "all",
      });
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      const els = [...document.querySelectorAll(".reveal,.mem,.ncard")];
      gsap.set(els, { opacity: 0, y: 40 });
      ScrollTrigger.batch(els, {
        start: "top 92%",
        once: true,
        onEnter: (b) =>
          gsap.to(b, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: true,
          }),
      });
      addEventListener("load", () => ScrollTrigger.refresh());
      setTimeout(() => {
        els.forEach((e) => {
          if (
            getComputedStyle(e).opacity === "0" &&
            e.getBoundingClientRect().top < innerHeight
          )
            gsap.to(e, { opacity: 1, y: 0, duration: 0.4 });
        });
      }, 2500);
    }
  }
} catch (e) {
  console.warn(e);
  document.querySelectorAll(".reveal,.mem,.ncard").forEach((e) => {
    e.style.opacity = 1;
    e.style.transform = "none";
  });
}
