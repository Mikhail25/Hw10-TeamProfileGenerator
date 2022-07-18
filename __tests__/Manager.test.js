const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set office Number via constrcutor arguments", () => {

      const officeNumber = 100;
      const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
      
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });

  describe("Getter methods", () => {
    it("should get office number via getOffice()", () => {

      const officeNumber = 100;
      const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
      const managerOfficeNumber = manager.getOffice();

      expect(managerOfficeNumber).toBe(officeNumber);
    });

    it("should get role via getRole()", () => {

      const role = "Manager";
      const manager = new Manager("Alice", 100, "test@test.com", 100);
      const managerRole = manager.getRole();

      expect(managerRole).toBe(role);
    });
  });
});