"use strict";

const translations = {
  uz: {
    languageName: "Tilni tanlang",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
    mainNavigation: "Asosiy menyu",
    about: "Haqimizda",
    service: "Xizmatlar",
    work: "Ishlar",
    blog: "Blog",
    contact: "Aloqa",
    contacts: "Aloqa",
    eyebrow: "Ijodiy shablon",
    welcome: "Xush kelibsiz",
    toMogo: "MoGoga",
    learnMore: "Batafsil",
    intro: "Kirish",
    whatWeDo: "Biz nima qilamiz",
    storyTitle: "Biz haqimizda hikoya",
    storyDescription: "Biz g‘oyalarni mazmunli raqamli tajribalarga aylantiramiz. Jamoamiz har bir loyihaga ijodkorlik, aniqlik va mehr bilan yondashadi.",
    superTeam: "Ajoyib jamoa",
    statProjects: "Veb-dizayn loyihalari",
    statClients: "Mamnun mijozlar",
    statAwards: "Mukofotlar",
    statCoffee: "Qahva finjonlari",
    statMembers: "Jamoa a’zolari",
    weWorkWith: "Bizning xizmatlarimiz",
    servicesTitle: "Ajoyib xizmatlar",
    photography: "Fotografiya",
    webDesign: "Veb-dizayn",
    creativity: "Ijodkorlik",
    seo: "SEO",
    cssHtml: "CSS/HTML",
    digital: "Raqamli xizmatlar",
    serviceDescriptionOne: "Loyihangiz uchun mazmunli va esda qolarli suratlar.",
    serviceDescriptionTwo: "Chiroyli, qulay va barcha qurilmalarga mos veb-sahifalar.",
    serviceDescriptionThree: "Brendingizni ajratib turadigan yangi g‘oyalar va yechimlar.",
    serviceDescriptionFour: "Qidiruv tizimlarida ko‘rinishingizni yaxshilash.",
    serviceDescriptionFive: "Zamonaviy veb-saytlar uchun puxta kod va tuzilma.",
    serviceDescriptionSix: "Biznesingiz uchun raqamli yechimlar va ijodiy yordam.",
    forAllDevices: "Barcha qurilmalar uchun",
    uniqueDesign: "O‘ziga xos dizayn",
    serviceEyebrow: "Xizmat",
    whatWeDoTitle: "Biz nima qilamiz",
    whatWeDoDescription: "Biz har bir g‘oyani puxta dizayn va foydalanuvchi uchun qulay raqamli tajribaga aylantiramiz.",
    accordionPhotography: "Har bir loyiha uchun mazmunli va esda qolarli suratlar yaratamiz. Tasvir, yorug‘lik va kompozitsiyaga e’tibor berib, brendingiz hikoyasini tabiiy va ta’sirchan tarzda ko‘rsatamiz.",
    accordionCreativity: "Har bir loyiha uchun yangi g‘oyalar va ijodiy yo‘nalish ishlab chiqamiz. Brendingizga o‘ziga xos va ravshan ko‘rinish beramiz.",
    accordionWebDesign: "Har qanday ekranda qulay ishlaydigan, tushunarli va zamonaviy veb-saytlar yaratamiz.",
    previousTestimonial: "Oldingi fikr",
    nextTestimonial: "Keyingi fikr",
    testimonialOne: "“Loyihamiz davomida jamoa juda e’tiborli va ijodkor bo‘ldi. Natija nafaqat chiroyli, balki foydalanish uchun ham juda qulay.”",
    testimonialTwo: "“Ular bizning g‘oyamizni tezda anglab, uni o‘ziga xos va puxta ishlangan raqamli tajribaga aylantirishdi.”",
    testimonialThree: "“Ajoyib hamkorlik, aniq muloqot va har bir mayda jihatga e’tibor. Yana birga ishlashni intiqlik bilan kutamiz.”",
    testimonialAuthorOne: "John Doe",
    testimonialAuthorTwo: "Jane Smith",
    testimonialAuthorThree: "Alex Morgan",
    teamEyebrow: "Biz kimmiz",
    teamTitle: "Jamoamiz bilan tanishing",
    teamDescription: "G‘oyalarni hayotga tatbiq etadigan izlanuvchan va ijodkor jamoa.",
    teamRoleDesign: "Grafik dizayner",
    teamRoleBranding: "Brending va UX dizayner",
    teamRoleDeveloper: "Dasturchi",
    portfolioEyebrow: "Biz nimalar qilamiz",
    portfolioTitle: "Ishlarimizdan namunalar",
    portfolioDescription: "E’tibor, mahorat va qiziquvchanlik bilan yaratilgan ishlarimizdan tanlov.",
    portfolioProject: "Ijodiy loyiha",
    portfolioCaption: "Did bilan yaratilgan",
    clientsEyebrow: "Mamnun mijozlar",
    clientsTitle: "Mijozlarimiz fikri",
    clientRoleDesigner: "Grafik dizayner",
    clientRoleDeveloper: "Dasturchi",
    clientQuoteOne: "E’tiborli jamoa loyihaning har bir bosqichini sodda va yoqimli qildi.",
    clientQuoteTwo: "Ijodkor, ishonchli va muhim tafsilotlarga e’tiborli jamoa.",
    clientQuoteThree: "Ular bizni diqqat bilan tinglab, g‘oyalarimizni aniq vizual hikoyaga aylantirishdi.",
    clientQuoteFour: "Puxta natija, samimiy e’tibor va ravon muloqot bilan tayyorlandi.",
    blogEyebrow: "Hikoyalarimiz",
    blogTitle: "So‘nggi maqolalar",
    monthMay: "May",
    blogTitleOne: "Ijodiy jamoaning bir kuni",
    blogTitleTwo: "Kundalik tafsilotlardan ilhom topish",
    blogTitleThree: "Diqqat va ijod uchun musiqa",
    footerDateMay15: "15-may, 2026",
    footerDateMay14: "14-may, 2026",
    footerDateMay12: "12-may, 2026",
    blogDescriptionOne: "Yaxshi g‘oyalar o‘sishiga yordam beradigan odatlar haqida.",
    blogDescriptionTwo: "Qiziquvchan bo‘lib, atrofdagi narsalarni payqash haqida.",
    blogDescriptionThree: "Sokin va unumli ish kuni uchun sevimli kuylarimiz.",
    openMap: "Xaritani ochish",
    footerDescription: "Biz g‘oyalarni mazmunli raqamli tajribalarga aylantiradigan ijodiy jamoamiz.",
    followers: "kuzatuvchi",
    followUs: "Bizni kuzating:",
    emailAddress: "Elektron pochta manzili",
    emailPlaceholder: "Elektron pochtangiz...",
    subscribe: "Obuna bo‘lish",
    subscribeDemo: "Bu namoyish formasi: obunani yuborish uchun serverga ulanmagan.",
    subscribeInvalid: "Iltimos, to‘g‘ri elektron pochta manzilini kiriting.",
    footerBlogs: "Maqolalar",
    instagram: "Instagram",
    viewMorePhotos: "Ko‘proq rasmlarni ko‘rish",
    copyright: "© 2026 MoGo. Barcha huquqlar himoyalangan."
  },
  en: {
    languageName: "Choose language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNavigation: "Main navigation",
    about: "About",
    service: "Service",
    work: "Work",
    blog: "Blog",
    contact: "Contact",
    contacts: "Contacts",
    eyebrow: "Creative Template",
    welcome: "Welcome",
    toMogo: "to MoGo",
    learnMore: "Learn more",
    intro: "Intro",
    whatWeDo: "What we do",
    storyTitle: "Story about us",
    storyDescription: "We turn ideas into meaningful digital experiences. Our team brings creativity, care, and attention to detail to every project.",
    superTeam: "Super team",
    statProjects: "Web design projects",
    statClients: "Happy clients",
    statAwards: "Award winner",
    statCoffee: "Cup of coffee",
    statMembers: "Members",
    weWorkWith: "We work with",
    servicesTitle: "Amazing services",
    photography: "Photography",
    webDesign: "Web design",
    creativity: "Creativity",
    seo: "SEO",
    cssHtml: "CSS/HTML",
    digital: "Digital",
    serviceDescriptionOne: "Meaningful and memorable photography for your project.",
    serviceDescriptionTwo: "Beautiful, accessible websites that work on every device.",
    serviceDescriptionThree: "Fresh ideas and solutions that make your brand stand out.",
    serviceDescriptionFour: "Improve your visibility in search results.",
    serviceDescriptionFive: "Careful code and structure for modern websites.",
    serviceDescriptionSix: "Digital solutions and creative support for your business.",
    forAllDevices: "For all devices",
    uniqueDesign: "Unique design",
    serviceEyebrow: "Service",
    whatWeDoTitle: "What we do",
    whatWeDoDescription: "We turn every idea into thoughtful design and a seamless digital experience for your audience.",
    accordionPhotography: "We create meaningful, memorable images for every project. With a careful eye for light, composition, and detail, we help tell your brand's story in a natural and compelling way.",
    accordionCreativity: "We bring fresh ideas and thoughtful creative direction to every project, shaping a visual identity that feels distinctive and clear.",
    accordionWebDesign: "We create clear, modern websites that are easy to use and work beautifully on every screen.",
    previousTestimonial: "Previous testimonial",
    nextTestimonial: "Next testimonial",
    testimonialOne: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”",
    testimonialTwo: "“The team understood our idea straight away and turned it into a distinctive, carefully crafted digital experience.”",
    testimonialThree: "“A wonderful collaboration, clear communication, and care in every detail. We look forward to working together again.”",
    testimonialAuthorOne: "John Doe",
    testimonialAuthorTwo: "Jane Smith",
    testimonialAuthorThree: "Alex Morgan",
    teamEyebrow: "Who we are",
    teamTitle: "Meet our team",
    teamDescription: "A curious, creative team bringing thoughtful ideas to life.",
    teamRoleDesign: "Graphic design",
    teamRoleBranding: "Branding/UX design",
    teamRoleDeveloper: "Developer",
    portfolioEyebrow: "What we do",
    portfolioTitle: "Some of our work",
    portfolioDescription: "A selection of ideas shaped with care, craft, and a little curiosity.",
    portfolioProject: "Creative project",
    portfolioCaption: "Beautifully designed",
    clientsEyebrow: "Happy clients",
    clientsTitle: "What people say",
    clientRoleDesigner: "Graphic Designer",
    clientRoleDeveloper: "Developer",
    clientQuoteOne: "A thoughtful team that made every stage of the project feel simple and enjoyable.",
    clientQuoteTwo: "Creative, reliable, and attentive to all the details that matter.",
    clientQuoteThree: "They listened closely and turned our ideas into a clear visual story.",
    clientQuoteFour: "A polished result, delivered with genuine care and clear communication.",
    blogEyebrow: "Our stories",
    blogTitle: "Latest blog",
    monthMay: "May",
    blogTitleOne: "A day in the life of a creative team",
    blogTitleTwo: "Finding inspiration in everyday details",
    blogTitleThree: "Music that helps us focus and create",
    footerDateMay15: "May 15, 2026",
    footerDateMay14: "May 14, 2026",
    footerDateMay12: "May 12, 2026",
    blogDescriptionOne: "A few notes on the little habits that help good ideas grow.",
    blogDescriptionTwo: "How to stay curious and notice the things around you.",
    blogDescriptionThree: "Our favorite sounds for a calm and productive workday.",
    openMap: "Open map",
    footerDescription: "We are a creative team turning thoughtful ideas into engaging digital experiences.",
    followers: "followers",
    followUs: "Follow us:",
    emailAddress: "Email address",
    emailPlaceholder: "Your email...",
    subscribe: "Subscribe",
    subscribeDemo: "This is a demo form: no server is connected to submit your subscription.",
    subscribeInvalid: "Please enter a valid email address.",
    footerBlogs: "Blogs",
    instagram: "Instagram",
    viewMorePhotos: "View more photos",
    copyright: "© 2026 MoGo. All rights reserved."
  },
  hu: {
    languageName: "Válasszon nyelvet",
    menuOpen: "Menü megnyitása",
    menuClose: "Menü bezárása",
    mainNavigation: "Fő navigáció",
    about: "Rólunk",
    service: "Szolgáltatás",
    work: "Munkáink",
    blog: "Blog",
    contact: "Kapcsolat",
    contacts: "Kapcsolatok",
    eyebrow: "Kreatív sablon",
    welcome: "Üdvözlünk",
    toMogo: "a MoGónál",
    learnMore: "Tudj meg többet",
    intro: "Bevezető",
    whatWeDo: "Amivel foglalkozunk",
    storyTitle: "A történetünk",
    storyDescription: "Az ötletekből tartalmas digitális élményeket alkotunk. Csapatunk minden projekthez kreativitással, odafigyeléssel és gondossággal közelít.",
    superTeam: "Szuper csapat",
    statProjects: "Webdesign projektek",
    statClients: "Elégedett ügyfelek",
    statAwards: "Díjak",
    statCoffee: "Csésze kávé",
    statMembers: "Csapattagok",
    weWorkWith: "Amivel foglalkozunk",
    servicesTitle: "Nagyszerű szolgáltatások",
    photography: "Fotózás",
    webDesign: "Webdesign",
    creativity: "Kreativitás",
    seo: "SEO",
    cssHtml: "CSS/HTML",
    digital: "Digitális megoldások",
    serviceDescriptionOne: "Tartalmas és emlékezetes fotók az Ön projektjéhez.",
    serviceDescriptionTwo: "Esztétikus, akadálymentes weboldalak minden eszközre.",
    serviceDescriptionThree: "Friss ötletek és megoldások, amelyek kiemelik márkáját.",
    serviceDescriptionFour: "Növelje láthatóságát a keresési találatok között.",
    serviceDescriptionFive: "Gondos kód és felépítés modern weboldalakhoz.",
    serviceDescriptionSix: "Digitális megoldások és kreatív támogatás vállalkozásának.",
    forAllDevices: "Minden eszközre",
    uniqueDesign: "Egyedi dizájn",
    serviceEyebrow: "Szolgáltatás",
    whatWeDoTitle: "Amivel foglalkozunk",
    whatWeDoDescription: "Minden ötletből átgondolt dizájnt és közönsége számára zökkenőmentes digitális élményt alkotunk.",
    accordionPhotography: "Minden projekthez tartalmas és emlékezetes képeket készítünk. A fényre, a kompozícióra és a részletekre figyelve természetesen és hatásosan meséljük el márkája történetét.",
    accordionCreativity: "Friss ötletekkel és átgondolt kreatív irányokkal olyan vizuális arculatot formálunk, amely egyedi és könnyen felismerhető.",
    accordionWebDesign: "Letisztult, modern és könnyen használható weboldalakat készítünk, amelyek minden képernyőn jól működnek.",
    previousTestimonial: "Előző vélemény",
    nextTestimonial: "Következő vélemény",
    testimonialOne: "„A projekt során a csapat figyelmes és kreatív volt. Az eredmény nemcsak szép, hanem rendkívül könnyen használható is.”",
    testimonialTwo: "„A csapat azonnal megértette az elképzelésünket, és egyedi, gondosan kidolgozott digitális élménnyé formálta.”",
    testimonialThree: "„Nagyszerű együttműködés, világos kommunikáció és odafigyelés minden részletre. Várjuk a következő közös munkát.”",
    testimonialAuthorOne: "John Doe",
    testimonialAuthorTwo: "Jane Smith",
    testimonialAuthorThree: "Alex Morgan",
    teamEyebrow: "Kik vagyunk",
    teamTitle: "Ismerje meg csapatunkat",
    teamDescription: "Kíváncsi és kreatív csapat, amely életre kelti az átgondolt ötleteket.",
    teamRoleDesign: "Grafikus",
    teamRoleBranding: "Márka-/UX-tervező",
    teamRoleDeveloper: "Fejlesztő",
    portfolioEyebrow: "Amivel foglalkozunk",
    portfolioTitle: "Munkáinkból",
    portfolioDescription: "Válogatás gondosan, szakértelemmel és kíváncsisággal megvalósított ötleteinkből.",
    portfolioProject: "Kreatív projekt",
    portfolioCaption: "Gondosan megtervezve",
    clientsEyebrow: "Elégedett ügyfelek",
    clientsTitle: "Rólunk mondták",
    clientRoleDesigner: "Grafikus",
    clientRoleDeveloper: "Fejlesztő",
    clientQuoteOne: "Figyelmes csapat, amely egyszerűvé és élvezetessé tette a projekt minden szakaszát.",
    clientQuoteTwo: "Kreatív, megbízható csapat, amely minden fontos részletre odafigyel.",
    clientQuoteThree: "Figyelmesen meghallgattak minket, és világos vizuális történetté formálták ötleteinket.",
    clientQuoteFour: "Igényes eredmény, valódi odafigyeléssel és egyértelmű kommunikációval.",
    blogEyebrow: "Történeteink",
    blogTitle: "Legfrissebb blog",
    monthMay: "Máj.",
    blogTitleOne: "Egy kreatív csapat mindennapjai",
    blogTitleTwo: "Inspiráció a hétköznapi részletekben",
    blogTitleThree: "Zene, amely segít alkotni és figyelni",
    footerDateMay15: "2026. máj. 15.",
    footerDateMay14: "2026. máj. 14.",
    footerDateMay12: "2026. máj. 12.",
    blogDescriptionOne: "Apró szokások, amelyek segítenek kibontakoztatni a jó ötleteket.",
    blogDescriptionTwo: "Hogyan maradjunk kíváncsiak, és vegyük észre a körülöttünk lévő dolgokat.",
    blogDescriptionThree: "Kedvenc zenéink egy nyugodt és eredményes munkanaphoz.",
    openMap: "Térkép megnyitása",
    footerDescription: "Kreatív csapat vagyunk, amely átgondolt ötletekből tartalmas digitális élményeket alkot.",
    followers: "követő",
    followUs: "Kövessen minket:",
    emailAddress: "E-mail-cím",
    emailPlaceholder: "Az Ön e-mail-címe...",
    subscribe: "Feliratkozás",
    subscribeDemo: "Ez egy bemutató űrlap: a feliratkozás elküldéséhez nincs szerver csatlakoztatva.",
    subscribeInvalid: "Kérjük, adjon meg egy érvényes e-mail-címet.",
    footerBlogs: "Blogok",
    instagram: "Instagram",
    viewMorePhotos: "További fotók",
    copyright: "© 2026 MoGo. Minden jog fenntartva."
  }
};

const languagePicker = document.querySelector("#language");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const menuLabel = menuToggle.querySelector("[data-i18n]");
const accordion = document.querySelector("[data-accordion]");
const testimonialQuote = document.querySelector("#testimonial-quote");
const testimonialAuthor = document.querySelector("#testimonial-author");
const testimonialSlides = [
  ["testimonialOne", "testimonialAuthorOne"],
  ["testimonialTwo", "testimonialAuthorTwo"],
  ["testimonialThree", "testimonialAuthorThree"]
];
let activeTestimonial = 0;

function applyLanguage(language) {
  const messages = translations[language];

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = messages[element.dataset.i18n];
    if (message) {
      element.textContent = message;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const message = messages[element.dataset.i18nAria];
    if (message) {
      element.setAttribute("aria-label", message);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const message = messages[element.dataset.i18nPlaceholder];
    if (message) {
      element.setAttribute("placeholder", message);
    }
  });

  updateMenuLabel();
  renderTestimonial();
}

function updateMenuLabel() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuLabel.textContent = translations[languagePicker.value][isOpen ? "menuClose" : "menuOpen"];
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  updateMenuLabel();
}

languagePicker.addEventListener("change", (event) => {
  applyLanguage(event.currentTarget.value);
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
  updateMenuLabel();
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

accordion.addEventListener("click", (event) => {
  const trigger = event.target.closest(".accordion__trigger");
  if (!trigger) {
    return;
  }

  const item = trigger.closest(".accordion__item");
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";

  accordion.querySelectorAll(".accordion__item").forEach((accordionItem) => {
    const accordionTrigger = accordionItem.querySelector(".accordion__trigger");
    const accordionPanel = document.getElementById(accordionTrigger.getAttribute("aria-controls"));
    const isOpen = shouldOpen && accordionItem === item;

    accordionItem.classList.toggle("is-open", isOpen);
    accordionTrigger.setAttribute("aria-expanded", String(isOpen));
    accordionPanel.hidden = !isOpen;
  });
});

document.querySelectorAll("[data-testimonial-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const step = Number(button.dataset.testimonialStep);
    const target = button.dataset.testimonialTarget;
    if (target === "secondary") {
      secondaryTestimonial = (secondaryTestimonial + step + testimonialSlides.length) % testimonialSlides.length;
    } else {
      activeTestimonial = (activeTestimonial + step + testimonialSlides.length) % testimonialSlides.length;
    }
    renderTestimonial(target);
  });
});

let secondaryTestimonial = 1;

function renderTestimonial(target = "all") {
  const messages = translations[languagePicker.value];
  const render = (index, quoteElement, authorElement) => {
    const [quoteKey, authorKey] = testimonialSlides[index];
    quoteElement.textContent = messages[quoteKey];
    authorElement.textContent = messages[authorKey];
  };

  if (target === "all" || target === "primary") {
    render(activeTestimonial, testimonialQuote, testimonialAuthor);
  }

  if (target === "all" || target === "secondary") {
    render(
      secondaryTestimonial,
      document.querySelector("#testimonial-quote-secondary"),
      document.querySelector("#testimonial-author-secondary")
    );
  }
}

const subscribeForm = document.querySelector("#subscribe-form");
const subscribeEmail = document.querySelector("#subscribe-email");
const subscribeMessage = document.querySelector("#subscribe-message");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messages = translations[languagePicker.value];

  if (!subscribeEmail.validity.valid || !subscribeEmail.value.trim()) {
    subscribeMessage.textContent = messages.subscribeInvalid;
    subscribeEmail.focus();
    return;
  }

  subscribeMessage.textContent = messages.subscribeDemo;
});

const statNumbers = document.querySelectorAll(".stat__number[data-count]");
const numberFormatter = new Intl.NumberFormat();
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const animateStat = (element) => {
  const target = Number(element.dataset.count);
  if (prefersReducedMotion) {
    element.textContent = numberFormatter.format(target);
    return;
  }

  const startedAt = performance.now();
  const duration = 1200;
  const update = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    element.textContent = numberFormatter.format(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  requestAnimationFrame(update);
};

if ("IntersectionObserver" in window) {
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach((element) => statsObserver.observe(element));
} else {
  statNumbers.forEach((element) => {
    element.textContent = numberFormatter.format(Number(element.dataset.count));
  });
}

applyLanguage(languagePicker.value);
