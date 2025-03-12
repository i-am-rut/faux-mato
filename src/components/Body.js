import { useEffect, useState } from "react"
import { HOME_PAGE_SWIGGY_API } from "../utils/constants"
import PageMidComponent from "./PageMidComponent"
import PageTopComponent from "./PageTopComponent"
import PageBottomComponent from "./PageBottomComponent"
import ShimmerResCard from "./ShimmerResCard"

const Body = () => {
    const [pageData, setPageData] = useState(JSON.parse(sessionStorage.getItem("homePageData")) || null)



    useEffect(() => {
        if(!pageData) {
            fetchData()
        }
    }, [])

    const fetchData = async() => {
        const data = await fetch(HOME_PAGE_SWIGGY_API)
        const json = await data.json()
        setPageData([json?.data?.cards[0], json?.data?.cards[1], json?.data?.cards[2], json?.data?.cards[4], ]) 
        sessionStorage.setItem("homePageData", JSON.stringify([json?.data?.cards[0], json?.data?.cards[1], json?.data?.cards[2], json?.data?.cards[4],]))   
    }

    
    
    return (
        <div>
            {pageData ? 
                <div>
                    <PageTopComponent data={pageData[0]} />
                    <PageMidComponent data={pageData[1]} />
                    <PageBottomComponent title={pageData[2]} data={pageData[3]} />
                </div> :
                <div>
                    <div className="h-52 w-full bg-blue-950 mb-12"></div>
                    <div className="flex overflow-x-auto w-5xl">
                        <ShimmerResCard />
                    </div>
                </div>
            }
        </div>
    )
}

export default Body
