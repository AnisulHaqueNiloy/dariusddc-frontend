import HeadLine from "@/Components/dashboard-components/HeadLine"
import RegisteredUsers from "@/Components/dashboard-components/RegisteredUsers"
import Users from "@/Components/dashboard-components/Users"

function page() {
    return (
        <div className="space-y-6 p-6">
            <HeadLine />
            <RegisteredUsers />
            <Users />
        </div>
    )
}

export default page