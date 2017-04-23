/* @flow */
import React from 'react';
import Layout from '../layout/layout';
import { Link } from 'react-router-dom'

const Root = () => (
  <Layout>
    <h1 className="root">EZ</h1>
    <Link to="/todo">Todo Example</Link>
  </Layout>
);

export default Root;
