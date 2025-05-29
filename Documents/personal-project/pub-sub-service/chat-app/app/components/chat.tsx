"use client";
import { useEffect, useState } from "react";
import Message from "./Message";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const patientId = "123"; // Example patient ID

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:5000/chat/1`);

        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, { text: event.data, type: "received" }]);
        };

        return () => socket.close();
    }, []);

    const sendMessage = () => {
        if (!input.trim()) return;
        
        const socket = new WebSocket(`ws://localhost:5000/chat/1`);
        socket.onopen = () => {
            socket.send(input);
            setMessages((prev) => [...prev, { text: input, type: "sent" }]);
            setInput("");
        };
    };

    return (
        <div className="w-96 bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <h2 className="text-xl font-bold text-center mb-4">Live Chat</h2>
            <div className="h-64 overflow-y-auto space-y-2 p-2 border border-gray-700 rounded-lg bg-gray-900">
                {messages.map((msg, idx) => (
                    <Message key={idx} text={msg.text} type={msg.type} />
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
                    className="px-4 py-2 bg-blue-500 rounded-r-lg hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
