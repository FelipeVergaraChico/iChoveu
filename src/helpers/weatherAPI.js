// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
//   seu código aquiaa
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  console.log(data);
  return data;
};

export const getWeatherByCity = async (cityURL) => {
//   seu código aqui
  if (cityURL !== undefined) {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
      const data = await response.json();
      const resultado = {
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      };
      return resultado;
    } catch (error) {
      window.alert('Nenhuma cidade encontrada');
    }
  }
};
