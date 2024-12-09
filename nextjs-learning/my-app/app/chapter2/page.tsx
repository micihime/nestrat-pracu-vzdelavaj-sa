"use client";

import styles from "../page.module.css";
import Button from "../components/Button";

export default function Home() {
  // Callback function definition
  const handleButtonClick: (message: string) => void = (message) => {
    console.log(message);
    // You can do anything with the received value here
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
            {/* Using the Button component with callback */}
            <Button label="Click Me" onClick={handleButtonClick} />
      </main>{" "}
    </div>
  );
}
