import { useEffect, useState } from "react";

export default function UpdatingStatus({ updating }) {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    let timer;
    if (updating) {
      setStatus("Updating...");
      return;
    }
    setStatus("Updated successfully");
    timer = setTimeout(() => {
      setStatus(null);
    }, 500);
    return () => clearTimeout(timer);
  }, [updating]);
  return <p className="update-message">{status}</p>;
}
