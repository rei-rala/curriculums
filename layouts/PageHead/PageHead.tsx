import React from "react";
import Link from "next/link";

import { TransitionGroup } from "react-transition-group";
import { Breadcrumbs, Fade, Typography } from "@mui/material";

import styles from "./PageHead.module.css";

function pathGetterByURL(routerAsPath: string) {
  return ["home", ...routerAsPath.split("/").filter((path) => path !== "")];
}

const PageHead: ExtendedFC<{ routerAsPath: string }> = ({ routerAsPath }) => {
  const breadcrumbsPaths = pathGetterByURL(routerAsPath);

  return (
    <div className={styles.navigationWrapper}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.navigationInner}>
        <TransitionGroup>
          {breadcrumbsPaths.map((path, index) => {
            let partialUrl = breadcrumbsPaths.slice(1, index + 1).join("/"),
              itemKey = `bcNav-${path}`,
              isLastItem = index === breadcrumbsPaths.length - 1;

            return (
              <Fade key={itemKey}>
                {/* TODO: Fix gap */}
                <Typography sx={{ mr: 1 }}>
                  {
                    isLastItem
                      ? <b>{path}</b>
                      : <Link href={`/${index ? partialUrl : ""}`}>{path}</Link>
                  }
                </Typography>
              </Fade>
            );
          })}
        </TransitionGroup>
      </Breadcrumbs>
    </div>
  );
};

export default PageHead;
