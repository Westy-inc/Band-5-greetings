/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

const greeter = new Greeter()


test('should return Good morning when the time is 06:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ // mocks time for this test
        toLocaleTimeString: () => "06:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good morning')
})
test('should return Good afternoon when the time is 12:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ // mocks time for this test
        toLocaleTimeString: () => "12:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good Afternoon')
})

test('should return Good evening when the time is 18:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ // mocks time for this test
        toLocaleTimeString: () => "18:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good Afternoon')
})

test('should return Good night when the time is 22:00:00', ()=>{
    jest.spyOn(global ,'Date').mockImplementation(() => ({ // mocks time for this test
        toLocaleTimeString: () => "22:00:00",
    }));
    expect(greeter.getMessages()).toBe('Good Afternoon')
})
