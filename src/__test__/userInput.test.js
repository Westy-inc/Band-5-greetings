/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

describe('Greeter Class - inputValidator', () => {
    let greeter;
    let consoleLogSpy;
    let inputUserSpy;
    let greetSpy;
    let mockRl;

    beforeEach(() => {
        greeter = new Greeter();
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        inputUserSpy = jest.spyOn(greeter, 'inputUser').mockImplementation(() => {});
        greetSpy = jest.spyOn(greeter, 'greet').mockImplementation(() => {});
        mockRl = { close: jest.fn() };
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
        inputUserSpy.mockRestore();
        greetSpy.mockRestore();
    });



    it('should not allow number input and re-prompt', () => {
        greeter.inputValidator("1231", mockRl); 
        expect(consoleLogSpy).toHaveBeenCalledWith("Your name cannot contain numbers.");
        expect(mockRl.close).toHaveBeenCalled();
        expect(inputUserSpy).toHaveBeenCalled(); // Check that inputUser is called
    });

    it('should not allow number input with letters and re-prompt', () => {
        greeter.inputValidator("test1234", mockRl); // Pass mockRl
        expect(consoleLogSpy).toHaveBeenCalledWith("Your name cannot contain numbers.");
        expect(mockRl.close).toHaveBeenCalled();
        expect(inputUserSpy).toHaveBeenCalled();
    });

    it('should handle input with only spaces and re-prompt', () => {
        greeter.inputValidator('   ', mockRl);
        expect(consoleLogSpy).toHaveBeenCalledWith("Oops you forgot to enter anything");
        expect(mockRl.close).toHaveBeenCalled();
        expect(inputUserSpy).toHaveBeenCalled();
    });
        it('should call greet with valid input and close readline', () => {
        greeter.inputValidator('Test Name', mockRl);
        expect(greetSpy).toHaveBeenCalledWith('Test Name');
        expect(mockRl.close).toHaveBeenCalled();
        expect(inputUserSpy).not.toHaveBeenCalled();
    });
});