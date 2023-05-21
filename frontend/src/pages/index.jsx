import React from "react"
import NmapForm from "../web/components/NmapForm"
import Image from "next/image"
import HistoryLink from "@/web/components/Links/HistoryLink"
import Welcome from "@/web/components/Links/Welcome"

const Home = () => {
return (
    <main className="p-4 flex flex-col gap-4">
      <header>
          <nav>
            <ul className="flex items-center gap-4">
                <>
                  <li>
                    <HistoryLink/>    
                  </li>
                  <li>
                    <Welcome/>
                  </li>
                </>
            </ul>
          </nav>
      </header>
      <Image src="/images/Logo.png" alt="Nmap Logo" width={200} height={200} className=""></Image>
      <NmapForm className="flex flex-col gap-4"></NmapForm>
    </main>
  )
}

export default Home



