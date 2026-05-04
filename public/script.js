document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#carouselExampleControls");

  var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000,
    wrap: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const plantId = button.dataset.id;
      const url = `/add-to-bookmarks/${plantId}`;

      try {
        const response = await fetch(url, { method: "POST" });
        const result = await response.json();

        console.log("Server response:", result);

        if (result.success) {
          alert(result.message);
        } else {
          alert(result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred: " + error.message);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const deleteForms = document.querySelectorAll('form[action^="/delete-note"]');

  deleteForms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const action = form.getAttribute("action");

      try {
        const response = await fetch(action, { method: "POST" });
        const result = await response.json();

        if (result.success) {
          location.replace("/notes");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    });
  });
});
const chatbotIcon = document.getElementById("chatbotIcon");
const chatbotBox = document.getElementById("chatbotBox");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendBtn");

/* 🔘 Chatbot open / close */
chatbotIcon.addEventListener("click", () => {
  if (chatbotBox.style.display === "flex") {
    chatbotBox.style.display = "none";
  } else {
    chatbotBox.style.display = "flex";
  }
});

/* 🔘 Send button */
sendBtn.addEventListener("click", sendMessage);

/* ⌨️ Enter key */
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  /* 👤 User message */
  chatMessages.innerHTML += `
    <div>
      <span><b>You:</b></span> ${message}
    </div>
  `;

  chatInput.value = "";

  /* 🤖 API call */
  const response = await fetch("/chatbot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  /* 🤖 Bot reply */
  chatMessages.innerHTML += `
    <div class="bot-message">
    <span><b>🌿 Bot:</b></span>
    <div class="bot-text">${marked.parse(data.reply)}</div>
  </div>
  `;

  chatMessages.scrollTop = chatMessages.scrollHeight;
}