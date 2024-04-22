import DashboardLayout from "@/app/components/dashboardLayout";
import MainLayout from "@/app/components/mainLayout";
import UserCard from "@/app/components/userCard";

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function Following() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-col">
                    <h4 className="mb-8 text-2xl border-b border-orange-600/30 pb-8">Obserwujący</h4>
                </div>
                <div className="grid-cols-4 gap-8">
                    {/* <UserCard/> */}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}