function startCountdown(seconds) {
  const intervalId = setInterval(() => {
    console.log(seconds);

    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      console.log("⏰ Time's up!");
    }
  }, 1000);
}

startCountdown(5);
