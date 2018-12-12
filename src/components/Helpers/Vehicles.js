const Vehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const response = await fetch(url);
  const data = await response.json();

  const vehicleData = Promise.all(data.results.map(async (vehicle, index) => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    passengers: vehicle.passengers,
    index,
  })));
  return vehicleData;
};

export default Vehicles;
