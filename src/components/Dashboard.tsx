import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen  bg-gray-100 flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
