document.addEventListener("DOMContentLoaded", function () {
  const seatsContainer = document.querySelector(".seats-container");
  let seatNumber = 1;
  for (let i = 0; i < 50; i++) {
    const seatDiv = document.createElement("div");
    seatDiv.className =
      "seat " + (Math.random() < 0.3 ? "booked" : "available");
    seatDiv.textContent = seatNumber++;

    seatsContainer.appendChild(seatDiv);
  }
});

function filterAvailableSeats(show) {
  const seats = Array.from(document.querySelectorAll(".seat"));

  const availableSeats = seats.filter((seat) =>
    seat.classList.contains("available"),
  );

  if (show) {
    availableSeats.forEach((seat) => (seat.style.border = "2px solid green"));
  } else {
    availableSeats.forEach((seat) => (seat.style.border = "none"));
  }
}
