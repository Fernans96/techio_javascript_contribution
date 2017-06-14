class Test {
    constructor() {
        this.params = arguments;
    }

    Method() {
        console.log("call ES2015 method");
    }

    getSortedParamById() {
        this.params.sort((a, b) => a.id - b.id);
        return this.params;
    }
}