import ScanModel from "../db/models/ScanModel.js"
import fetchScan from "../middlewares/fetchScan.js"
import { spawn } from "node:child_process"
const prepareScanRoutes = (app) => {
//route for scans
app.post("/scans", async (req, res) => {
  let { IP, scanOption, option } = req.body
  let scanResult 

  const executeNmap = () => {
    return new Promise((resolve, reject) => {
      const nmap = spawn("nmap", [IP, scanOption, option])

      nmap.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`)
        scanResult += data
      })

      nmap.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`)
      })

      nmap.on("close", (codeError) => {
        console.log(`child process exited with codeError ${codeError}`)
        resolve() // Résoudre la promesse lorsque la commande est terminée
      })

      nmap.on("error", (error) => {
        console.error(`Error executing Nmap command: ${error.message}`)
        reject(error)
      })
    })
  }

  try {
    await executeNmap()

    const scan = new ScanModel({
      IP,
      scanOption,
      option,
      scanResult,
    })

    const savedScan = await scan.save()

    res.send({ result: savedScan })
  } catch (error) {
    console.error(`Error executing Nmap command: ${error.message}`)
    res.status(500).json({ error: "Error executing Nmap command" })
  }
})


  //route for history
  app.get("/scans", async (req, res) => {
    const scans = await ScanModel.find()
    res.send({ result: scans })
  })

  //route for details
  app.get("/scans/:scanId", fetchScan, async (req, res) => {
    res.send({ result: req.ctx.scan })
  })
}

export default prepareScanRoutes