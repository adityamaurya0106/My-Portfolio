const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});
/*------------------Menu--------------------*/
const navMenu= document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle');

/*Menu Show - Hidden */
navToggle.addEventListener ('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});
/*===================Remove Menu Mobile======================*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
navToggle.classList.remove('animate-toggle');
navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction))
/*======================= Change Background Header ===================*/

const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 20
  ? header.classList.add('bg-header')
  : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);
/*=================== Scroll Selection Active Link =======================*/
const sections = document.querySelectorAll('selection[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive)


/*==================== Services Swiper =======================*/
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1208: {
          slidesPerView: 3,
        },
      }
});
/*=================== Mixit Filter Portfolio ====================*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});
/* Active Work */
const linkWork = document.querySelectorAll('.work-item');
function activeWork () {
  linkWork.forEach((a) => {
    a.classList.remove ('active-work');
  });

  this.classList.add('active-work');
}
/*================= Resume ===================*/
const accordionItems = document.querySelectorAll ('.resume-item');
accordionItems.forEach((item) => {
  const header = item.querySelector('.resume-header'),
  content = item.querySelector('.resume-content'),
  icon =item.querySelector('.resume-icon i')

  header.addEventListener ('click', () => {
    const isOpen = item.classList.toggle('according-open');
    content.style.height = isOpen ? content.scrollHeight + 'px' : '0';
    icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

    accordionItems.forEach ((otherItem) => {
      if(otherItem !== item && otherItem.classList.contains('according-open')) {
        otherItem.querySelector('.resume-content').style.height = '0';
        otherItem.querySelector ('.resume icon i').classList = 'ri-add-line';
        otherItem.classList.remove('accordion-open');
      }
    })
  })
})
/*=============== Testimonial swiper ================*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 32,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1208: {
          slidesPerView: 3,
        },
      }
});
/* ========================== Email JS =====================*/
// ✅ Use the correct public key
emailjs.init("rLS_w3csxMD7BmIuj");

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();

  const name = contactName.value.trim();
  const email = contactEmail.value.trim();
  const subject = contactSubject.value.trim();
  const msg = contactMessage.value.trim();

  if (!name || !email || !subject || !msg) {
    message.className = "message color-red";
    message.textContent = "❌ Please fill in all required fields *";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
    return;
  }

  emailjs
    .sendForm("service_3m82nev", "template_30hunya", contactForm)
    .then(() => {
      message.className = "message color-first";
      message.textContent = "✔ Message sent successfully!";
      contactForm.reset();

      setTimeout(() => {
        message.textContent = "";
      }, 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      message.className = "message color-red";
      message.textContent = "❌ Oops! Something went wrong.";

      setTimeout(() => {
        message.textContent = "";
      }, 5000);
    });
};

contactForm.addEventListener("submit", sendEmail);

/*================ Style Switcher=====================*/
const styleSwitcher = document.getElementById ('style-switcher'),
switcherToggle = document.getElementById('switcher-toggle'),
switcherClose = document.getElementById('switcher-close');

/* Switcher Show */
switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.add('show-switcher');
});

/* Theme Color */
switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
});

/*============theme colors==================*/
const colors = document.querySelectorAll('.style-switcher-color');

colors.forEach((color) => {
  color.addEventListener('click', () => {
    const activeColor = color.style.getPropertyValue('--hue');

    colors.forEach((c) => c.classList.remove('active-color'));
    color.classList.add('active-color');

    // Update global --hue variable
    document.documentElement.style.setProperty('--hue', activeColor);
  });
});

/*===================Light / Dark MOde ====================*/
let currentTheme = 'Light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener('change', () => {
    currentTheme = input.value;  // ✅ FIXED LINE
    document.body.className = currentTheme;
  });
});


