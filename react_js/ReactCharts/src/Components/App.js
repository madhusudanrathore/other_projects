import React, { Component } from 'react';
import { DescriptionList, NumberInfo, Trend } from 'ant-design-pro';
import { Button, Tabs, Radio, Icon, Row, Col, Card, Anchor } from 'antd';
import DataSet from "@antv/data-set";
import {Tooltip as Tp} from 'antd';
import { Chart, Axis, Geom,  Coord, Label, Legend, View, Guide, Shape, Facet, Util  } from 'bizcharts';
import {Tooltip} from 'bizcharts';
import numeral from 'numeral';
import moment from 'moment';
import { Bar, WaterWave, ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
// import logo from './logo.svg';
import './App.css';


const TabPane = Tabs.TabPane;
const { Description } = DescriptionList;
const {Link} = Anchor;
const ButtonGroup = Button.Group;
const { DataView } = DataSet;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const description = (
  <DescriptionList size="small" col="2">
  <NumberInfo
    subTitle={<span>Last updated: 23</span>}
    total={numeral(205.05).format('0,0')}
    status="up"
    subTotal={2.1}
  />
    <Description term="key1">Value #1</Description>
    <Description term="key2">Value #2</Description>
    <Description term="key3">Value #3</Description>
    <Description term="key4"><a href="">Value #4</a></Description>
  </DescriptionList>
);
const extra = (
  <Row>
    <Col sm={12} md={6}>
      <div style={{ color: 'rgba(0, 0, 0, 0.43)' }}>YTD return</div>
      <div style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 20 }}>-33%</div>
    </Col>
    <Col sm={12} md={6}>
      <div style={{ color: 'rgba(0, 0, 0, 0.43)' }}>3 years</div>
      <div style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 20 }}>+8%</div>
    </Col>
  </Row>
);
const tabList = [{
    key: 'detail',
    tab: 'Financial',
    },{
    key: 'rule',
    tab: 'Non-Financial',
}];
const revenueDataYearwise = [
  { year: '2014', sales: 11703 },
  { year: '2015', sales: 13620},
  { year: '2016', sales: 16262 },
  { year: '2017', sales: 20642 },
  { year: '2018', sales: 25561 },
];
const revenueDataQuarterwise = [
  { year: '2018 Q1', sales: 11703 },
  { year: '2018 Q2', sales: 11703 },
  { year: '2018 Q3', sales: 13620},
  { year: '2018 Q4', sales: 16262 },
  { year: '2019 Q1', sales: 20642 },
  { year: '2019 Q2', sales: 25561 },
];
const revenueData = {
  yearwise: revenueDataYearwise,
  quarterwise: revenueDataQuarterwise
};
const patDataYearwise = [
  { year: '2014', PAT: 1611 },
  { year: '2015', PAT: 1998},
  { year: '2016', PAT: 2556 },
  { year: '2017', PAT: 3340 },
  { year: '2018', PAT: 4234 },
];
const patDataQuarterwise = [
  { year: '2018 Q1', PAT: 965 },
  { year: '2018 Q2', PAT: 1002 },
  { year: '2018 Q3', PAT: 1077},
  { year: '2018 Q4', PAT: 1179 },
  { year: '2019 Q1', PAT: 1260 },
  { year: '2019 Q2', PAT: 964 },
];
const patData = {
  yearwise: patDataYearwise,
  quarterwise: patDataQuarterwise
};
const depositsData = [
  { year: '2014', amount: 74184 },
  { year: '2015', amount: 91157},
  { year: '2016', amount: 111702 },
  { year: '2017', amount: 142855 },
  { year: '2018', amount: 200687 },
];
const depositsCols = {
  'amount': {
    tickCount: 5,
    formatter : val => `${val/1000}k`,
    alias: 'Deposits (in Cr)'
  },
};
const assetsData = [
  { item: 'Advances', count: 203517 },
  { item: 'Investments', count: 68292 }
];
const liabilitiesData = [
  { item: 'Fixed deposits', count: 127514 },
  { item: 'Savings Deposits', count: 68292 },
  { item: 'Current Accounts', count: 68292 },
  { item: 'Other borrowings', count: 74893}
];
const advancesData = [
  { year: '2014', amount: 55633 },
  { year: '2015', amount: 75548},
  { year: '2016', amount: 98300 },
  { year: '2017', amount: 132261 },
  { year: '2018', amount: 203517 },
];
const gNPAData = [
  { year: '2014', 'Gross NPA %': 0.31 },
  { year: '2015', 'Gross NPA %': 0.41},
  { year: '2016', 'Gross NPA %': 0.76 },
  { year: '2017', 'Gross NPA %': 1.52 },
  { year: '2018', 'Gross NPA %': 1.28 },
];
const nNPAData = [
  { year: '2014', 'Net NPA %': 0.05 },
  { year: '2015', 'Net NPA %': 0.12},
  { year: '2016', 'Net NPA %': 0.29},
  { year: '2017', 'Net NPA %': 0.81 },
  { year: '2018', 'Net NPA %': 0.64 },
];
const pcrData = [
  { year: '2014', 'PCR %': 85.1 },
  { year: '2015', 'PCR %': 72.01},
  { year: '2016', 'PCR %': 62.02},
  { year: '2017', 'PCR %': 46.89 },
  { year: '2018', 'PCR %': 50.02 },
];
const geomLabel = {
      sales: {
        content: ['year*sales', (year, sales) => `${sales}k`]
      }
        }; // 默认选中第三项的结果
        const barData = [
          { year: '2014', sales: 11703 },
          { year: '2015', sales: 13620},
          { year: '2016', sales: 16262 },
          { year: '2017', sales: 20642 },
          { year: '2018', sales: 25561 },
      ];
      const cols = {
          'sales': {
            tickCount: 5,
            alias: 'Revenue (in Cr)'
          },
};
const styles = {
          wrapper: {
            maxWidth: 1080,

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

const yesBankRevenue = [{x:'2014', y:11703},{x:'2015', y:13620},{x:'2016', y:16262},{x:'2017', y:20642},{x:'2018', y:25561}];

function AxisFormatter(props){
  return (props.label==null)?<Axis name={props.name} />:<Axis name={props.name} label={props.label.yAxis} />;
}
class BarChart extends React.Component{
      render() {
        return <div style={this.props.styles.wrapper}>
            <Chart renderer='svg' height={this.props.height} data ={this.props.data} scale={this.props.scale} forceFit  padding={(this.props.padding!=null)?this.props.padding:[10, 0, 30, 50]}>
            <span className="main-title" style={this.props.styles.mainTitle}>
                  {this.props.title}
            </span>
            <Axis name={this.props.xAxis} />
            <AxisFormatter name={this.props.yAxis} label={this.props.label} />

            <Tooltip crosshairs={{type: "y"}} />
            <Geom type="interval" position={this.props.xAxis + "*" + this.props.yAxis} color={this.props.color}>

            </Geom>
            </Chart>
          </div>;
      }
}
class Stackedpercentagecolumn extends React.Component {
          render() {
            const data = [
              {
                country: "Interest Income",
                year: "1750",
                value: 163
              },
              {
                country: "Interest Income",
                year: "1800",
                value: 203
              },
              {
                country: "Interest Income",
                year: "1850",
                value: 276
              },
              {
                country: "Interest Income",
                year: "1900",
                value: 408
              },
              {
                country: "Interest Income",
                year: "1950",
                value: 547
              },
              {
                country: "Interest Income",
                year: "1999",
                value: 729
              },
              {
                country: "Interest Income",
                year: "2050",
                value: 628
              },
              {
                country: "Interest Income",
                year: "2100",
                value: 828
              },
              {
                country: "Non-Interest Income",
                year: "1750",
                value: 502
              },
              {
                country: "Non-Interest Income",
                year: "1800",
                value: 635
              },
              {
                country: "Non-Interest Income",
                year: "1850",
                value: 809
              },
              {
                country: "Non-Interest Income",
                year: "1900",
                value: 947
              },
              {
                country: "Non-Interest Income",
                year: "1950",
                value: 1402
              },
              {
                country: "Non-Interest Income",
                year: "1999",
                value: 3634
              },
              {
                country: "Non-Interest Income",
                year: "2050",
                value: 5268
              },
              {
                country: "Non-Interest Income",
                year: "2100",
                value: 7268
              }
            ];
            const ds = new DataSet();
            const dv = ds
              .createView()
              .source(data)
              .transform({
                type: "percent",
                field: "value",
                // 统计销量
                dimension: "country",
                // 每年的占比
                groupBy: ["year"],
                // 以不同产品类别为分组
                as: "percent"
              });
            const cols = {
              percent: {
                min: 0,

                formatter(val) {
                  return (val * 100).toFixed(2) + "%";
                }
              }
            };
            return (
              <div>
                <Chart height={300} data={dv} scale={cols} forceFit>
                  <Legend />
                  <Axis name="year" />
                  <Axis name="percent" />
                  <Tooltip />
                  <Geom
                    type="intervalStack"
                    position="year*percent"
                    color={"country"}
                  />
                </Chart>
              </div>
            );
          }
}

class Groupedcolumn extends React.Component {
  render() {
    const data = [
      { name: "Net Interest Income", "2014": 2716,"2015":3488, "2016":4567, "2017":5797, "2018":7737},
      { name: "Non-interest Income", "2014":  1722,"2015":2048, "2016":2729, "2017":4217, "2018":5293}
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["2014", "2015", "2016", "2017", "2018"],
      // 展开字段集
      key: "year",
      // key字段
      value: "income" // value字段
    });
    return (
      <div>
        <Chart renderer='svg' height={300} data={dv} forceFit>
          <Axis name="year" />
          <Axis name="income" />
          <Legend />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="year*income"
            color={"name"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

class BarChartPane extends React.Component{

  render(){
    return <div className="full_panel">
    <div className="first_column wid-60">
    <Bar
      height={200}
      title={this.props.chart.title}
      data={this.props.chart.data}
      autoLabel={true}
    />
    </div>
    <div className="second_column wid-40">
    <Row>
      <Col span={24}>
        <ChartCard
          title={this.props.card.title}
          action={
            <Tp title={this.props.card.tooltip}>
              <Icon type="info-circle-o" />
            </Tp>
          }

          footer={
            <Field label="5 Year CAGR" value='12%' />
          }
          contentHeight={150}
        >
        <p>{this.props.card.text}</p>

        </ChartCard>
      </Col>


    </Row>
    </div>


    </div>;
  }
}
function getChartTab(data,title){
  return(
    <div className="full_panel">
    <div className="first_column wid-60">
    <Bar
      height={200}
      title={title}
      data={data}
      autoLabel={true}
      />
    </div>
    <div className="second_column wid-40">
    <Row>
      <Col span={24}>
        <ChartCard
          title="Total income"
          action={
            <Tp title="Total income from interests earned, service charges, Total income from interests earned, service charges, Total income from interests earned, service charges">
              <Icon type="info-circle-o" />
            </Tp>
          }

          footer={
            <Field label="5 Year CAGR" value='12%' />
          }
        >
        <p> this is a chart card, this is a chart card, this is a chart card,this is a chart card this is a chart card,this is a chart ChartCardthis is a chart card </p>

        </ChartCard>
      </Col>


    </Row>
    </div>


    </div>
  );
}

class AnalysisInfoTabs extends React.Component{

  isYearly(frequency){
    return (frequency.localeCompare('yearly')===0)?true:false;
  }
  render(){
    return <div>
    <Tabs defaultActiveKey="1" >
       <TabPane tab="Analysis" key="1">
          <p>{(this.props.frequency.localeCompare('yearly')===0)?this.props.analysis:this.props.quarterlyAnalysis}</p>
       </TabPane>
       <TabPane tab={<div>Info <Icon type="info-circle-o" /></div>} key="2">
          <p>{this.props.info}</p>
       </TabPane>
    </Tabs>
    </div>;
  }
}
class SimpleAnalysis extends React.Component{
  render(){
    return <div className="ant-card">
      <div className="ant-card-body" style={{padding: "20px 24px 8px"}}>
        <div className="antd-pro-charts-chart-card-chartCard">
          <div className="antd-pro-charts-chart-card-chartTop">
            <div className="antd-pro-charts-chart-card-avatar">
            </div>
            <div className="antd-pro-charts-chart-card-metaWrap">
              <div className="antd-pro-charts-chart-card-meta">
                <span></span>

                <span className="antd-pro-charts-chart-card-action"><Tp title={this.props.toolTip}><Icon type="info-circle-o" /></Tp></span>
              </div>
            </div>
          </div>
          <div className="antd-pro-charts-chart-card-content" style={{height: "100px"}}>
            <div className="antd-pro-charts-chart-card-contentFixed">
              <p> {this.props.analysis} </p>
            </div>
          </div>
          <div className="antd-pro-charts-chart-card-footer">
              <div className="antd-pro-charts-field-field">
                <span>{this.props.footerKey}</span><span>{this.props.footerValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}
// TODO: Understand ToolTip Generation - Ideally we can include year as title?
// TODO: Responsive Label. Have Label in web and replace it with Legend in mobile
class PieChart extends React.Component{

  getScale(){
    const cols = {
    percent: {
      formatter: val => {
        val = (val.toFixed(4) * 100) + '%';
        return val;
      }
    }
  };
  return cols;
  }

 transformData(oldData){
     const dv1 = new DataView();
     dv1.source(oldData).transform({
       type: 'percent',
       field: 'count',
       dimension: 'item',
       as: 'percent'
     });
     return dv1;
   }

  render() {
    return(
      <div>
      <Chart renderer='svg' height={this.props.height} data={this.transformData(this.props.data)} scale={this.getScale()} forceFit padding={[30, 0, 30, 30]}>
        <Coord type={'theta'} radius={this.props.radius} innerRadius={this.props.innerRadius}/>
        <Axis name="percent" />
        <Tooltip showTitle={false}
          itemTpl = '<li><span style="background-color:{color};" className="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
        <Guide>
        </Guide>
        <Geom
          type="intervalStack"
          position="percent"
          color ='item'
          tooltip={['item*percent',(item, percent) => {
            percent =(percent.toFixed(3) * 100) + '%';
            return {
              name: item,
              value: percent
            };
          }]}
          style={{lineWidth: 1,stroke: '#fff'}}
        >
        <Legend position="top" clickable={false}/>

        </Geom>
      </Chart>
      </div>
    );
  }
}
class GroupedColumnWithAnalysis extends React.Component{
  render(){
    return <div className="full_panel">
    <div className="first_column wid-50">
    <Groupedcolumn />
    </div>
    <div className="second_column wid-50">
      <SimpleAnalysis toolTip={this.props.toolTip} footerKey={this.props.footerKey} footerValue={this.props.footerValue} analysis={this.props.analysis}/>
    </div>
    </div>;
  }
}
class BarChartWithAnalysis extends React.Component{
  constructor(props){
    super(props);
    this.state={data:'yearly', quarterWiseBreakup:props.quarterWiseBreakup};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({data:`${e.target.value}`})
  }

   getRelevantData(data){
     if(!this.state.quarterWiseBreakup){
       return data;
     }
    if(!this.state.data.localeCompare('yearly')){
      return data.yearwise;
    }
    return data.quarterwise;
  }
  render(){
    return <div className="full_panel">
    <div className="first_column wid-50">
    <BarChart height={200}  data={this.getRelevantData(this.props.barData)} scale={cols}title={this.props.chartTitle}  xAxis={this.props.chart.xAxis} yAxis={this.props.chart.yAxis} label={this.props.label} styles={styles} color="#a8de4d"/>
    </div>
    <div className="second_column wid-50">
      {this.props.quarterWiseBreakup==true?<RadioGroup  onChange={this.onChange} defaultValue="yearly">
        <RadioButton value="yearly">Yearly</RadioButton>
        <RadioButton value="quaterly">Quaterly</RadioButton>
      </RadioGroup>:null}
      <AnalysisInfoTabs frequency={this.state.data}info={this.props.info} analysis={this.props.analysis} quarterlyAnalysis={this.props.quarterlyAnalysis}/>
    </div>
    </div>;;
  }
}

function getRectPath(points) {
      const path = [];
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (point) {
          const action = i === 0 ? 'M' : 'L';
          path.push([ action, point.x, point.y ]);
        }
      }
      const first = points[0];
      path.push([ 'L', first.x, first.y ]);
      path.push([ 'z' ]);
      return path;
}
function getFillAttrs(cfg) {
  const defaultAttrs = Shape.interval;
  const attrs = Util.mix({}, defaultAttrs, {
    fill: cfg.color,
    stroke: cfg.color,
    fillOpacity: cfg.opacity
  }, cfg.style);
  return attrs;
}
Shape.registerShape('interval', 'waterfall', {
  draw(cfg, container) {
    const attrs = getFillAttrs(cfg);
    let rectPath = getRectPath(cfg.points);
    rectPath = this.parsePath(rectPath);
    const interval = container.addShape('path', {
      attrs: Util.mix(attrs, {
        path: rectPath
      })
    });
    if (cfg.nextPoints) {
      let linkPath = [
        [ 'M', cfg.points[2].x, cfg.points[2].y ],
        [ 'L', cfg.nextPoints[0].x, cfg.nextPoints[0].y ]
      ];
      if (cfg.nextPoints[0].y === 0) {
        linkPath[1] = [ 'L', cfg.nextPoints[1].x, cfg.nextPoints[1].y ];
      }
      linkPath = this.parsePath(linkPath);
      container.addShape('path', {
        attrs:  {
          path: linkPath,
          stroke: 'rgba(0, 0, 0, 0.45)',
          lineDash: [ 4, 2 ]
        }
      });
    }
    return interval;
  }
});
const data = [
  { type: 'Total income', amount: 25561 },
  { type: 'Interest Expenses', amount: 12529 },
  { type: 'Operating Expenses', amount: 5273 },
  { type: 'NPA Provision', amount: 1079 },
  { type: 'Other Provisions', amount: 475 },
  { type: 'Tax', amount: 1971 },
  { type: 'Net Profit after Tax', amount: 4234 },

];
for(let i = 0; i < data.length; i++) {
  const item = data[i];
  if (i > 0 && i < data.length - 1) {
    if (Util.isArray(data[i - 1].amount)) {
      item.amount = [ data[i - 1].amount[1],  data[i - 1].amount[1] - item.amount ];
    } else {
      item.amount = [ data[i - 1].amount,  data[i - 1].amount - item.amount];
    }
  }
}

const barChartVar ={
  title : 'Total Income of yes bank',
  data : yesBankRevenue,
};
const barCardVar = {
  title : 'Card Title',
  text : 'Card Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  tooltip : 'This is a tooltip'
};

class CardwithSimpleChartPanel extends React.Component{
  render(){
    return <div>
    <Card
     title={this.props.title}
     extra={<Tp title={this.props.tooltip}>
       <Icon type="info-circle-o" />
     </Tp>}

   >
   <div className="full_panel">
   <div className="first_column wid-50">
    <Bar height={200}
        data={this.props.data}
        autoLabel={true}
   />
   </div>
   <div className="second_column wid-50" style={{padding: '20px'}}>
   <Row>
     <Col span={24}>
      <p>{this.props.analysis} </p>
     </Col>


   </Row>
   </div>


   </div>;
   </Card>
    </div>;
  }
}
const costBreakUpData = [
  {item:"Interest Expenses", data: [{x:"2014", y:62.08},{x:"2015", y:59.35},{x:"2016", y:55.14},{x:"2017", y:51.48},{x:"2018", y:49.02}], analysis:"analysis for Interest expense"},
  {item:"Operating Expenses", data: [{x:"2014", y:15.01},{x:"2015", y:16.85},{x:"2016", y:18.30},{x:"2017", y:20.20},{x:"2018", y:20.63}], analysis:"analysis for Operating expense"},
  {item:"NPA Provision", data: [{x:"2014", y:1.15},{x:"2015", y:0.95},{x:"2016", y:3.06},{x:"2017", y:3.22},{x:"2018", y:4.22}], analysis:"analysis for NPA Provision"},
  {item:"Other Provisions", data: [{x:"2014", y:1.93},{x:"2015", y:1.53},{x:"2016", y:0.23},{x:"2017", y:0.63},{x:"2018", y:1.86}], analysis:"analysis for Other Provision"},
  {item:"Tax", data: [{x:"2014", y:6.06},{x:"2015", y:6.64},{x:"2016", y:7.55},{x:"2017", y:8.30},{x:"2018", y:7.71}], analysis:"Tax"},
  {item:"Net Profit after Tax", data: [{x:"2014", y:13.77},{x:"2015", y:14.67},{x:"2016", y:15.72},{x:"2017", y:16.18},{x:"2018", y:16.56}], analysis:"Net Profit after Tax"}
];

const percentageDataLabel = {
  yAxis:{
    formatter: val => `${val}%`,
  }
}

class WaterfallWithLinkedBar extends React.Component{
  constructor(props){
    super(props);
    const chartIns = null;
    this.state = {clickedComponent : 'Net Profit after Tax'}
  }
  getComponentData(clickedComponent){
    let x;
      for(x in costBreakUpData){
        if (costBreakUpData[x].item.localeCompare(clickedComponent) == 0){
          return costBreakUpData[x].data;
        }
      }
      return null;
    }
  getComponentAnalysis(clickedComponent){
    let x;
      for(x in costBreakUpData){
        if (costBreakUpData[x].item.localeCompare(clickedComponent) == 0){
          return costBreakUpData[x].analysis;
        }
      }
      return null;
    }
  render(){
    return <div>
    <Chart height={300} data={data} forceFit onGetG2Instance={g2Chart => {this.chartIns = g2Chart;}}
    onPlotClick={ev => {
      var point = { x: ev.x,  y: ev.y};
      var items = this.chartIns.getTooltipItems(point);
      if(items[0].title.localeCompare("Total income") != 0){
        this.setState({'clickedComponent': items[0].title})
      }
    }}>
    <span className="main-title" style={styles.subTitle}>
          {this.props.title}
    </span>
      <Legend
          custom={true}
          clickable={false}
          items={[
            { value: 'Income', marker: {symbol: 'square', fill: 'rgba(0, 0, 0, 0.65)', radius: 5}},
            { value: 'Expenses', marker: {symbol: 'square', fill: '#1890FF', radius: 5}},
            { value: 'Profit', marker: {symbol: 'square', fill: '#a8de4d', radius: 5}}
          ]}
        />
        <Axis name="type" />
        <Axis name="amount" />
        <Tooltip showTitle={false}/>
        <Geom
          type='interval'
          position="type*amount"
          color={['type', type => {
            if (type === 'Net Profit after Tax') {
              return '#a8de4d';
            }else if(type === 'Total income'){
              return 'rgba(0, 0, 0, 0.65)';
            }
            return '#1890FF';}
          ]}
          tooltip={['type*amount', (type, amount) => {
            if (Util.isArray(amount)) {
              return {
                name: type,
                value: (amount[0] - amount[1]) +  " Cr"
              };
            }
            return {
              name: type,
              value: amount + " Cr"
            };
          }]}
          shape="waterfall"
         />
         </Chart>
         <BarChartWithAnalysis quarterWiseBreakup={false} chart={revenueChart2} label={percentageDataLabel} analysis={this.getComponentAnalysis(this.state.clickedComponent)}footerKey="5 Year CAGR" footerValue="12%" barData={this.getComponentData(this.state.clickedComponent)} chartTitle={this.state.clickedComponent + " as % of total income"} toolTip="Revenue contains Interest income earned and other processing fees etc." />
    </div>;
  }
}

const NIMData =[{x:'2012',y:2.9},{x:'2013',y:3.2},{x:'2014',y:2.9},{x:'2015',y:3.2},{x:'2016',y:3.4},{x:'2016',y:3.4},{x:'2018',y:3.5}];
const revenueChart = {
  xAxis: "year",
  yAxis: "sales"
};
const revenueChart2 = {
  xAxis: "x",
  yAxis: "y"
};
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">

                <h1 id="main_header">Yes Bank </h1>

                <div id="pnl">
                  <p>YES Bank is a private sector bank engaged in providing banking services including corporate and institutional banking, financial markets, investment banking, corporate finance, branch banking, and wealth management.</p>

                  <Tabs defaultActiveKey="1" >
                    <TabPane tab="Revenue" key="1">
                      <BarChartWithAnalysis quarterWiseBreakup={false}chart={{xAxis:'year', yAxis:'sales'}} analysis="asdf"footerKey="5 Year CAGR" footerValue="12%" barData={revenueDataYearwise} chartTitle="(in Crores)" info="Revenue contains Interest income earned and other processing fees etc." />
                    </TabPane>
                    <TabPane tab="Profit After Tax" key="2"><BarChartWithAnalysis quarterWiseBreakup={true} chart={{xAxis:'year', yAxis:'PAT'}} analysis="This is the analysis we provide for PAT Chart" quarterlyAnalysis="quarterlyAnalysis"footerKey="5 Year CAGR" footerValue="22%" barData={patData} chartTitle="(in Crores)" info="Profit After Tax is the actual amount company earned after paying all dues" /></TabPane>
                    <TabPane tab="Cost Breakup" key="3"><WaterfallWithLinkedBar title="FY 18 (in Crores)"/></TabPane>
                    <TabPane tab="Revenue Composition" key="4"><GroupedColumnWithAnalysis analysis="this is analysis for revenue breakup" chartTitle="(in Crores)" footerKey="5 Year CAGR" footerValue="22%" info="Profit After Tax is the actual amount company earned after paying all dues"/></TabPane>
                  </Tabs>
                  <br />
                  <h3> Net Interest Margin explains something</h3>
                  <CardwithSimpleChartPanel title="Net Interest Margin" tooltip="Net Interest Income ToolTip" data={NIMData} analysis="NIM analysis goes here" padding={[10, 0, 30, 30]}/><br />
                  <h3> Net Interest Margin improves when you borrow at lower rates or lend at higher rates</h3>
                  <Tabs defaultActiveKey="1" >
                    <TabPane tab="Liabilities" key="1">
                    <div className="full_panel">

                      <div className="first_column wid-50">
                        <PieChart data={liabilitiesData}  height={300} radius={0.75} innerRadius={0.6} />
                        <p> This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph</p>
                      </div>
                      <div className="second_column wid-50">
                        <BarChart height={300} data={depositsData} scale={depositsCols}title="Total Deposits" subTitle="Total Loan Portfolio" xAxis="year" yAxis="amount" styles={styles} color="#a8de4d" />
                      </div>
                    </div>

                      <br/>
                    </TabPane>
                    <TabPane tab="Assets" key="2" id="piechart">
                    <div className="full_panel">

                      <div className="first_column wid-50">
                        <PieChart data={assetsData}  height={300} radius={0.75} innerRadius={0.6} />
                        <p> This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph</p>
                      </div>
                      <div className="second_column wid-50">
                        <BarChart height={300}  data={advancesData} scale={depositsCols}title="Total Loan Portfolio" subTitle="Total Loan Portfolio" xAxis="year" yAxis="amount" styles={styles} color="#a8de4d" />
                      </div>
                    </div>
                    </TabPane>
                  </Tabs>
                  <CardwithSimpleChartPanel title="Casa Ratio" tooltip="Casa Ratio ToolTip" data={NIMData} analysis="Casa Ratio analysis goes here analysis goes here"/>
                  <p> This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph</p>

                  <Card
                   title={"NPA"}
                   extra={<Tp title={"NPA Tooltip"}>
                     <Icon type="info-circle-o" />
                   </Tp>}
                   >
                     <Tabs defaultActiveKey="1" >
                        <TabPane tab="GNPA" key="1">
                          <BarChartWithAnalysis quarterWiseBreakup={false} chart={{xAxis:'year', yAxis:'Gross NPA %'}} label={percentageDataLabel} analysis="This is the analysis we provide for GNPA Chart"footerKey="5 Year CAGR" footerValue="12%" barData={gNPAData} chartTitle="% of Loan portfolio" toolTip="Revenue contains Interest income earned and other processing fees etc." />
                        </TabPane>
                        <TabPane tab="NNPA" key="2">
                          <BarChartWithAnalysis quarterWiseBreakup={false} chart={{xAxis:'year', yAxis:'Net NPA %'}} label={percentageDataLabel} analysis="This is the analysis we provide for NNPA Chart"footerKey="5 Year CAGR" footerValue="12%" barData={nNPAData} chartTitle="% of Loan portfolio" toolTip="Revenue contains Interest income earned and other processing fees etc." />
                        </TabPane>
                        <TabPane tab="PCR" key="3">
                          <BarChartWithAnalysis quarterWiseBreakup={false} chart={{xAxis:'year', yAxis:'PCR %'}} label={percentageDataLabel} analysis="This is the analysis we provide for PCR Chart"footerKey="5 Year CAGR" footerValue="12%" barData={pcrData} chartTitle="% of Loan portfolio" toolTip="Revenue contains Interest income earned and other processing fees etc." />
                        </TabPane>
                     </Tabs>
                  </Card>
                  <br />
                  <h3 id="operational_metrics"> Operational Metrics</h3>
                  <Row gutter={16}>
                <Col lg={8} md={24} xs={24} sm={24}  style={{ marginTop: 24 }}>
                  <ChartCard
                    title="ROA"
                    total={numeral(8846).format('0,0')}
                    contentHeight={46}
                  >

                    <MiniArea
                      line
                      height={46}
                      data={visitData}
                    />
                  </ChartCard>
                </Col>
                <Col lg={8} md={24} xs={24} sm={24}  style={{ marginTop: 24 }}>
                  <ChartCard
                    title="EPS"
                    action={<Tp title="指标说明"><Icon type="info-circle-o" /></Tp>}
                    total={numeral(23).format('0,0')}
                    footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                    contentHeight={46}
                  >
                    <MiniBar
                      height={46}
                      data={visitData}
                    />
                  </ChartCard>
                </Col>
                <Col lg={8} md={24} xs={24} sm={24}  style={{ marginTop: 24 }}>
                  <ChartCard
                    title="Dividend"
                    action={<Tp title="Dividend"><Icon type="info-circle-o" /></Tp>}
                    total="78%"
                    footer={
                      <div>
                        <span>
                          周同比
                          <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>12%</Trend>
                        </span>
                        <span style={{ marginLeft: 16 }}>
                          日环比
                          <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>11%</Trend>
                        </span>
                      </div>
                    }
                    contentHeight={46}
                  >
                    <MiniProgress percent={78} strokeWidth={8} target={80} />
                  </ChartCard>
                </Col>
                <Col lg={8} md={24} xs={24} sm={24}  style={{ marginTop: 24 }}>
                  <ChartCard
                    title="Dividend"
                    action={<Tp title="Dividend"><Icon type="info-circle-o" /></Tp>}
                    total="78%"
                    footer={
                      <div>
                        <span>
                          周同比
                          <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>12%</Trend>
                        </span>
                        <span style={{ marginLeft: 16 }}>
                          日环比
                          <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>11%</Trend>
                        </span>
                      </div>
                    }
                    contentHeight={46}
                  >
                    <MiniProgress percent={78} strokeWidth={8} target={80} />
                  </ChartCard>
                </Col>
                <Col lg={8} md={24} xs={24} sm={24}  style={{ marginTop: 24 }}>
                  <ChartCard
                    title="Dividend"
                    action={<Tp title="Dividend"><Icon type="info-circle-o" /></Tp>}
                    total="78%"
                    footer={
                      <div>
                        <span>
                          周同比
                          <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>12%</Trend>
                        </span>
                        <span style={{ marginLeft: 16 }}>
                          日环比
                          <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>11%</Trend>
                        </span>
                      </div>
                    }
                    contentHeight={46}
                  >
                    <MiniProgress percent={78} strokeWidth={8} target={80} />
                  </ChartCard>
                </Col>
                <Col lg={8} md={24} xs={24} sm={24} style={{ marginTop: 24 }}>
                  <ChartCard
                    title="Dividend"
                    action={<Tp title="Dividend"><Icon type="info-circle-o" /></Tp>}
                    total="78%"
                    footer={
                      <div>
                        <span>
                          周同比
                          <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>12%</Trend>
                        </span>
                        <span style={{ marginLeft: 16 }}>
                          日环比
                          <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>11%</Trend>
                        </span>
                      </div>
                    }
                    contentHeight={46}
                  >
                    <MiniProgress percent={78} strokeWidth={8} target={80} />
                  </ChartCard>
                </Col>
              </Row>

              </div>

            </div>
        </div>
    );
  }
}

export default App;