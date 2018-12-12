const fetchPropertyObj = async (url) => {
  const response = await fetch(url);
  const propertyObj = await response.json();
  return propertyObj;
};

const createDataSet = async data => Promise.all(data.results.map(async (person, index) => {
  const currHomeworld = await fetchPropertyObj(person.homeworld);
  const currSpecies = await fetchPropertyObj(person.species[0]);
  return {
    name: person.name,
    homeworld: currHomeworld.name,
    population: currHomeworld.population,
    species: currSpecies.name,
    index,
    favorite: false,
  };
}));

const People = async () => {
  const url = 'https://swapi.co/api/people/';
  const response = await fetch(url);
  const data = await response.json();
  return createDataSet(data);
};

export default People;
