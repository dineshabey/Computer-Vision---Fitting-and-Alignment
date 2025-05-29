"use client";
import Chat from "./components/chat";
import DoctorChat from "./components/DoctorChat";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 gap-10">
            <Chat />  {/* Patient Chat */}
            <DoctorChat />  {/* Doctor Chat */}
        </div>
    );
}
