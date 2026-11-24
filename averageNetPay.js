const data = require('./employee.json')
const result = data.filter((employee) => {
    return employee.isActive
})

.reduce((averageNetPay, employee) => {
    let employeeNetPay = 0
    let basePay = employee.salary.base + employee.salary.bonus
    let deductions = employee.salary.deductions.incomeTax + employee.salary.deductions.professionalTax + employee.salary.deductions.providentFund
    employeeNetPay = basePay - deductions
    const department = employee.department.name 

    if(!averageNetPay[department]) {
        averageNetPay[department] = [1, employeeNetPay]
    } else {
        averageNetPay[department] = [averageNetPay[department][0] + 1, averageNetPay[department][1] + employeeNetPay]
    }

    return averageNetPay

}, {})

const conversion = Object.entries(result)
.map((employee) => {
    return {
        "department": employee[0],
        "activeEmployees": employee[1][0],
        "averageNetPay": Math.round(employee[1][1] / employee[1][0])

    }
})

.sort((employee1, employee2) => {
    return employee2["averageNetPay"] - employee1["averageNetPay"]
})

console.log(conversion)