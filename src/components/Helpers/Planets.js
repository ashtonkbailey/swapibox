const fetchPropertyObj = async (url) => {
  const response = await fetch(url);
  const propertyObj = await response.json();
  return propertyObj;
};

const createDataSet = async data => Promise.all(data.results.map(async (planet, index) => {
  let residentName;
  const planetData = {
    name: planet.name,
    terrain: planet.terrain,
    population: planet.population,
    climate: planet.climate,
    index,
    favorite: false,
    residents: 'none',
  };

  if (planet.residents.length > 0) {
    residentName = await fetchPropertyObj(planet.residents[0]);
    planetData.residents = residentName.name;
  }

  return planetData;
}));

const Planets = async () => {
  const url = 'https://swapi.co/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  return createDataSet(data);
};

export default Planets;
