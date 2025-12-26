/** 
 *   Stand: 25.12.2025
 *
 *   Reading JSON data from a file using Node.js fs module; working with the process-object      
*/

import * as fs from 'node:fs'  // 

//
async function getDbJson() {
   // fs.createReadStream()
   const stream = fs.createReadStream("../../data/db.json", { encoding: "utf8" });

   stream.on("data", chunk => {
      console.log("Chunk:", chunk);

      let { notes } = JSON.parse(chunk)  // getting the data/values of key "notes" 
      console.log("Data of key NOTES:", notes[0])  // log first note
   })

   stream.on("end", () => {
      console.log("Fertig")
   })

   stream.on("error", err => {
      console.error("Fehler:", err)
   })
}  // getDbJson()
await getDbJson()

// 
async function getNodeEnv() {
   //? process.env.NODE_OPTIONS instead of NODE_ENV 
   const nodeEnv = process.env.NODE_ENV || 'development'
   console.log(`Running in ${nodeEnv} mode`)
}  // getNodeEnv() 


// Exporting functions  
// export { getDbJson, getNodeEnv }

