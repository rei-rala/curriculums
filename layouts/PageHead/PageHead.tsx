import React from "react";
import Link from "next/link";

import { TransitionGroup } from "react-transition-group";

import styles from "./PageHead.module.css";

function pathGetterByURL(routerAsPath: string) {
  return ["home", ...routerAsPath.split("/").filter((path) => path !== "")];
}

const PageHead: ExtendedFC<{ routerAsPath: string }> = ({ routerAsPath }) => {
  const breadcrumbsPaths = pathGetterByURL(routerAsPath);

  return (
    <div className={styles.navigationWrapper}>
      <nav aria-label="breadcrumb" className={styles.navigationInner}>
        <TransitionGroup>
          {breadcrumbsPaths.map((path, index) => {
            let partialUrl = breadcrumbsPaths.slice(1, index + 1).join("/"),
              itemKey = `bcNav-${path}`,
              isLastItem = index === breadcrumbsPaths.length - 1;

            return (
              <p key={itemKey} style={{marginRight: "5px"}}>
                {/* TODO: Fix gap */}
                /&nbsp;
                {
                  isLastItem
                    ? <b>{path}</b>
                    : <Link href={`/${index ? partialUrl : ""}`}>{path}</Link>
                }
              </p>
            );
          })}
        </TransitionGroup>
      </nav>
    </div>
  );
};

export default PageHead;
