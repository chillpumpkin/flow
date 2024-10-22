import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Content at the top */}
      <div className="flex-grow p-4 overflow-y-auto mx-auto">
        <p>Chat messages or other content go here.</p>
      </div>

      {/* Textbox at the bottom */}
      <div className="p-12 mx-auto w-full h-full]">
        <ChatBox />
      </div>
    </div>
  );
}
