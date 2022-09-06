const employee = {
    name: "Bruce",
    streetAddress: "1500 Locust",
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    console.log(key);
    console.log(value);
    console.log(employee);
    return {
        ...employee,
        [key] : value,
    };
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) { 
    const newEmployee = { ...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}