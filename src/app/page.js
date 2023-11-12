import ContactPage from "@/components/ContactPage";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <main>
      <ContactPage />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default Home;
