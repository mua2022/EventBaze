function loadEvents() {
  const container = document.getElementById("event-list");
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  const now = new Date();

  events
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(e => {
      const div = document.createElement("div");
      div.className = "event";
      div.innerHTML = `
        <h2>${e.title}</h2>
        <img src="${e.poster}" alt="${e.title}" />
        <p><strong>Date:</strong> ${e.date}</p>
        <p><strong>Description:</strong> ${e.description}</p>
        <p><strong>Host:</strong> ${e.host}</p>
        <p><strong>Stakeholders:</strong> ${e.stakeholders.join(", ")}</p>
      `;
      container.appendChild(div);
    });
}

window.onload = loadEvents;
