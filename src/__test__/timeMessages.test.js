/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

const greeter = new Greeter()

// mocks time for this test suite

// morning tets
test('should return Good morning when the time is 06:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "06:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good morning')
})


test('should return Good afternoon when the time is 11:59:59', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "11:59:59",
    }));
    expect(greeter.getMessages()).toBe('Good morning')
})

//afternoon tests
test('should return Good afternoon when the time is 12:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "12:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good afternoon')
})

test('should return Good afternoon when the time is 17:59:59', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ 
        toLocaleTimeString: () => "17:59:59",
    }));
    expect(greeter.getMessages()).toBe('Good afternoon')
})


//evening tests
test('should return Good evening when the time is 18:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({
        toLocaleTimeString: () => "18:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good evening')
})

test('should return Good evening when the time is 21:59:59', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({
        toLocaleTimeString: () => "21:59:59",
    }));
    expect(greeter.getMessages()).toBe('Good evening')
})





// night tests
test('should return Good night when the time is 05:59:59', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({
        toLocaleTimeString: () => "05:59:00",
    }));
    expect(greeter.getMessages()).toBe('Good night')
})



test('should return Good night when the time is 22:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ // mocks time for this test
        toLocaleTimeString: () => " 22:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good night')
})

