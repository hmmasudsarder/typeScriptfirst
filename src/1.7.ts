{
    // spreat oparation
  const arra1: string[] = ["masud", "shoel", "samim", "saiful"];
  const arra2: string[] = ["samima", "sahanag", "sadia"];

  const spreatAllName = [...arra1, arra2];

  const ganjam: {
    // company: "Silicornya"; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    // lastName: string;
  } = {
    // company: "Silicornya",
    firstName: "Rohoman",
    middleName: "Sikder",
    // lastName: 'hridoy'
  };
  const ganjam1:{
    firstName: string;
    middlaName: string
  } = {
    firstName: "Rohoman",
    middlaName: "Sikder",
  };
  const addObject = {
    ...ganjam, ...ganjam1
  }
  console.log(addObject);

//   rest opeartor
  const greatFrient = (...friends: string[])=> {
    // console.log(`Hi ${friend1} ${friend2}`);
  }
  greatFrient("rakib", "sumon")
}
