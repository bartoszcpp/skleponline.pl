import { useRouter } from "next/router";
import IdComponents from "../../components/IdComponents";
import Header from "../../components/Header";
import BackgroundImage from "../../components/BackgroungImage";

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header />
      <BackgroundImage />
      <IdComponents id={id} />
    </>
  );
};

export default id;
