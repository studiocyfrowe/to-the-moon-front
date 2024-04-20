import UserDataExcerpt from "./UserDataExcerpt";
import DashboardUser from "./dashboardUser";
import MainNavigation from "./mainNavigation";

export default function DashboardLayout({user, children}) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 p-16 h-screen">
                <div className="col-span-2 flex flex-col">
                    <DashboardUser>
                        <UserDataExcerpt data={user}/>
                    </DashboardUser>
                    <MainNavigation></MainNavigation>
                </div>
                <div className="col-span-10 border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-8 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </>
    )
}