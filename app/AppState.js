import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make: 'Chevrolet', model: 'Impala', description:'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg'}),
    new Car({make: 'Buick', model: 'Grand National', description: 'It is grand', price:15, year: 1984, color:'#ff0000', imgUrl:'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg'})
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({address:' 19209 E River St Meridian, ID, 83646', yearMade: 2019, bedroom: 5, bathroom: 5, sqFeet: 2000, price: 10000000, description: "this house is huge", imgUrl:'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
