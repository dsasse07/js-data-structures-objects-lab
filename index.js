// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj, ...{ [key]: value } }
  return newDriver
  // return Object.assign({}, newDriver, {[key]: value})
  
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}





const a = [1, [2, 3], 4, 5 ]

function deep(array, criteriaFn) {
  
  let next = array
  let current = next.shift()
  

  
  while (current || current === 0) {
    // debugger 
    if (criteriaFn(current)) {
      console.log(`hello ${current}`)
      return current
    }
    
    if (Array.isArray(current)) {
      let result = deep(current, criteriaFn)
      if (result) {
        return result
      }
    }

    current = next.shift()
  }

  return null
}