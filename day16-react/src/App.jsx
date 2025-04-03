import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleName = (e) => {
    setUser(prev => {
      return {
        ...prev,
        name: e.target.value
      }
    });
  }
  const handleEmail = (e) => {
    setUser(prev => {
      return {
        ...prev,
        email: e.target.value
      }
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name.length < 2){
      alert("Invalid name");
      return;
    }
    setIsSubmitted((prev) => !prev);
  }
  return (
    <div>
      {isSubmitted ? 
      (<section>
        {/* <h2>Name: {user.name}</h2>
        <h4>Email: {user.email}</h4> */}
        {Object.entries(user).map(([key, val]) => {
          return (
            <h3 key={key}>
              {key} :: {val}
            </h3>
          )
        })}
      </section>
      )
      : (
        <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">Name</label>
          <input value={user.name} name="userName" type="text" placeholder="Type here..." onChange={(e) => handleName(e)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input value={user.email} name="userEmail" type="email" placeholder="Type here..." onChange={(e) => handleEmail(e)}/>
        </div>
        <button>Submit</button>
      </form>
      )}
    </div>
  )
}

export default App;