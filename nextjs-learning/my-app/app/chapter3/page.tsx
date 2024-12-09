"use client"

import { useEffect, useState } from "react";

export default function Chapter3() {
  const [feed, setFeed] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.example.com/feed")
      .then((response) => response.json())
      .then((data) => setFeed(data));
  }, []);

  return (
    <>
      <h1>Chapter 3</h1>
      {(!feed || feed.length === 0) && <p>feed is empty</p>}
    </>
  );
}
// function setFeed(data: any): any {
//     throw new Error("Function not implemented.");
// }
