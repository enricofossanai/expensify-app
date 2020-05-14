//
// OBJECT DESTRUCTURING
//
/* const person = {
  name: 'Andrew',
  age: '26',
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const {name: firstName = 'Anonymous', age} = person
console.log(`${firstName} is ${age}.`)

const{city, temp: temperature} = person.location
if( city && temperature){
  console.log(`Its ${temperature} in ${city}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {

  }
};

const {name : publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)
*/
//
// ARRAY DESTRUCTURING
//

const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [, city, state ] = adress;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffe(hot)', '$2,00', '$2,50', '$2,75'];

const [name, , price_M] = item

console.log(`A medium ${name} costs  ${price_M}`)