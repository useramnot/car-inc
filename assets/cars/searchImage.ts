const imageSelect = (index: any) => {
    // if (index === null) {
    //   return requirements.kia_ceed;
    // }
  
    const imageArray: any = {
      'Ceed': require("../cars/kia-ceed.png"),
      'Picanto': require("../cars/kia-picanto.png")
    };
  
    return imageArray[index];
  };

  export default imageSelect