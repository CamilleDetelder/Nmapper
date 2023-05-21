import React, { useState, useEffect } from "react"
import HomeLink from "@/web/components/Links/HomeLink"
import api from "@/web/services/api.js"

const History = () => {
  const [scans, setScans] = useState([])

  useEffect(() => {
    const fetchScans = async () => {
      try {
        const response = await api.get("/scans") 
        setScans(response.data.result)
      } catch (error) {
        alert("Error fetching scans:", error)
      }
    }

    fetchScans()
  }, [])

  const getPreview = (scanResult) => {
    const maxLength = 50

    if (scanResult.length <= maxLength) {
      return scanResult
    } else {
      return scanResult.substring(0, maxLength) + "..."
    }
  }

  return (
    <div>
      <HomeLink />
      <h1 className="text-center text-3xl underline">History</h1>
      <table className="w-2/5 decoration-slate-500 border-solid">
        <thead>
          <tr>
            <th>IP</th>
            <th>Result</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {scans.map(({ IP, scanResult }) => (
            <tr key={IP}>
              <td>{IP}</td>
              <td>{getPreview(scanResult)}</td>
              <td> <a href="./[scanId]" className="underline text-blue-700">
                See more
              </a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default History
