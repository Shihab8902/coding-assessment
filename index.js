
const canSaveTime = (N, T, K, D) =>{
    //Check the time take with initial oven
    const timeRequiredWithInitialOven = Math.ceil(N / K) * T;
  
    
    //Time need with new oven
    const timeRequiredWithNewOven = D + Math.ceil(N / (2 * K)) * T;
  
    
    //Check for time save
    const willSaveTime = timeRequiredWithNewOven < timeRequiredWithInitialOven ? "YES" : "NO";
    
    return willSaveTime;
    
}


let N=8, T=6, K=4, D=5;

console.log(canSaveTime(N, T, K, D));