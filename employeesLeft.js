const data = require('./employee.json')

const result = data.filter((employee) => {
    return employee.isActive === false
})

.map((employee) => {
    return {
        "employeeCode": employee.employeeCode,
        "fullName": employee.name.first + " " + employee.name.last,
        "department": employee.department.name,
        "joiningDate": employee.joiningDate,
        "exitDate": employee.exitDate

    }
})

console.log(result)