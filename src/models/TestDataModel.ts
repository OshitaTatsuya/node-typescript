class TestData {

    constructor(private name: string, private age: string, private phoneNumber: string, private address : string) {
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAge(): string {
        return this.age;
    }

    setAge(age: string) {
        this.age = age;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string) {
        this.address = address;
    }

}