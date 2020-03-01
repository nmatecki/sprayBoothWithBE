import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { JobBoard } from './components/JobBoard';
import NewJob from './components/NewJob';
import FetchData from './components/FetchData';

import './custom.css'
import { Work } from './components/Work/Work';

export default () => (
    <Layout>
        <Route exact path='/' component={JobBoard} />
        <Route path='/newjob' component={NewJob} />
        <Route path='/work' component={Work} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
