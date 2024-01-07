const imageSelect = (index: any) => {
    // if (index === null) {
    //   return requirements.kia_ceed;
    // } 
  
    const imageArray: any = {
      '2 Series': require("../cars/bmw-2-series.png"),
      'Ceed': require("../cars/kia-ceed.png"),
      'Corsa': require("../cars/opel-corsa.png"),
      'Mustang GT': require("../cars/ford-mustang-gt.png"),
      'i30 Wagon': require("../cars/hyundai-i30-wagon.png"),
      'Octavia SW': require("../cars/skoda-octavia-sw.png"),
      'Passat': require("../cars/volkswagen-passat.png"),
      'Picanto': require("../cars/kia-picanto.png"),
      'Rav4': require("../cars/toyota-rav4.png"),
      'Zoe Electric': require("../cars/renault-zoe-electric.png"),
    };
  
    return imageArray[index];
  };

  export default imageSelect