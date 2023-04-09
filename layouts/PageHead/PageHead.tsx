import React, { useMemo } from "react";
import Link from "next/link";

import styles from "./PageHead.module.css";

function pathGetterByURL(routerAsPath: string) {
  return ["home", ...routerAsPath.split("/").filter((path) => path !== "")];
}

const PageHead: ExtendedFC<{ routerAsPath: string }> = ({ routerAsPath }) => {

  const breadcrumbsPaths = useMemo(()=> pathGetterByURL(routerAsPath), [routerAsPath]) 

  return (
    <nav aria-label="breadcrumb" className={"container " + styles.breadcrumbNav}>
      <ol className="breadcrumb">
        {
          breadcrumbsPaths.map((path, index) => {
            let partialUrl = breadcrumbsPaths.slice(1, index + 1).join("/"),
                itemKey = `bcNav-${path}`,
                isLastItem = index === breadcrumbsPaths.length - 1;

            return (
              <li
                className={`breadcrumb-item ${isLastItem ? "active" : ""}`}
                aria-current={isLastItem ? "page" : "step"}
                key={itemKey}
              >
                {
                  isLastItem
                    ? path
                    :  <Link href={`/${partialUrl}`}> { path } </Link>
                }
              </li>
            );
        })}
      </ol>
    </nav>
  );
};

export default PageHead;
