import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: 'first note',
  amount: 195,
  createdAt: 0
},{
  id: '2',
  description: 'Rent',
  note: 'second note',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'Credit Card',
  note: 'third note',
  amount: 45000,
  createdAt: moment(0).add(4, 'days').valueOf()
}]