const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set github via constrcutor arguments", () => {
      
      const github = "treyeckels";
      const engineer = new Engineer("Alice", 1, "test@test.com", github);

      expect(engineer.github).toBe(github);
    });
  });

  describe("Getter methods", () => {
    it("should get github via getGithub()", () => {

      const github = "treyeckels";
      const engineer = new Engineer("Alice", 1, "test@test.com", github);
      const engineerGithub = engineer.getGithub();

      expect(engineerGithub).toBe(github);
    });

    it("should get role via getRole()", () => {

      const role = "Engineer";
      const engineer = new Engineer(
        "Alice",
        100,
        "test@test.com",
        "treyeckels"
      );
      const engineerRole = engineer.getRole();
      
      expect(engineerRole).toBe(role);
    });
  });
});