const getName = require('./index.js');

describe("Akan Name Test", ()=> {
    test("Name_Output", () => {
        expect(getName.getName('Monday', 'Male')).toBe('Kwadwo')
    })
})