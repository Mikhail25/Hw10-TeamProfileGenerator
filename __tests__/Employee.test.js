const Employee = require('../lib/Employee');

describe('Employee', () => {
    
    describe("Initialization", () => {
        it('should initialize the employee instance', () => {
            //Arrange 
            const employee = new Employee();
            //Act

            //Assert
            expect(typeof employee).toBe('object');
        });

        
    })
})