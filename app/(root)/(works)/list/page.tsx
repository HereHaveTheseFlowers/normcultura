import List from "@/components/List/List";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function ListPage() {
  return (
    <>
      <Navbar pagePath="list" />
      <List />
    </>
  );
}

export default ListPage;
