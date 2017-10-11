// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let new_drivers = drivers.slice(0,2)
  return new_drivers
}

const returnLastTwoDrivers = function (drivers) {
  let new_drivers = drivers.slice(-2)
  return new_drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
  return function (number) {return number*number}
}

function fareDoubler(fare) {
  return fare*2
}

function fareTripler(fare) {
  return fare*3
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
}
