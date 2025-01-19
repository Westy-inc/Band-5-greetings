/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

const greeter = new Greeter()

// looks for console out put
const consoleSpy = jest.spyOn(console , 'log').mockImplementation()

// return tests
test('if the time is 06:00:00 it should return Good morning', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "06:00:00",
    }));
    expect(greeter.getMessage()).toBe("Good morning");
  });
  
  test('if the time is 12:00:00 it should return Good afternoon', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "12:00:00",
    }));
    expect(greeter.getMessage()).toBe("Good afternoon");
  });
  
  test('if the time is 18:00:00 it should return Good evening', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "18:00:00",
    }));
    expect(greeter.getMessage()).toBe("Good evening");
  });
  
  test('if the time is 22:00:00 it should return Good night', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "22:00:00",
    }));
    expect(greeter.getMessage()).toBe("Good night");
  });
  
  test('if the time is 06:00:00 and a user inputs the name " joHn ", it should return Good morning John', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "06:00:00",
    }));
    expect(greeter.greet(" joHn ")).toBe("Good morning John");
  });
  
  test('if the time is 12:00:00 and a user inputs the name " joHn ", it should return Good afternoon John', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "12:00:00",
    }));
    expect(greeter.greet(" joHn ")).toBe("Good afternoon John");
  });
  
  test('if the time is 18:00:00 and a user inputs the name " joHn ", it should return Good evening John', () => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
      toLocaleTimeString: () => "18:00:00",
    }));
    expect(greeter.greet(" joHn ")).toBe("Good evening John");
  });
  








// logging tests
test('should when given the name "  john " at 06:00:00  log to console "Good morning John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "06:00:00",
    }));

    // invoke function
    greeter.greet(" john ")
    
    // checks if log was correct
    expect(consoleSpy).toHaveBeenCalledWith("Good morning John");

    // cleans up mock
    consoleSpy.mockRestore();
})

test('should when given the name "  john " at 12:00:00  log to console "Good afternoon John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "12:00:00",
    }));

    // invoke function
    greeter.greet(" john ")
    
    // checks if log was correct
    expect(consoleSpy).toHaveBeenCalledWith("Good afternoon John");

    consoleSpy.mockRestore();
})

test('should when given the name "  john " at 18:00:00  log to console "Good evening John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "18:00:00",
    }));

    greeter.greet(" john ")
    
    expect(consoleSpy).toHaveBeenCalledWith("Good evening John");

    consoleSpy.mockRestore();
})


test('should when given the name "  john " at 22:00:00  log to console "Good night John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "22:00:00",
    }));

    // invoke function
    greeter.greet(" john ")
    
    // checks if log was correct
    expect(consoleSpy).toHaveBeenCalledWith("Good night John");

    consoleSpy.mockRestore();
})
