function add(num: number, num2: number): number {
  return num + num2;
}

add(2, 3);
add(2, 1);
console.log(add(3, 4));

const add1 = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
    name: "Masud",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is: ${this.balance+ balance}`;
    }
}

const arr: number[] = [2, 3, 5];
const newArray: number[] = arr.map((elen:number): number => elen * elen);