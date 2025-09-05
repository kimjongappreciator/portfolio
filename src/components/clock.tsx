import { useState, useEffect } from "react";
export function ClockComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className="px-3 py-1 text-sm bg-[var(--taskbar-bg)]
                 border border-[1px solid gray]
                 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_black]"
    >
      {formatTime(currentTime)}
    </div>
  );
}
