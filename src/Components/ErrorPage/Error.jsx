import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handlegohome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Opps!!!</h2>
      <h3>Something went wrong</h3>
      <button onClick={handlegohome}>Go Home Page</button>
    </div>
  );
};

export default Error;
