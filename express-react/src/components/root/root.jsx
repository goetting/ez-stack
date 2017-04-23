/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';

const Root = () => (
  <Layout>
    <h1 className="root">EZ</h1>
    <Link to="/todo">Todo Example</Link>
  </Layout>
);

export default Root;
