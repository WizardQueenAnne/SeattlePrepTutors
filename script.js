document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const reveals = document.querySelectorAll(".reveal");
const year = document.querySelector("#year");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

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
