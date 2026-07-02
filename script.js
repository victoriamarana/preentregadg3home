/* COLOR LAB */

const colorButtons = document.querySelectorAll(".color-buttons button");
const furniture = document.getElementById("colorFurniture");

if (furniture) {
  furniture.src = "./images/MUEBLE VERDE.png";
  furniture.style.opacity = "1";
  furniture.style.transform = "scale(1)";
}

if (colorButtons.length && furniture) {
  colorButtons.forEach(button => {
    button.addEventListener("click", () => {
      furniture.style.opacity = "0";
      furniture.style.transform = "scale(.97)";

      setTimeout(() => {
        furniture.src = button.dataset.image;

        furniture.onload = () => {
          furniture.style.opacity = "1";
          furniture.style.transform = "scale(1)";
        };
      }, 150);
    });
  });
}

/* HERO COMPARADOR */

const compareRange = document.getElementById("compareRange");
const compareOld = document.getElementById("compareOld");
const compareLine = document.getElementById("compareLine");

if (compareRange && compareOld && compareLine) {
  compareRange.addEventListener("input", () => {
    const value = compareRange.value;
    compareOld.style.clipPath = `inset(0 0 0 ${value}%)`;
    compareLine.style.left = value + "%";
  });
}

/* TESTIMONIOS */

const testimonialData = [
  {
    text: "“Aprendí que restaurar no era solamente lijar, sino diseñar.”",
    name: "— Martina"
  },
  {
    text: "“Me fui con una pieza terminada y muchas ganas de seguir creando.”",
    name: "— Camila"
  },
  {
    text: "“El color cambió por completo la forma en que miro los muebles.”",
    name: "— Julieta"
  }
];

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialDots = document.querySelectorAll(".dot");

if (testimonialText && testimonialName && testimonialDots.length) {
  testimonialDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.testimonial);

      testimonialText.style.opacity = "0";
      testimonialText.style.transform = "translateY(12px)";

      setTimeout(() => {
        testimonialText.textContent = testimonialData[index].text;
        testimonialName.textContent = testimonialData[index].name;

        testimonialDots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        testimonialText.style.opacity = "1";
        testimonialText.style.transform = "translateY(0)";
      }, 250);
    });
  });
}

/* MUEBLES CÁPSULA */

const capsuleTrack = document.querySelector(".capsule-track");
const capsulePrev = document.querySelector(".capsule-prev");
const capsuleNext = document.querySelector(".capsule-next");

if (capsuleTrack && capsulePrev && capsuleNext) {
  let capsuleIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 620) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateCapsuleCarousel() {
    const items = document.querySelectorAll(".capsule-item");
    const gap = 24;
    const itemWidth = items[0].offsetWidth + gap;
    const maxIndex = items.length - getVisibleCards();

    if (capsuleIndex < 0) capsuleIndex = 0;
    if (capsuleIndex > maxIndex) capsuleIndex = maxIndex;

    capsuleTrack.style.transform = `translateX(-${capsuleIndex * itemWidth}px)`;
  }

  capsuleNext.addEventListener("click", () => {
    capsuleIndex++;
    updateCapsuleCarousel();
  });

  capsulePrev.addEventListener("click", () => {
    capsuleIndex--;
    updateCapsuleCarousel();
  });

  window.addEventListener("resize", updateCapsuleCarousel);

  updateCapsuleCarousel();
}

/* COMPARADOR CURSO */

const compareRangeCourse = document.getElementById("compareRangeCourse");
const compareOldCourse = document.getElementById("compareOldCourse");
const compareLineCourse = document.getElementById("compareLineCourse");

if (
    compareRangeCourse &&
    compareOldCourse &&
    compareLineCourse
) {

    compareRangeCourse.addEventListener("input", () => {

        const value = compareRangeCourse.value;

        compareOldCourse.style.clipPath =
            `inset(0 0 0 ${value}%)`;

        compareLineCourse.style.left = value + "%";

    });

}

/* HERO PARALLAX */

const courseHeroImage = document.querySelector(".course-hero-image");

if (courseHeroImage && window.innerWidth > 620) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;

    courseHeroImage.style.translate = `${x}px ${y}px`;
  });
}

/* MENÚ MOBILE */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });
}

/* PROYECTOS MOBILE */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  const flip = card.querySelector(".project-flip");

  if (flip) {
    flip.addEventListener("click", (e) => {
      if (window.innerWidth <= 620) {
        e.preventDefault();
        e.stopPropagation();

        card.classList.toggle("active");
      }
    });
  }
});