"use client";
import { useEffect, useState } from "react";

export default function DoctorChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const doctorId = "doctor_123"; // Example doctor ID

    useEffect(() => {
        const socket = new WebSocket(`ws://${window.location.hostname}:5000/chat/${doctorId}`);

        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        return () => socket.close();
    }, []);

    const sendMessage = () => {
        if (!input.trim()) return;
        const socket = new WebSocket(`ws://${window.location.hostname}:5000/chat/${doctorId}`);
        socket.onopen = () => {
            socket.send(input);
            setMessages((prev) => [...prev, `Doctor: ${input}`]);
            setInput("");
        };
    };

    return (
        <div className="w-96 bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <h2 className="text-xl font-bold text-center mb-4">Doctor Chat</h2>
            <div className="h-64 overflow-y-auto space-y-2 p-2 border border-gray-700 rounded-lg bg-gray-900">
                {messages.map((msg, idx) => (
                    <p key={idx} className="p-2 rounded-lg bg-green-500">{msg}</p>
                ))}
            </div>
            <div className="flex mt-3">
                <input
                    type="text"
                    className="flex-1 p-2 rounded-l-lg bg-gray-700 border border-gray-600 text-white"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={sendMessage}
                    className="px-4 py-2 bg-green-500 rounded-r-lg hover:bg-green-600 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
