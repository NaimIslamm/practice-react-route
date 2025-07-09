import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const ShowDetails = useLoaderData();
  const { id, name, email, body } = ShowDetails;
  const navigate = useNavigate();
  const handlegoback = () => {
    navigate(-1);
  };
  return (
    <div className="post-main">
      <h3>Number:{id}</h3>
      <h2>Name:{name}</h2>
      <h3>Email:{email}</h3>

      <p>
        <b>Description:</b>
        {body}
      </p>
      <button onClick={handlegoback}>Go Back</button>
    </div>
  );
};

export default ShowDetails;
