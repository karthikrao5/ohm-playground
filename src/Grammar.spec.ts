import grammar from "./Grammar";
import semantics from "./Semantics";

describe("Main", () => {
    it("can register digits", () => {
        expect(grammar.match("4").succeeded()).toBeTruthy();
    })

    it("can match addition and subtraction", () => {
        expect(grammar.match("1+2").succeeded()).toBeTruthy();
        expect(grammar.match("1-2").succeeded()).toBeTruthy();
    })
    
    it("can match mul/div", () => {
        expect(grammar.match("2*3").succeeded()).toBeTruthy();
        expect(grammar.match("4/2").succeeded()).toBeTruthy();
    })
    
    it("can parse a number to a string", () => {
        let adapter = semantics(grammar.match("12"));
        expect(adapter.eval()).toEqual(12);
    });

    it("can perform arithmetic", () => {
        let adapter = semantics(grammar.match("1+2+4"));
        expect(adapter.eval()).toEqual(7);

        adapter = semantics(grammar.match("7-1-3"));
        expect(adapter.eval()).toEqual(3);
    })
});