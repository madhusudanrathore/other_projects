import React from 'react';
import {Chart, Axis, Geom, Tooltip, Label} from "bizcharts";

function ConditionalTitleRender(props){
  if( props.title_param !== "" ){
    return(
      <span className="main-title" style={props.title_style}>
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
      <span className="sub-title" style={props.subtitle_style}>
        {props.subtitle_param}
      </span>
    );
  }else{
    return null;
  }
}

class BarChart extends React.Component{
  render(){
    return(
      <div style={this.props.styles.wrapper}>
          <Chart renderer='svg' height={this.props.metadata.height} data ={this.props.data} scale={this.props.scale} forceFit>

            <ConditionalTitleRender title_param={this.props.metadata.title} title_style={this.props.styles.mainTitle}/>
            <ConditionalSubtitleRender subtitle_param={this.props.metadata.subtitle} subtitle_style={this.props.styles.subTitle}/>
            
            <Axis name={this.props.xAxis} />
            <Axis name={this.props.yAxis} title />
            <Tooltip crosshairs={{type: "y"}}/>

            <Geom type="interval" position={this.props.xAxis + "*" + this.props.yAxis} color={this.props.metadata.color}>
              <Label content={this.props.geomLabel.sales.content} labelLine={this.props.geomLabel.sales.labelLine} />
            </Geom>

          </Chart>
      </div>
    );
  }
}

export default BarChart;