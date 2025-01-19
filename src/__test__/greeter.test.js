/* eslint-disable no-undef */
const Greeter = require('../main/greeter');

const greeter = new Greeter()


test('should trim name', ()=>{
    expect(greeter.trimmer(' john ')).toBe('john')
})

test('should capitalizes name' , ()=>{
    expect(greeter.capitalizer('john')).toBe('John')
})