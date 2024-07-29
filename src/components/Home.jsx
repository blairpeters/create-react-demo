import { Children } from "react";

const Home = (props) => {
  console.log(props.studentDetails);

  return (
    <div>
      <p>Welcome to Home component</p>

      <p>
        Welcome {props.studentDetails.firstName} you are{" "}
        {props.studentDetails.age}
      </p>
    </div>
  );
};

export default Home;
