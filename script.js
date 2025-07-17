// Contact form validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for your message, " + name + "!");
  form.reset();
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Toggle project task details
function toggleDetails(id) {
  const section = document.getElementById(id);
  const all = document.querySelectorAll(".project-details");

  all.forEach(div => {
    if (div.id !== id) div.style.display = "none";
  });

  section.style.display = section.style.display === "block" ? "none" : "block";
}
