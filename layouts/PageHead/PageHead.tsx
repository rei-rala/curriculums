import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import styles from "./PageHead.module.css";


function pathGetterByPath(routerAsPath: string) {
  return ["home", ...routerAsPath.split("/").filter((path) => path !== "")];
}

const PageHead: DefaultFC = () => {
  const router = useRouter()
  let { asPath } = router

  const breadcrumbsPaths = useMemo(() => pathGetterByPath(asPath), [asPath])

  return (
    <div className={styles.navigationWrapper}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.navigationInner}>
        {
          breadcrumbsPaths.map((path, index) => {
            
            let partialUrl = breadcrumbsPaths.slice(1, index + 1).join("/"),
                itemKey = `bcNav-${index}`,
                isLastItem = index === breadcrumbsPaths.length - 1;

            return isLastItem
              ? (
                <Typography key={itemKey}>
                  <b>{path}</b>
                </Typography>
              ) : (
                <Link key={itemKey} href={`/${index ? partialUrl : ""}`}>
                  {path}
                </Link>
              )
          })
        }
      </Breadcrumbs>
    </div>
  );
};

export default PageHead;