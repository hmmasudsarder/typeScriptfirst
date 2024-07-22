{
const poorUser = {
    name: "Masud",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is: ${this.balance+ balance}`;
    }
}
}