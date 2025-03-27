import sumFunction from "./sumFunction";

describe('Math',()=>{
    it('deve somar dois numeros',()=>{
        expect(sumFunction(2,2)).toBe(4);
    })
})