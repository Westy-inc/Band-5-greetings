const Greeter = require('../main/greeter');

const greeter = new Greeter()

// eslint-disable-next-line no-undef
test('should trim name', ()=>{
    // eslint-disable-next-line no-undef
    expect(greeter.trimmer(' john ')).toBe('john')
})