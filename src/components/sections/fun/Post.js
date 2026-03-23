import { useParams } from "react-router-dom";
import FarmLife from "./FarmLife/FarmLife";
import Reads from "./Reads/Reads";
import Museums from "./Museums/Museums";

const POST_COMPONENTS = {
  "farm-life": FarmLife,
  reads: Reads,
  museums: Museums,
};

const Post = () => {
  const { slug } = useParams();
  const PostComponent = POST_COMPONENTS[slug];
  if (!PostComponent) return <p>not found</p>;

  return <PostComponent />;
};

export default Post;
