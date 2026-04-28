const documents = {
  "8076BS01": {
    authority: "Certificat de responsabilité civile automobile",
    plate: "8076BS01",
    chassis: "KE2AW-100172",
    trailer: "Non",
    seats: "4",
    startDate: "25/07/2026",
    endDate: "25/07/2027"
  },
  "6474BT01": {
    authority: "Certificat de responsabilité civile automobile",
    plate: "6474BT01",
    chassis: "AZR600482860",
    trailer: "Non",
    seats: "8",
    startDate: "24/01/2026",
    endDate: "22/07/2026"
  }
};

const form = document.getElementById("verifyForm");
const input = document.getElementById("referenceInput");
const resultCard = document.getElementById("resultCard");
const notFoundCard = document.getElementById("notFoundCard");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const ref = input.value.trim().toUpperCase();
  const doc = documents[ref];

  resultCard.classList.add("hidden");
  notFoundCard.classList.add("hidden");

  if (!doc) {
    notFoundCard.classList.remove("hidden");
    return;
  }

  document.getElementById("authority").textContent = doc.authority;
  document.getElementById("plate").textContent = doc.plate;
  document.getElementById("chassis").textContent = doc.chassis;
  document.getElementById("trailer").textContent = doc.trailer;
  document.getElementById("seats").textContent = doc.seats;
  document.getElementById("startDate").textContent = doc.startDate;
  document.getElementById("endDate").textContent = doc.endDate;

  resultCard.classList.remove("hidden");
});

function resetSearch() {
  input.value = "";
  resultCard.classList.add("hidden");
  notFoundCard.classList.add("hidden");
  input.focus();
}
