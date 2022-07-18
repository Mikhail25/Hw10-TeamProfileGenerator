const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set school via constrcutor arguments", () => {

      const school = "georgiatech";
      const intern = new Intern("Alice", 1, "test@test.com", school);

      expect(intern.school).toBe(school);
    });
  });

  describe("Getter methods", () => {
    it("should get school via getSchool()", () => {

      const school = "georgiatech";
      const intern = new Intern("Alice", 1, "test@test.com", school);
      const internSchool = intern.getSchool();

      expect(internSchool).toBe(school);
    });

    it("should get role via getRole()", () => {

      const role = "Intern";
      const intern = new Intern("Alice", 100, "test@test.com", "georgiatech");
      const internRole = intern.getRole();

      expect(internRole).toBe(role);
    });
  });
});
