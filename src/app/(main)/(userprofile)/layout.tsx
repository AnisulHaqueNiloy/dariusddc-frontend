import UserProfileSidebar from "./_components/UserProfileSidebar";

const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full sm:w-[90%] md:max-w-[80%] mx-auto">
      {/* Sidebar */}
      <div className="">
        <UserProfileSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:p-2">{children} </div>
    </div>
  );
};

export default UserProfileLayout;
