const Intern = require('../lib/Intern');

test("Create Intern Object", () =>{
    const intern = new Intern("Mads", 123, "test@test.com", "USC");

        expect(intern.name).toBe("Mads");
        expect(intern.id).toBe(123);
        expect(intern.email).toBe("test@test.com");
        expect(intern.school).toBe("USC");
});

test("Get Intern Name", () => {
    const intern = new Intern("Mads", 123, "test@test.com","USC");
    expect(intern.getName()).toBe("Mads");
});

test("Get Intern ID", () =>{
    const Intern = new Intern("Mads", 123, "test@test.com", "USC");
    expect(intern.getId()).toBe(123);
});

test("Get Email", ()=>{
    const intern = new Intern("Mads", 123, "test@test.com", "USC");
    expect(intern.getEmail()).toBe("test@test.com");
});

test("Get Github", ()=>{
    const intern = new Intern("Mads", 123, "test@test.com", "USC");
    expect(intern.getSchool()).toBe("USC");
});

test("Get Role", ()=>{
    const intern = new Intern("Mads", 123, "test@test.com", "USC");
    expect(intern.getRole()).toBe("Intern");

});