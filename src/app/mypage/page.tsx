import UserProfilePanel from "./components/UserProfilePanel";
import Header from "@/components/common/Header";

function page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center pt-20">
        <UserProfilePanel />
      </div>
    </div>
  );
}

export default page;
