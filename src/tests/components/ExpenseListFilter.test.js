import React from 'react';
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilter'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByAmount = jest.fn()
  sortByDate = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters = {filters}
      setTextFilter= {setTextFilter}
      sortByAmount = {sortByAmount}
      sortByDate = {sortByDate}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />
  )
})

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilter with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle test change', () => {
  const value = 'hello'
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  wrapper.setProps({filters: altFilters})
  const value = 'date'
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalledTimes(1)
})

test('should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalledTimes(1)
})

test('should handle date changes', () => {
  const startDate= moment(0)
  const endDate=  moment(0).add(3,'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})