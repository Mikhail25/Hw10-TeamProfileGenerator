const Employee = require('../lib/Employee');

describe('Employee', () => {
    
    describe("Initialization", () => {
        it('should initialize the employee instance', () => {

            const employee = new Employee();

            expect(typeof employee).toBe('object');
        });

        it("should set the name via constructor arguments", () => {

            const name = 'Alice';
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arguments", () => {
            
            const id = '123';
            const employee = new Employee("Alice", id);

            expect(employee.id).toBe(id); 

        });
        it("should set email via constrcutor arguments", () => {

            const email = "test@test.com";
            const employee = new Employee("Alice", 100, email);

            expect(employee.email).toBe(email);
          });
        });
      
        describe("Getter methods", () => {
          it("should get name via getName()", () => {

            const name = "Alice";
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName();

            expect(employeeName).toBe(name);
          });
      
          it("should get id via getId())", () => {

            const id = 100;
            const employee = new Employee("alice", id, "test@test.com");
            const employeeId = employee.getId();

            expect(employeeId).toBe(id);
          });
      
          it("should get email via getEmail()", () => {

            const email = "test@test.com";
            const employee = new Employee("Alice", 100, email);
            const employeeEmail = employee.getEmail();

            expect(employeeEmail).toBe(email);
          });
      
          it("should get role via getRole()", () => {

            const role = "Employee";
            const employee = new Employee("Alice", 100, "test@test.com");
            const employeeRole = employee.getRole();

            expect(employeeRole).toBe(role);
          });
        });
      });