import { useEffect, useState } from "react"

const useChartdata = () =>{
    const [chartdata, setChartdata] = useState([]);
    useEffect( () => {
            fetch('data/chartdata.json')
            .then(res => res.json())
            .then(data => setChartdata(data))
    }, []);

    return[chartdata,setChartdata];
}
export default useChartdata;