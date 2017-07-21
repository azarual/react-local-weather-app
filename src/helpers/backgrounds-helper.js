function determineBackground(weather) {
  let imageUrl;

  switch (weather) {
    case "clear-day":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858126/clear-day_xwypfq.jpg";
      break;
    case "clear-night":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858126/clear-night_ge5jlx.jpg";
      break;
    case "partly-cloudy-day":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858126/partly-cloudy-day_vfbjvo.jpg";
      break;
    case "partly-cloudy-night":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858126/partly-cloudy-night_wilt8h.jpg";
      break;
    case "cloudy":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/cloudy_pe7puv.jpg";
      break;
    case "rain":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/rain_csormr.jpg";
      break;
    case "sleet":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/sleet_mv0gtu.jpg";
      break;
    case "snow":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/snow_div7km.jpg";
      break;
    case "wind":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/wind_uywlb9.jpg";
      break;
    case "fog":
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858125/fog_lqbkrk.jpg";
      break;
    default:
      imageUrl =
        "https://res.cloudinary.com/da8t1tjca/image/upload/v1497858126/clear-day_xwypfq.jpg";
  }
  return imageUrl;
}

export { determineBackground };
