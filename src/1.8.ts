{
// const poorUser = {
//     name: "Masud",
//     balance: 0,
//     addBalance(balance: number): string{
//         return `My new balance is: ${this.balance+ balance}`;
//     }
// }
// const data = {
//     date: "change"
// }

const user = {
    id: 3422,
    name: {
        firstName: "Masud Sarder",
        middleName: "sarder",
        lastName: "hridoy",
    },
    phone: '02033030330',
}
const {phone, name:{middleName}} = user;
}