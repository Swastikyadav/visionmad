import React from "react";
import queryString from "query-string";

function ProjectDetail({ location }) {
  return (<>Project Detail Page for {queryString.parse(location.search).name}</>);
}

export default ProjectDetail;