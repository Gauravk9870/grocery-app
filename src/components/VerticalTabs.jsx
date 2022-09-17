import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CategoryContext, VegetablesContext } from '../App';
// import Vegetables from './products/Vegetables';
import ProductCard from './ProductCard';
import "./VerticalTabs.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CategoryContext.Consumer>{(category) => {
      return (
        <VegetablesContext.Consumer>{(vegetables) => {
          return (
            <Box className='verticalTabs'>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                // sx={{ borderRight: 1, borderColor: 'divider' }}
                className='verticalTabs__tabs'
              >
                {
                  category.map((item, index) => {
                    return (
                      <Tab label={item.name} {...a11yProps(index)} />
                    )
                  })
                }
              </Tabs>

              <TabPanel value={value} index={0} className="panel">
                <Box className='verticalTabs__product'>
                {vegetables.map((item, index) => {
                  return (
                      <ProductCard data={item} key={index}  className="product"/>
                      )
                    })}
                </Box>
              </TabPanel>

             

              <TabPanel value={value} index={1} className="panel">
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>

            </Box>
          )
        }}
        </VegetablesContext.Consumer>
      )
    }}
    </CategoryContext.Consumer>

  );
}
