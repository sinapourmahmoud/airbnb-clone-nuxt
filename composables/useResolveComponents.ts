export default () => {
  const SvgsCamping = resolveComponent("SvgsCamping");
  const SvgsSnow = resolveComponent("SvgsSnow");
  const SvgsDiamond = resolveComponent("SvgsDiamond");
  const SvgsSki = resolveComponent("SvgsSki");
  const SvgsCastle = resolveComponent("SvgsCastle");
  const SvgsApartment = resolveComponent("SvgsApartment");
  const SvgsVilla = resolveComponent("SvgsVilla");
  const SvgsBeach = resolveComponent("SvgsBeach");
  const categories = [
    {
      label: "Beach",
      icon: SvgsBeach,
      description: "This property is close to the beach!",
    },
    {
      label: "Modern",
      icon: SvgsVilla,
      description: "This property is modern!",
    },
    {
      label: "Apartment",
      icon: SvgsApartment,
      description: "This property is in the apartment!",
    },

    {
      label: "Lake",
      icon: SvgsCamping,
      description: "This property is near a lake!",
    },

    {
      label: "Castles",
      icon: SvgsCastle,
      description: "This property is an ancient castle!",
    },
    {
      label: "Ski",
      icon: SvgsSki,
      description: "This property is an ancient Ski!",
    },

    {
      label: "Camping",
      icon: SvgsCamping,
      description: "This property offers camping activities!",
    },
    {
      label: "Arctic",
      icon: SvgsSnow,
      description: "This property is in arctic environment!",
    },

    {
      label: "Lux",
      icon: SvgsDiamond,
      description: "This property is brand new and luxurious!",
    },
  ];
  return {
    SvgsCamping,
    SvgsSnow,
    categories,
    SvgsDiamond,
    SvgsSki,
    SvgsCastle,
    SvgsApartment,
    SvgsVilla,
    SvgsBeach,
  };
};
