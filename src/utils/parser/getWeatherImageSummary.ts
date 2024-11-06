export const getWeatherImageSummary = (summary: string) => {
  switch (summary) {
    case 'partlycloudy_day':
      return {
        text: 'Partly Cloudy Day',
        image: require('../../../assets/images/cloudy.jpeg'),
      };
    case 'partlycloudy_night':
      return {
        text: 'Partly Cloudy Night',
        image: require('../../../assets/images/cloudy.jpeg'),
      };
    case 'cloudy':
      return {
        text: 'Cloudy Night',
        image: require('../../../assets/images/cloudy.jpeg'),
      };
    case 'clearsky_day':
      return {
        text: 'Clear Sky',
        image: require('../../../assets/images/clearsky.jpeg'),
      };
    case 'clearsky_night':
      return {
        text: 'Clear Night',
        image: require('../../../assets/images/clearsky.jpeg'),
      };
    case 'fair_day':
      return {
        text: 'Fair Sky',
        image: require('../../../assets/images/sunny.jpeg'),
      };
    case 'sunny':
      return {
        text: 'Sunny',
        image: require('../../../assets/images/sunny.jpeg'),
      };
    case 'rainshowers_day':
      return {
        text: 'Rainy day',
        image: require('../../../assets/images/rain.jpeg'),
      };
    default:
      return {
        text: summary,
        image: require('../../../assets/images/sunny.jpeg'),
      };
  }
};
