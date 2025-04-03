import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = () => {
    if(name.length < 2){
      alert("Invalid name")
    }else{
      setIsSubmitted((prev) => !prev);
    }
  }
  return (
    <div>
      {isSubmitted ? 
      (<section>
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
      </section>
      )
      : (
        <section>
        <div>
          <label htmlFor="">Name</label>
          <input value={name} type="text" placeholder="Type here..." onChange={(e) => handleName(e)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input value={email} type="email" placeholder="Type here..." onChange={(e) => handleEmail(e)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </section>
      )}
    </div>
  )
}

export default App;