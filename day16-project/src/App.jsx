import P from "papaparse";
import Card from "./components/Card.jsx";
import { useState } from "react";
const App = () => {
  const [profiles, setProfiles] = useState([]);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    P.parse(file, {
      header: true,
      complete: handleData
    });
  }
  const handleData = (res) => {
    const {data, errors} = res;
    if(errors.length > 0){
      alert("Error");
    }else{
      setProfiles(data);
      console.log(data)
    }
  }
  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload}/>
      </div>
      <div>
        {console.log(profiles)}
        {profiles.map((ele) => (
          <Card name={ele.name} email={ele.email} githubLink={ele.githubLink} />
        ))}
      </div>
    </div>
  )
}
export default App;