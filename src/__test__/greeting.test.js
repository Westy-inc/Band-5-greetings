/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

const greeter = new Greeter()

// looks for console out put
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  jest.restoreAllMocks();
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
    expect(console.log).toHaveBeenCalledWith("Good morning John");

    // cleans up mock
    
})

test('should when given the name "  john " at 12:00:00  log to console "Good afternoon John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "12:00:00",
    }));

    // invoke function
    greeter.greet(" john ")
    
    // checks if log was correct
    expect(console.log).toHaveBeenCalledWith("Good afternoon John");

    
})

test('should when given the name "  john " at 18:00:00  log to console "Good evening John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "18:00:00",
    }));

    greeter.greet(" john ")
    
    expect(console.log).toHaveBeenCalledWith("Good evening John");

    
})


test('should when given the name "  john " at 22:00:00  log to console "Good night John"' , ()=>{
    //mock time 
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "22:00:00",
    }));

    // invoke function
    greeter.greet(" john ")
    
    // checks if log was correct
    expect(console.log).toHaveBeenCalledWith("Good night John");

})
