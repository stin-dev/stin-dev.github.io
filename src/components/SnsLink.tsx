import React from 'react';
import "./SnsLink.css";

interface Props {
  color?: string,
  backgroundColor?: string,
  href?: string,
}

const SnsLink: React.FC<Props> = (props) => {
  return (
    <a
      className="SnsLink-root"
      href={props.href}
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor
      }}
    >
      {props.children}
    </a>
  );
}

export default SnsLink;