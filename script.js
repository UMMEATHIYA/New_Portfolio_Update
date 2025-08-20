/*
  Main JavaScript to bring the interactive portfolio to life. This
  script binds together the data defined in data.js with the DOM
  structure laid out in index.html. It also handles animations such
  as typewriter effects, content reveal on scroll and utility
  interactions like the scroll‑to‑top button.
*/

// Wait until the DOM is fully parsed before manipulating it
document.addEventListener('DOMContentLoaded', () => {
  // Initialise typing effect for the hero section
  initTypewriter();
  // Insert profile name and tagline into the hero
  const nameEl = document.getElementById('profileName');
  const taglineEl = document.getElementById('profileTagline');
  if (nameEl) nameEl.textContent = profile.name;
  if (taglineEl) taglineEl.textContent = profile.tagline;
  // Populate each section with data
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCertifications();
  renderLearning();
  renderContact();
  // Set up intersection observer for reveal animations
  initRevealAnimations();
  // Hook up the scroll down arrow
  initScrollDown();
  // Configure scroll‑to‑top behaviour
  initScrollTop();
});

// Typewriter effect for the hero section.  Cycles through an
// array of phrases, typing them out character by character and
// erasing before moving to the next phrase.  Adjust typing and
// deleting speeds below to customise the feel.
function initTypewriter() {
  const phrases = [
    "👋 Hey! I'm Umme",
    "💻 Welcome to my portfolio!",
    "✨ Let’s build AI that empowers humans! ✨",
    "✨I build GenAI systems that don’t just predict, but decide, adapt, and scale in production"
  ];
  const typedEl = document.querySelector('.typed');
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[lineIndex];
    if (!isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1500);
        return;
      }
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % phrases.length;
      }
    }
    const delay = isDeleting ? 50 : 100;
    setTimeout(type, delay);
  }
  type();
}


function renderExperience() {
  const expSection = document.querySelector('.experience');
  if (!expSection) return;
  expSection.innerHTML = '<h2 class="section-title reveal">Experience</h2>';
  const timeline = document.createElement('div');
  timeline.classList.add('timeline');

  experiences.forEach((item) => {
    const entry = document.createElement('div');
    entry.classList.add('timeline-item', 'reveal');

    const h3 = document.createElement('h3');
    h3.textContent = `${item.title} — ${item.organisation}`;
    entry.appendChild(h3);

    const h4 = document.createElement('h4');
    h4.textContent = item.location;
    entry.appendChild(h4);

    const span = document.createElement('span');
    span.textContent = item.timeframe;
    entry.appendChild(span);

    const ul = document.createElement('ul');
    item.bullets.forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
    entry.appendChild(ul);

    // Photo gallery for DePaul experience
    if (item.photos && item.photos.length > 0) {
      const gallery = document.createElement('div');
      gallery.className = 'photo-gallery';
      item.photos.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${item.title} photo`;
        gallery.appendChild(img);
      });
      entry.appendChild(gallery);
    }

    timeline.appendChild(entry);
  });

  expSection.appendChild(timeline);
}


function renderTimeline() {
  const timeline = document.querySelector("#experience .timeline");
  timeline.innerHTML = "";
  experiences.forEach(exp => {
    // Create the timeline item container
    const item = document.createElement("div");
    item.className = "timeline-item";

    // Create bullet/marker if your timeline uses one
    const marker = document.createElement("div");
    marker.className = "timeline-marker";
    item.appendChild(marker);

    // Create content container
    const content = document.createElement("div");
    content.className = "timeline-content";

    // Title, company and dates
    const heading = document.createElement("h3");
    heading.textContent = `${exp.title} — ${exp.company}`;
    content.appendChild(heading);

    const dates = document.createElement("span");
    dates.className = "timeline-dates";
    dates.textContent = exp.duration;
    content.appendChild(dates);

    // Bullet list of details
    const list = document.createElement("ul");
    exp.details.forEach(detail => {
      const li = document.createElement("li");
      li.textContent = detail;
      list.appendChild(li);
    });
    content.appendChild(list);

    // Photo gallery if defined
    if (exp.photos && exp.photos.length > 0) {
      const gallery = document.createElement("div");
      gallery.className = "photo-gallery";
      exp.photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Experience photo";
        gallery.appendChild(img);
      });
      content.appendChild(gallery);
    }

    // Append content to item and item to timeline
    item.appendChild(content);
    timeline.appendChild(item);
  });
}





// Render the About section using the profile summary
function renderAbout() {
  const aboutSection = document.querySelector('.about');
  if (!aboutSection) return;
  // Clear any existing content
  aboutSection.innerHTML = '<h2 class="section-title reveal">About Me</h2>';
  profile.summary.forEach((para) => {
    const p = document.createElement('p');
    p.textContent = para;
    p.classList.add('reveal');
    aboutSection.appendChild(p);
  });
  // Add location and current role info
  const details = document.createElement('p');
  details.classList.add('reveal');
  details.innerHTML = `<strong>Location:</strong> ${profile.location} &nbsp;|&nbsp; <strong>Current:</strong> ${profile.currentRole}`;
  aboutSection.appendChild(details);
  const previous = document.createElement('p');
  previous.classList.add('reveal');
  previous.innerHTML = `<strong>Previously:</strong> ${profile.previousRole}`;
  aboutSection.appendChild(previous);
}



// Render the projects grid
function renderProjects() {
  const projSection = document.querySelector('.projects');
  if (!projSection) return;
  projSection.innerHTML = '<h2 class="section-title reveal">Projects</h2>';
  const grid = document.createElement('div');
  grid.classList.add('project-grid');
  projects.forEach((proj) => {
    const card = document.createElement('div');
    card.classList.add('project-card', 'reveal');
    // Media
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('project-media');
    if (proj.media.type === 'video') {
      const iframe = document.createElement('iframe');
      iframe.src = proj.media.src;
      iframe.loading = 'lazy';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', proj.title);
      iframe.frameBorder = '0';
      iframe.referrerPolicy = 'no-referrer';
      mediaContainer.appendChild(iframe);
    } else if (proj.media.type === 'image') {
      const img = document.createElement('img');
      img.src = proj.media.src;
      img.alt = proj.title;
      mediaContainer.appendChild(img);
    }
    card.appendChild(mediaContainer);
    // Content
    const content = document.createElement('div');
    content.classList.add('project-content');
    const h4 = document.createElement('h4');
    h4.textContent = proj.title;
    content.appendChild(h4);
    const ul = document.createElement('ul');
    proj.bullets.forEach((line) => {
      const li = document.createElement('li');
      li.textContent = line;
      ul.appendChild(li);
    });
    content.appendChild(ul);
    card.appendChild(content);
    grid.appendChild(card);
  });
  projSection.appendChild(grid);
}

// Render skill badges grouped by category
function renderSkills() {
  const skillsSection = document.querySelector('.skills');
  if (!skillsSection) return;
  skillsSection.innerHTML = '<h2 class="section-title reveal">Skills & Tools</h2>';
  skillGroups.forEach((group) => {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('skills-group', 'reveal');
    const h3 = document.createElement('h3');
    h3.textContent = group.name;
    groupDiv.appendChild(h3);
    const badgesDiv = document.createElement('div');
    badgesDiv.classList.add('skill-badges');
    group.items.forEach((item) => {
      const img = document.createElement('img');
      img.src = item.badge;
      img.alt = item.label;
      badgesDiv.appendChild(img);
    });
    groupDiv.appendChild(badgesDiv);
    skillsSection.appendChild(groupDiv);
  });
}

// Render education credentials
function renderEducation() {
  const eduSection = document.querySelector('.education');
  if (!eduSection) return;
  eduSection.innerHTML = '<h2 class="section-title reveal">Education</h2>';
  education.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('education-item', 'reveal');
    const h3 = document.createElement('h3');
    h3.textContent = item.degree;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.innerHTML = `<strong>${item.institution}</strong> — ${item.location}`;
    div.appendChild(p);
    const span = document.createElement('span');
    span.textContent = `${item.timeframe} • GPA: ${item.gpa}`;
    div.appendChild(span);
    eduSection.appendChild(div);
  });
}

// Render certifications list
function renderCertifications() {
  const certSection = document.querySelector('.certifications');
  if (!certSection) return;
  certSection.innerHTML = '<h2 class="section-title reveal">Certifications</h2>';
  const ul = document.createElement('ul');
  ul.classList.add('certifications-list');
  certifications.forEach((cert) => {
    const li = document.createElement('li');
    li.textContent = cert;
    ul.appendChild(li);
  });
  certSection.appendChild(ul);
}

// Render learning topics
function renderLearning() {
  const learningSection = document.querySelector('.learning');
  if (!learningSection) return;
  learningSection.innerHTML = '<h2 class="section-title reveal">Currently Learning</h2>';
  const ul = document.createElement('ul');
  ul.classList.add('learning-list');
  learningTopics.forEach((topic) => {
    const li = document.createElement('li');
    li.textContent = topic;
    ul.appendChild(li);
  });
  learningSection.appendChild(ul);
}

// Render contact icons
function renderContact() {
  const contactSection = document.querySelector('.contact');
  if (!contactSection) return;
  contactSection.innerHTML = '<h2 class="section-title reveal">Get in Touch</h2>';
  const iconsDiv = document.createElement('div');
  iconsDiv.classList.add('contact-icons');
  contacts.forEach((c) => {
    const a = document.createElement('a');
    a.href = c.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    // Display the contact name as a link
    a.textContent = c.name;
    iconsDiv.appendChild(a);
  });
  contactSection.appendChild(iconsDiv);
}

// Initialise reveal animation observer
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

// Scroll down arrow functionality
function initScrollDown() {
  const arrow = document.querySelector('.scroll-down');
  if (!arrow) return;
  arrow.addEventListener('click', () => {
    // Find the next section after hero
    const next = document.querySelector('section.about');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Scroll to top button functionality
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}