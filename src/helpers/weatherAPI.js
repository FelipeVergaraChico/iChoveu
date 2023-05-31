// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
//   seu código aquiaa
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await response.json();
  if (data.length === 0 || !term) {
    window.alert('Nenhuma cidade encontrada');
  }
  console.log(data);
  return data;
};

export const getWeatherByCity = async (cityURL) => {
//   seu código aqui
  if (cityURL !== undefined) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
    const data = await response.json();
    const { name } = data.location;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const { icon } = data.current.condition;
    const { country } = data.location;
    return { name, temp, condition, icon, country, cityURL };
  }
};

export const previsãoTempo = async (url) => {
  const days = 7;
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${url}&days=${days}`);
  const data = await response.json();
  const arrayDeDias = data.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
  }));
  return arrayDeDias;
};
