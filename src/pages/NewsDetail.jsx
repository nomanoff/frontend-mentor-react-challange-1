// news detail page

import { useNavigate, useParams } from "react-router";

function NewsDetail() {
  const navigate = useNavigate();
  const params = useParams();

  console.log("params: ", params);

  return (
    <div>
      <h1>{params.title}</h1>
      <p>Post Date: {params.id}</p>
      <button onClick={() => navigate(-1)}>Back to News</button>
    </div>
  );
}

export default NewsDetail;
