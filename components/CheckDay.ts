 const CheckDay = () => {
  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const hour = date.getHours();
  let time = "";

  const checkHour = () => {
    if (hour >= 0 && hour <= 11) {
      time = "Morning";
    } else if (hour >= 12 && hour <= 17) {
      time = "Afternoon";
    } else if (hour >= 18 && hour <= 23) {
      time = "Evening";
    }
  };
  
  checkHour()

  return [today, day, time];
};

export default CheckDay
