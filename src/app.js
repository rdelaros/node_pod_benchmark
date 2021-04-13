const { fib, dist } = require('cpu-benchmark')
 
const duration = fib(45) // Returns time required (ms) 
// to calculate the 41. fibonacci number recursively.
const ops = dist(1000) // Returns the amount of operations 
// (distance matrix calculations) in 1000ms
console.log("Time en MS to calc fb(45): "+duration)
console.log("Amount of operations Distance Matrix calcs in 1000ms: "+ops)
