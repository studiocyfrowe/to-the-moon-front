import DashboardLayout from "@/app/components/dashboardLayout";
import MainLayout from "@/app/components/mainLayout";

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function Followed() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-col">
                    <h4 className="mb-8 text-2xl border-b border-orange-600/30 pb-8">Obserwowani</h4>
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}