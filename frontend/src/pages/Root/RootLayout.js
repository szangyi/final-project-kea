import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
    <div className="blue">
        <Outlet/>
    </div>
    )
}





export default RootLayout