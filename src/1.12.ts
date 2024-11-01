const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const converTedSpeed = (value * 1000)/ 3600;
        console.log(`The Speed is ${converTedSpeed} ms^-1`);
    } else if(typeof value === "string"){
        const [result, nuit] = value.split(" ")
        const converTedSpeed = (parseFloat(result)* 1000) /3600;
        console.log(`The speed is ${converTedSpeed} ms^-1`);
    } else {console.log("wrong input");}
}

getSpeedInMeterPerSecond(1000)

// never 
function throwError(msg: string){
    throw new Error(msg)
}
throwError("kay ho kaya")