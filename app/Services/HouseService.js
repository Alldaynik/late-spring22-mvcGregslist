import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";




class HouseService{
  createHouse(houseData){
    console.log('this is a house', houseData);

    ProxyState.houses = [...ProxyState.houses, new House(houseData)]
    console.log(ProxyState.houses)
  }
}

export const houseService = new HouseService()