// Дата, до якої рахується таймер
const targetDate = new Date("2024-10-26T11:00:00+02:00").getTime();
const timerElement = document.querySelector(".date__timer");

function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        timerElement.textContent = "00:00:00:00";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Форматування і оновлення таймера
    timerElement.textContent = `${days.toString().padStart(2, "0")}:${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

// Оновлюємо таймер кожну секунду
const countdownInterval = setInterval(updateTimer, 1000);
updateTimer();

