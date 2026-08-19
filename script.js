document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const heroVisual = document.querySelector(".hero-visual");
const reveals = document.querySelectorAll(".reveal");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  header?.style.setProperty("--scroll-progress", progress.toString());
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const canTilt = window.matchMedia("(pointer: fine)").matches
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroVisual && canTilt) {
  let tiltFrame;
  heroVisual.addEventListener("pointermove", (event) => {
    if (tiltFrame) cancelAnimationFrame(tiltFrame);
    tiltFrame = requestAnimationFrame(() => {
      const bounds = heroVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroVisual.style.setProperty("--tilt-x", `${(-y * 2.4).toFixed(2)}deg`);
      heroVisual.style.setProperty("--tilt-y", `${(x * 2.4).toFixed(2)}deg`);
    });
  });

  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--tilt-x", "0deg");
    heroVisual.style.setProperty("--tilt-y", "0deg");
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px" }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}

form?.addEventListener("submit", (event) => {
  const action = form.getAttribute("action") || "";
  if (action.includes("REPLACE_WITH_YOUR_FORM_ID")) {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent =
        "The contact form needs its Formspree ID before it can send. Please use one of the contact details beside the form.";
    }
  }
});
