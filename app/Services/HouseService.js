import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";




class HouseService{

  async getHouses(){
    const response = await axios.get('https://bcw-sandbox.herokuapp.com/api/Houses')
    console.log('getHouses', response.data)
    ProxyState.houses = response.data.map(h => new House(h))
  }
 async createHouse(houseData){
    console.log('this is a house', houseData);
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/Houses', houseData)

    ProxyState.houses = [...ProxyState.houses, new House(res.Data)]
    console.log(ProxyState.houses)
  }
}

export const houseService = new HouseService()