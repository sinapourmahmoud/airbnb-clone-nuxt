import countries from "world-countries";
export const countriesList = countries.map((country) => ({
  label: country.name.common,
  value: country.cca2,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const getCountry = (label: string) => {
  return countriesList.filter(
    (item: {
      label: string;
      value: string;
      flag: string;
      latlng: [number, number];
      region: string;
    }) => item.label === label
  )[0];
};
