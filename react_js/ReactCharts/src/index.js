import React from 'react';
import ReactDOM from 'react-dom';
import {Affix, Layout, Menu, Icon} from 'antd';
import {Navbar, Footer} from './Components/Shared/NavbarAndFooter';
import {BarChart, PieChart, StackedBarChart} from './Components/Shared/Charts';

import 'antd/dist/antd.css';

const {Content, Sider}=Layout;

// bar-chart-data section
var bar_metadata={
  height: 400,
  color: '#a8de4d',
  title: 'Title of Bar chart',
  subtitle: 'Sub-Title of Bar chart',
  xAxis: {
    name: 'year',
    displayTitle: false,
    tickInterval: 20,
    alias: 'X axis'
  },
  yAxis: {
    name: 'sales',
    displayTitle: false,
    tickInterval: 20,
    alias: 'Sales (in Cr)'
  },
};
var bar_data=[
  { year: '1951 ', sales: 38 },
  { year: '1952 ', sales: 52 },
  { year: '1956 ', sales: 61 },
  { year: '1957 ', sales: 145 },
  { year: '1958 ', sales: 48 },
  { year: '1959 ', sales: 38 },
  { year: '1960 ', sales: 38 },
  { year: '1962 ', sales: 38 },
];
var bar_geom_label={
  sales: {
    content: ['year*sales', (year, sales) => `${sales}k`]
  }
};

// pie-chart-data section
var pie_metadata={
  height: 500,
  radius: 0.75,
  innerRadius: 0.6,
  color: '#a8de4d',
  title: 'Title of Pie chart',
  subtitle: 'Sub-Title of Pie chart',
};
var pie_data=[
  { item: 'abc', count: 30 },
  { item: 'cba', count: 20 },
  { item: 'xyz', count: 11 },
  { item: 'zyx', count: 10 },
  { item: 'abcagain', count: 30 }
];

// stacked-bar-chart-data section
var stacked_bar_metadata={
  height: 500,
  title: 'Title of Stacked Bar chart',
  subtitle: 'Sub-Title of Stacked Bar Chart',
};
var stacked_bar_data=[
  { name:'London', 'Jan': 18.9, 'Feb': 28.8, 'Mar' :39.3, 'Apr': 81.4, 'May': 47, 'Jun': 20.3, 'Jul': 24, 'Aug': 35.6 },
  { name:'Berlin', 'Jan': 12.4, 'Feb': 23.2, 'Mar' :34.5, 'Apr': 99.7, 'May': 52.6, 'Jun': 35.5, 'Jul': 37.4, 'Aug': 42.4}
];

// to make side-navigation-bar's height 100%
// not working
// affix makes it not working
var sider_style={
  height:`100%`
};
ReactDOM.render((
  <div>
  <Navbar />
    <Layout>
      
      {/*<Affix onChange={affixed => console.log(affixed)}>*/}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log("broken ",broken); }}
          onCollapse={(collapsed, type) => { console.log("collapsed ", collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
      {/*</Affix>*/}

      <Layout>
        <Content>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <BarChart data={bar_data} metadata={bar_metadata} geomLabel={bar_geom_label} />   
            <PieChart data={pie_data} metadata={pie_metadata} />
            <StackedBarChart data={stacked_bar_data} metadata={stacked_bar_metadata} />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  </div>
), document.getElementById("root"));
// 24th
// header and footer made permanent