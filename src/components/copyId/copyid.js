import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const CopyItem = ({ item }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }, [isCopied]);
  return (
    <>
      <div className="flex items-center gap-2">
        <p>{item}</p>
        <CopyToClipboard text={item} onCopy={() => setIsCopied(true)}>
          <Button type="text">
            <FontAwesomeIcon icon={faCopy} style={{ fontSize: "17px" }} />
          </Button>
        </CopyToClipboard>
      </div>
      {isCopied && <span style={{ color: "green" }}>Copied!</span>}
    </>
  );
};
