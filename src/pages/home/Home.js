import { Navbar } from "../../layouts/Navbar";
import { Carausal } from "./Carausal";
import { JobTypes } from "./JobTypes";
import { HireCard } from "./HireCard";
import { RecentylPostedJobs } from "./RecentylPostedJobs";
export const Home = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <Carausal/>
      <JobTypes/>
      <HireCard/>
      <RecentylPostedJobs/>
    </div>
      
    
  )
}
