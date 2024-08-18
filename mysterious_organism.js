// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

console.log(returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
console.log(mockUpStrand())

//creating random pAeQuor object using helper functions above
const pAequorFactory = (specimenNum, dna) => {
 return{
  specimenNum,
  dna,
/*ading a method to randomly select a base in the dna of the object and changing current one to a new one*/
  mutate (){
    this.specimenNum = returnRandBase();
    this.dna = mockUpStrand()
    return{
      specimenNum: this.specimenNum,
      dna: this.dna
    } 
  },
/*creating a method that compares the sequence dna of different Paequor*/
  compareDNA(pAequor){
    let count = 0;
    for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor[i]){
          count++
          console.log(count)
        let dnaPercent = (count/this.dna.length) * 100;
        console.log(`Specimen DNA and Specimen pAequor have ${dnaPercent.toFixed(2)}% DNA in common`)
      }
      }      
  },
  /*detecting chances of survival with a threshold of atleast 60%*/
  willLikelySurvive(){
    let countG = 0;
    let countC = 0;

    for(let i = 0; i < this.dna.length; i++){
      if(this.dna[i] === 'G'){
        countG++
      }
      if(this.dna[i] === 'C'){
        countC++
      }
    }
    let percentG = (countG/this.dna.length) * 100;
    let percentC = (countC/this.dna.length) * 100;
    return percentG >= 60 || percentC >= 60;
  },
  }
}
//Code Testing
const sample = pAequorFactory(returnRandBase(),mockUpStrand())
const anotherSample = mockUpStrand()

console.log(anotherSample)

console.log(sample.compareDNA(anotherSample))

console.log(sample.willLikelySurvive())


let newObj = []
let pAequor1 = pAequorFactory(returnRandBase(),mockUpStrand())
