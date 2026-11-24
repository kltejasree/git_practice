const inventory = require('./employee.json')

const result = inventory.reduce((employeesPerCity, employee) => {
    const address = employee.address.city
    if(!employeesPerCity[address]) {
        employeesPerCity[address] = 1
    } else {
        employeesPerCity[address] += 1
    }
    return employeesPerCity

}, {})
const conversion = Object.entries(result)
.map((employee) => {
    return {
        "city": employee[0],
        "employees": employee[1]
    }
})

console.log(conversion)