import SignUpFunnelPage from "./Funnel";
import Header from "@/components/common/Header";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <SignUpFunnelPage/>
      </div>
    </div>
  );
};

export default page;
