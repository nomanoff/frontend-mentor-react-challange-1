import React, { useState, useEffect, useCallback } from "react";

const data = [
  {
    title: "DevLens",
    description:
      "A platform for developers to share and discover new tools and resources.",
    id: 1,
    isActive: true,
    iconBackgroundColor: "red",
  },
];
function ChatApp() {
  const [messages, setMessages] = useState(["Hello", "How are you?"]);
  const [count, setCount] = useState(0);
  const [tab, setTab] = useState("all");

  const fetchMessages = useCallback(() => {
    console.log("Fetching messages...");
    return messages; // In a real app, this would fetch from a server
  }, [messages]);

  // simulate a timer to fetch messages every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `New message ${prevMessages.length + 1}`,
      ]);
    }, 5000);
    return () => clearInterval(timer); // cleanup on unmount
  }, [fetchMessages]);

  return (
    <div>
      <MessageList fetchMessages={fetchMessages} />
      <button onClick={() => setCount(count + 1)}>Refresh ({count})</button>
    </div>
  );
}

function MessageList({ fetchMessages }) {
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]); // This causes unnecessary re-renders!

  return <p>Messages loaded...</p>;
}

export default ChatApp;
