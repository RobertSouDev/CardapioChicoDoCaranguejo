import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
    return ( 
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-200 to-rose-100">
            <Navbar/>

            <main className="flex-grow">
                <Outlet/>
                
            </main>
        </div>
     );
}

