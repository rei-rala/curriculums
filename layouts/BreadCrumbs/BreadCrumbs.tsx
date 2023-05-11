import React, { useMemo } from "react";
import Link from "next/link";

import styles from "./BreadCrumbs.module.css";

function pathGetterByURL(routerAsPath: string) {
  // 
  const ommitedPaths = ['auth']

  // also getting #id if exists
  let path = routerAsPath.split("#")[0];
  let id = routerAsPath.split("#")[1];
  
  let defaultUrls = ["home", ...path.split("/").filter((path) => path !== "" && !ommitedPaths.some(op => op === path))]

  if (id) {
    // Won't show IDs by the moment
    // return defaultUrls.concat(`#${id}`);
  }

  return defaultUrls;
}

const BreadCrumbs: ExtendedFC<{ routerAsPath: string }> = ({ routerAsPath }) => {
  const breadcrumbsPaths = useMemo(()=> pathGetterByURL(routerAsPath), [routerAsPath]) 

  return (
    <nav aria-label="breadcrumb" className={`row px-3 py-1 d-flex align-items-center ${styles.breadcrumbNav}`}>
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

export default BreadCrumbs;
