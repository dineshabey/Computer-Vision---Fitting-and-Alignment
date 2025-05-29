"use client";

export default function Message({ text, type }: { text: string, type: string }) {
    return (
        <div
            className={`p-2 max-w-xs rounded-lg ${
                type === "sent"
                    ? "bg-blue-500 self-end text-right"
                    : "bg-gray-700 self-start text-left"
            }`}
        >
            {text}
        </div>
    );
}
