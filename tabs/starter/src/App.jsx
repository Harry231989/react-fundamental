import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import JobsInfo from "./JobsInfo";


const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)  

  const fetchJobs = async() => {
    const response = await fetch(url);
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

   useEffect(() => {
     fetchJobs()
   }, []);
   
   if(isLoading){
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
   }

  return (
    <section className='jobs-center'>
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
