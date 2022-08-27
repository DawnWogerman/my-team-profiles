const Engineer = require('../lib/Engineer');

test("Create Engineer Object", () =>{
    const engineer = new Engineer("Mads", 123, "test@test.com", "MadsGitHub");

        expect(engineer.name).toBe("Mads");
        expect(engineer.id).toBe(123);
        expect(engineer.email).toBe("test@test.com");
        expect(engineer.github).toBe("MadsGitHub");
});

test("Get Engineer Name", () => {
    const engineer = new Engineer("Mads", 123, "test@test.com","MadsGitHub");
    expect(engineer.getName()).toBe("Mads");
});

test("Get Engineer ID", () =>{
    const engineer = new Engineer("Mads", 123, "test@test.com", "MadsGitHub");
    expect(engineer.getId()).toBe(123);
});

test("Get Email", ()=>{
    const engineer = new Engineer("Mads", 123, "test@test.com", "MadsGitHub");
    expect(engineer.getEmail()).toBe("test@test.com");
});

test("Get Github", ()=>{
    const engineer = new Engineer("Mads", 123, "test@test.com", "MadsGitHub");
    expect(engineer.getGithub()).toBe("MadsGitHub");
});

test("Get Role", ()=>{
    const engineer = new Engineer("Mads", 123, "test@test.com", "MadsGitHub");
    expect(engineer.getRole()).toBe("Engineer");

});