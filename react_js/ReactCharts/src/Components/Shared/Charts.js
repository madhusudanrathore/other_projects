import React from 'react';
import {Chart, Axis, Geom, Tooltip, Coord, Label, Legend, Guide} from 'bizcharts';
import {DataSet} from '@antv/data-set';

const {DataView}=DataSet;

// global styles for charts
var styles={
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

function ConditionalTitleRender(props){
  if( props.title_param !== "" ){
    return(
      <span className="main-title" style={styles.mainTitle}>
        {props.title_param}
      </span>
    );
  }else{
    return null;
  }
}

function ConditionalSubtitleRender(props){
  if( props.subtitle_param !== "" ){
    return(
      <span className="sub-title" style={styles.subTitle}>
        {props.subtitle_param}
      </span>
    );
  }else{
    return null;
  }
}

class BarChart extends React.Component{
  // generic implementation for cols
  getScale(){
    return({
      [this.props.metadata.yAxis.name]:{
        "tickInterval": [this.props.metadata.yAxis.tickInterval],
        "alias": [this.props.metadata.yAxis.alias.toString()]
      }
    });
  }
  render(){
    return(
      <div style={styles.wrapper}>
          <Chart renderer='svg' height={this.props.metadata.height} data={this.props.data}
            scale={this.getScale()} forceFit
            onPlotClick={ev=>{ // action performed when plotted bar is clicked
              if(typeof ev.data !== "undefined" ){ // check if bar was clicked
                console.log(ev, ev.data.point.year, ev.data.point.sales); // now get data of bar which was clicked
              }
            }}
          >

            <ConditionalTitleRender title_param={this.props.metadata.title} />
            <ConditionalSubtitleRender subtitle_param={this.props.metadata.subtitle} />
            
            <Axis name={this.props.metadata.xAxis.name} />
            <Axis name={this.props.metadata.yAxis.name} title />
            <Tooltip crosshairs={{type: "y"}}/>

            <Geom type="interval" position={this.props.metadata.xAxis.name + "*" + this.props.metadata.yAxis.name} color={this.props.metadata.color}>
              <Label content={this.props.geomLabel.sales.content} labelLine={this.props.geomLabel.sales.labelLine} />
            </Geom>

          </Chart>
      </div>
    );
  }
}

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
        <Chart renderer='svg' height={this.props.metadata.height} data={this.transformData(this.props.data)} scale={this.getScale()} forceFit>
          <Legend position="bottom" />
          <Tooltip showTitle={false} itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>" />

          <Coord type={'theta'} radius={this.props.metadata.radius} innerRadius={this.props.metadata.innerRadius}/>
          <Axis name="percent" />
          
          <Guide></Guide>

          <Geom
            type="intervalStack"
            position="percent"
            color ='item'
            tooltip={['item*percent',(item, percent) => {
              percent = percent.toFixed(4) * 100 + '%';
              return {
                name: item,
                value: percent
              };
            }]}
            style={{lineWidth: 1,stroke: '#fff'}}
          >
            <Label content='percent' formatter={(val, item) => { return item.point.item + '- ' + val; }} />
          </Geom>

        </Chart>
      </div>
    );
  }
}

class StackedBarChart extends React.Component{
  transformData(){

    var temp=this.props.data[0], arr=[];
    var temp2, count=0;
    
    for(temp2 in temp){
      if(count>0){
        arr.push(temp2);
      }
      ++count;
    }
    // console.log(arr);

    // arr holds all the fields for current dataset
    const ds = new DataSet();
    const dv = ds.createView().source(this.props.data);
    dv.transform({
      type: 'fold',
      fields: arr,
      key: 'xAxis',
      value: 'yAxis',
    });
    return dv;
  }
  render(){
    return(
      <div style={styles.wrapper}>
        <Chart height={this.props.metadata.height} data={this.transformData()} forceFit>
        
          <ConditionalTitleRender title_param={this.props.metadata.title} />
          <ConditionalSubtitleRender subtitle_param={this.props.metadata.subtitle} />
        
          <Legend />
          <Axis name="xAxis" />
          <Axis name="yAxis" />
          <Tooltip />
          <Geom type='intervalStack' position={"xAxis*yAxis"} color={'name'} style={{stroke: '#fff',lineWidth: 1}} />

        </Chart>
      </div>
    );
  }
}

export {BarChart, PieChart, StackedBarChart};