import React from 'react';
import ReactDOM from 'react-dom';
import {Affix, Layout, Menu, Icon} from 'antd';
import {Navbar, Sidenav, Footer} from './Components/NavbarAndFooter';
import App from './Components/App';

const {Content, Sider}=Layout;

ReactDOM.render((
  <div id="final_rendered_section">
    <Navbar />
    <Layout id="final_rendered_section_layout">
      <Content>
        <Sidenav />
        {/*<BarChart data={bar_data} metadata={bar_metadata} geomLabel={bar_geom_label} />   
        <PieChart data={pie_data} metadata={pie_metadata} />
        <StackedBarChart data={stacked_bar_data} metadata={stacked_bar_metadata} />*/}
        <div className="app_section">
          <App/>
        </div>
      </Content>
      <Footer />
    </Layout>
    
  </div>
), document.getElementById("root"));