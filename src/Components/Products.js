import tamalOne from "../Images/tamal3.png";
import tamaltwo from "../Images/imgTamal1.jpeg";
import tamalthree from "../Images/imgTamal.jpeg";

const PRODUCTS = {
  general: [
    {
      id: "gen1",
      name: "Grande",
      category: "tamal1",
      styles: {
        backgroundImage: `url('${tamalOne}')`
      }
    },
    {
      id: "gen2",
      name: "Mediano",
      category: "tamal2",
      styles: {
        backgroundImage: `url('${tamaltwo}')`
      }
    },
    {
      id: "gen3",
      name: "Pequeño",
      category: "tamal3",
      styles: {
        backgroundImage: `url('${tamalthree}')`
      }
    }
  ],
  tamal1: [
    {
      id: "big1",
      name: "Tamal Grande",
      description: "Tamal con contramuslo o colombina, carne de cerdo, tocino, huevo y zanahoria",
      cost: 3000,
      styles: {
        backgroundImage: `url('${tamalOne}')`
      }
    }
  ],
  tamal2: [
    {
      id: "medium1",
      name: "Tamal Medino",
      description: "Tamal con colombina, tocino, carne de cerdo, huevo y zanahoria",
      cost: 2700,
      styles: {
        backgroundImage: `url('${tamaltwo}')`
      }
    }
    
  ],
  tamal3: [
    {
      id: "small1",
      name: "Tamal Pequeño",
      description: "Tamal con contramuslo, tocino y zanahoria",
      cost: 2200,
      styles: {
        backgroundImage: `url('${tamalthree}')`
      }
    }
  ]
}
  export  { PRODUCTS };