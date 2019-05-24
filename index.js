// Code your solution here:
function driversWithRevenueOver(collection, amount) {
   const result = collection.filter(driver => driver.revenue > amount)

   return result
}

function driverNamesWithRevenueOver(collection, amount) {
   const result = driversWithRevenueOver(collection, amount).map(driver => driver.name)

   return result
}

function exactMatch(collection, obj) {
   const key = Object.keys(obj)[0]
   const result = collection.filter(driver => driver[key] === obj[key])

   return result
}

function exactMatchToList(collection, obj) {
   const results = exactMatch(collection, obj).map(driver => driver.name)
   
   return results
}