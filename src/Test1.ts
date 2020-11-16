class Test1 {

    private name : String;

    constructor() {
        this.name = "test";
    }

    public outMsg() {
        console.log(`name=[${this.name}]`);
    }

}

const test1 = new Test1();
test1.outMsg();