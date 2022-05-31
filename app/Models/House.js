import { generateId } from "../Utils/generateId.js";






export class House{
  constructor(houseData){
    this.id = generateId()
    this.address = houseData.address
    this.yearMade = houseData.yearMade
    this.bedroom = houseData.bedroom
    this.bathroom - houseData.bathroom
    this.sqFeet = houseData.sqFeet
    this.price = houseData.price
    this.description = houseData.description
    this.imgURL = houseData.imgURL
  }
  get Template(){
    return`
    <div class="col-6 col-md-3 p-3 rounded shadow">
        <div>
          <img class="img-fluid top-rounded" src="${this.imgURL}" alt="">
          <h5>${this.address}</h5>
          <h5>${this.yearMade}| ${this.bedroom} | ${this.bathroom} | ${this.sqFeet}</h5>
          <h4>$ ${this.price}</h4>
          <p>${this.description}</p>
        </div>
      </div>
    
    `
  }
}