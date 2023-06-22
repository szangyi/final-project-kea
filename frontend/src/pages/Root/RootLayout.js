import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
    <div className="noNavRoot">
        <Outlet/>
    </div>
    )
}

export default RootLayout