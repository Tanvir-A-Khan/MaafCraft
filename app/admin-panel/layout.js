import AdminNav from "./admin-nav/page";

export default function AdminLayout({ children }) {
    return (
        <div className=" flex flex-row">
            <AdminNav />
            <div>
                <div className="me-28">
                    <h1 className="text-red-600 font-semibold text-2xl uppercase underline">
                        Admin panel
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
