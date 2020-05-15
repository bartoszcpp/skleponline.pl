import { useRouter } from "next/router";
import IdComponents from "../../components/IdComponents";

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  return <IdComponents id={id} />;
};

export default id;
