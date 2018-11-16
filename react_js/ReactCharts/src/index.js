import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './components/charts/Bar';

const bardata = [
  { year: '1951 ', sales: 38 },
  { year: '1952 ', sales: 52 },
  { year: '1956 ', sales: 61 },
  { year: '1957 ', sales: 145 },
  { year: '1958 ', sales: 48 },
  { year: '1959 ', sales: 38 },
  { year: '1960 ', sales: 38 },
  { year: '1962 ', sales: 38 },
];

const metadata_array={
  height: 400,
  color: '#a8de4d',
  title: '',
  subtitle: 'Sub-Title of chart'
};

const cols = {
  'sales': {
    tickInterval: 20,
    alias: 'Sales (in Cr)'
  },
};

const geomLabel = {
  sales: {
    content: ['year*sales', (year, sales) => `${sales}k`]
  }
};

const styles = {
  wrapper: {
    maxWidth: 1080,
    textAlign: 'center',
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainTitle: {
    fontSize: 18,
    color: '#333',
    display: 'block',
    padding: 10
  },
  subTitle: {
    fontSize: 14,
    color: '#bbb',
    display: 'block',
    padding: 10
  }
};

ReactDOM.render((
  <div>
    <BarChart metadata={metadata_array}
      data={bardata} scale={cols} xAxis="year" yAxis="sales" styles={styles}
      geomLabel={geomLabel}
    />
  </div>
), document.getElementById("root"));