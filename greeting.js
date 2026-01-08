function greetingTime() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour >= 5 && hour <= 11) {
    greeting = "Selamat Pagi";
  } else if (hour >= 12 && hour <= 14) {
    greeting = "Selamat Siang";
  } else if (hour >= 15 && hour <= 17) {
    greeting = "Selamat Sore";
  } else {
    greeting = "Selamat Malam";
  }

  document.getElementById("greeting").innerText = greeting;
}
