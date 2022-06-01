import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { houseService } from "../Services/HouseService.js";


function _drawHouses(){
  // get all the houses and build a template

  let houses = ProxyState.houses 
  let template = ''
  houses.forEach(h => { 
    template += h.Template
  });
  

  document.getElementById('listings').innerHTML = template
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
   ProxyState.on('houses', _drawHouses)
   this.getHouses()
   this.viewHouses()
 }

 viewHouses(){
  //  Get Car Form and inject into modal body
  let form = getHouseForm()
  document.getElementById('form-body').innerHTML = form
  _drawHouses()
 }

 async getHouses(){
   await houseService.getHouses()
 }
 async createHouse(){
   window.event.preventDefault()
   let form = window.event.target
   console.log('form submitted', form)

   let houseData = {
    address: form.address.value,
    yearMade: form.yearMade.value,
    bedroom: form.bedroom.value,
    bathroom: form.bathroom.value,
    sqFeet: form.sqFeet.value,
    price: form.price.value,
    description: form.description.value,
    imgUrl: form.imgUrl.value,

   }


   console.log('the new cripo', houseData)
  houseService.createHouse(houseData)
  form.reset()
 }
// //  delete(id){
// //    houseService.deleteHouse(id)
//  }
 
}