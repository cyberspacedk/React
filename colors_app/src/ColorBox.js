import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/colorBoxStyles";

const ColorBox = ({
  name,
  background,
  moreUrl,
  isShowFullPalette,
  classes
}) => {
  const [copied, setCopied] = useState(false);

  const switchhandler = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={switchhandler}>
      <div className={classes.colorBox} style={{ background }}>
        {/* overlay */}
        <div
          className={`${classes.copyOverlay} ${copied &&
            classes.shadowOverlay}`}
          style={{ background }}
        />
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        {/* overlay end */}

        <div>
          <div className={classes.boxContent}>
            <span className={styles.colorName}>{name}</span>
          </div>
          <button className={classes.copyButtom}>Copy</button>
        </div>

        {isShowFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>more</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
