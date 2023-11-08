const imageSelect = (index: any) => {
    // if (index === null) {
    //   return requirements.kia_ceed;
    // }
  
    const imageArray: any = {
      'Ceed': require("../cars/kia-ceed.png"),
      'Picanto': require("../cars/kia-picanto.png"),
      'Zoe Electric': require("../cars/renault-zoe-electric.png"),
      'i30 SW': require("../cars/hyundai-i30-sw.png"),
      'Rav4': require("../cars/toyota-rav4.png"),
      'Corsa': require("../cars/opel-corsa.png"),
      'Passat': require("../cars/volkswagen-passat.png"),
      '2 Series': require("../cars/bmw-2-series.png"),
      'Octavia SW': require("../cars/skoda-octavia-sw.png"),
    };
  
    return imageArray[index];
  };

  export default imageSelect