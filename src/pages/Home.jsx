import React from "react";
import Layout from "../components/layout";
import TodosList from "../components/todosList";

const Home = () => {
  return (
    <Layout>
      <TodosList />
    </Layout>
  );
};

export default Home;
