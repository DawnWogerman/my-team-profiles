const Manager = require('../lib/Manager');

test("Create Manager Object", ()=>{
    const manager = new Manager("Mads", 123, "test@test.com", 9695589);
    
    expect(manager.name).toBe("Mads");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("test@test.com");
    expect(manager.officeNumber).toBe(9695589);
});

test("Get Manager Name", ()=>{
    const manager = new Manager("Mads", 123, "test@test.com", 9695589);
    expect(manager.name).toBe("Mads");
});

test("Get Manager ID", () =>{
    const manager = new Manager("Mads", 123, "test@test.com");
    expect(manager.getId()).toBe(123);
});

test("Get Email", ()=>{
    const manager = new Manager("Mads", 123, "test@test.com");
    expect(manager.getEmail()).toBe("test@test.com");
});