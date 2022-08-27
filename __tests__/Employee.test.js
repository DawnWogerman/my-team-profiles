const Employee = require('../lib/Employee');

test("Create Employee Object", () =>{
    const employee = new Employee("Mads", 123, "test@test.com");

        expect(employee.name).toBe("Mads");
        expect(employee.id).toBe(123);
        expect(employee.email).toBe("test@test.com");
});

test("Get Employee Name", () => {
    const employee = new Employee("Mads", 123, "test@test.com");
    expect(employee.getName()).toBe("Mads");
});

test("Get Employee ID", () =>{
    const employee = new Employee("Mads", 123, "test@test.com");
    expect(employee.getId()).toBe(123);
});

test("Get Email", ()=>{
    const employee = new Employee("Mads", 123, "test@test.com");
    expect(employee.getEmail()).toBe("test@test.com");
});

