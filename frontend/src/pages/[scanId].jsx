import React, { useState, useEffect } from "react"
import HomeLink from "@/web/components/Links/HomeLink"
import Welcome from "@/web/components/Links/Welcome"
import HistoryLink from "@/web/components/Links/HistoryLink"
import api from "@/web/services/api.js"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      scanId: params.scanId,
    },
  },
})

const Details = (props) => {
  const [scan, setScan] = useState(null)

  const { scanId } = props.params

  useEffect(() => {
    (async () => {
      try {
        const { data: { result } } = await api(`/scans/${scanId}`)
        setScan(result)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [scanId])

  const scanData = scan ?? { IP: "", scanOption: "", option: "", scanResult: "" }

  return (
    <div>
      <header>
        <nav>
          <ul className="flex items-center gap-4">
            <>
              <li>
                <HistoryLink />    
              </li>
              <li>
                <HomeLink />    
              </li>
              <li>
                <Welcome />
              </li>
            </>
          </ul>
        </nav>
      </header>
      <h1 className="text-center text-3xl underline">Details</h1>
      <table className="w-2/5 decoration-slate-500 border-solid">
        <thead>
          <tr>
            <th>IP</th>
            <th>Scan Option</th>
            <th>Option</th>
            <th>Result</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{scanData.IP}</td>
            <td>{scanData.scanOption}</td>
            <td>{scanData.option}</td>
            <td>{scanData.scanResult}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Details
