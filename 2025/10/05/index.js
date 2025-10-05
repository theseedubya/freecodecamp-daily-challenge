function hasExoplanet(readings) {
//readings is a list of readings passed in as a string
//A planet has an exoplanet if a single reading is less than the average
//so we need to know the average and check each reading against that average
console.log(readings)
const luminosity = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
  G: 16, H: 17, I: 18, J: 19, K: 20, L: 21,
  M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27,
  S: 28, T: 29, U: 30, V: 31, W: 32, X: 33,
  Y: 34, Z: 35
}

let readingList = readings.split("");
console.log(readingList)

const readingSum = readingList.reduce(function (result,item){
        return result + luminosity[item]
    },0)
console.log(readingSum)

const averageReading = readingSum / readingList.length
console.log(averageReading)

let hasExoplanet = false

for(let i =0;i<readingList.length; i++){
  if(luminosity[readingList[i]] <= averageReading*0.8){
    hasExoplanet = true;
    break;
  }
}
  console.log(hasExoplanet)
  return hasExoplanet
}

console.log(hasExoplanet("FREECODECAMP"))
