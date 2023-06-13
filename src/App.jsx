import DisplayEmployee from "./components/DisplayEmployee";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const sampleEmployee = {
    gender: "male",
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    location: {
      street: {
        number: 761,
        name: "Tay Street",
      },
      city: "Timaru",
      postcode: 76111,
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };

  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    axios
      .get("https://randomuser.me/api?nat=en")
      // Use this data to update the state
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data.results[0]);
      });
  };

  return (
    <>
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </>
  );
}

export default App;
