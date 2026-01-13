/**
 * 
 * 
 */

// 
function getRandomNo(ivMultiplicator) {

    // use ivMultiplicator
    let randomNumber = Math.random() * ivMultiplicator

    randomNumber = Math.floor(randomNumber)
    console.log(randomNumber)

}  // getRandomNo() 
getRandomNo(10000)