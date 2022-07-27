import Link from 'next/link';
import React from 'react'
import styles from "../styles/post.module.css";

function Text({ text }: any) {
  if (!text) {
    return null;
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <>
        <span
          className={[
            bold ? styles.bold : "",
            code ? styles.code : "",
            italic ? styles.italic : "",
            strikethrough ? styles.strikethrough : "",
            underline ? styles.underline : "",
          ].join(" ")}
          style={color !== "default" ? { color } : {}}
        >
          {text.link ? <Link href={text.link.url}>{text.content}</Link> : text.content}
        </span>
      </>
    );
  });
}

export default Text