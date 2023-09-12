"use client";
import { useEffect, useState } from "react";

export default function ProgressBar(props: { completed: number }) {
  const { completed } = props;
  const [progress, setProgress] = useState(0);
  /**
   * After the DOM is mounted, this useEffect will change the current width.
   * Consequently, it  will update the current dom, combined with a transition property in the SASS, the filler width will get properly animated.
   * This is the ideal solution if we want to have an animated dynamic progress value
   */
  useEffect(() => {
    setProgress(completed);
  }, []);

  return (
    <div className="progressBar">
      <div className="progressBar-filler" style={{ width: `${progress}%` }}>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
}
