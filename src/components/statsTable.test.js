import React from 'react';
import StatsTable from './statsTable'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    let stats = {"followers":0,"name":"","login":"","total_repos":0,"forks":0,"stars":0,"prs":0,"watchers":0}
    shallow(<StatsTable stats={stats}/>);
  });