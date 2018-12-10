const Vehicles = async () => {
  const url = `https://swapi.co/api/vehicles/`;
  const response = await fetch(url);
  const data = await response.json();

  return Promise.all(data.results.map(async (vehicle,index) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      index
    }
  }))
}


export default Vehicles;