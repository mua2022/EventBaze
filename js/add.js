document.getElementById("event-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const host = document.getElementById("host").value;
  const stakeholders = document.getElementById("stakeholders").value.split(',');
  const posterInput = document.getElementById("poster");
  const reader = new FileReader();

  reader.onload = function() {
    const poster = reader.result;
    const event = { title, date, description, host, stakeholders, poster };
    let events = JSON.parse(localStorage.getItem("events") || "[]");
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
    alert("Event added successfully!");
    window.location.href = "index.html";
  };

  if (posterInput.files[0]) {
    reader.readAsDataURL(posterInput.files[0]);
  }
});
