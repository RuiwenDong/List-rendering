import React, { useState } from 'react';
import { Card, CardTitle, Button, CardBody, CardSubtitle } from 'reactstrap'; 
//Use Bootstrap's Card Component as the content container for each tile
import PropTypes from 'prop-types';
//import porp-types library in React

function App() {
  const[selected, setSelected] = useState(-1);

  /*
  The following are the 3 default tiles;
  In the future, we can use setTiles to implement the real data source
  */
  const[tiles, setTiles] = useState([
    {
      id: 0,
      title: 'title1',
      subtitle: 'subtitle1'
    },
    {
      id: 1,
      title: 'title2',
      subtitle: 'subtitle2'
    },
    {
      id: 2,
      title: 'title3',
      subtitle: 'subtitle3'
    }
  ]);
  
  /*
  Use map method to iterate over the data source and display the values of title and subtitle as follows.
  The number of tiles and content of titles are dynamic based on the variable tiles, which is default value now
  */
  const menu = tiles.map((tile, index)=>{
    
    const handleOnClick = (index) =>{
      setSelected(index);
    }

    //styling the button to make it align center and keep bottom in the Card
    const bottom = {
      position:'absolute',
      bottom: '30px',
      transform:"translateX(-50%)",
      cursor: "pointer"
    }
     
    //Two style objects for before and after toggled
    const before = {
      height:"300px", position:"relative",
      backgroundColor: '#fff'
    }

    const after = {
      height:"300px", position:"relative",
      backgroundColor: '#ccc'
    }
  
    return(
      <div key={tile.id} className="col-12 col-md-4">
        {/* Responsive grids, the container for each tile will cover whole width of the page in extra small screen size,
        and the div only cover one third width of the page in medium to extra large screen size*/}
        
        {/* use ternary operator to show backgroundColor of the Card, if it's toggled or not */}
        <Card style={index === selected ? after : before}>
          <CardBody className="text-center">
            <CardTitle className="h2 m-3">{tile.title}</CardTitle>
            <CardSubtitle className="h4 m-3">{tile.subtitle}</CardSubtitle>
            {/* Pass the tile index as a parameter to the onClick event handler */}
            <Button style={bottom} color="primary" onClick={()=>handleOnClick(index)}>
              Select
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row mt-5">
          {menu}
      </div>
    </div>
   );
}

/*
Define PropTypes for the array object tiles with a defined shape
  */
App.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string
    })
  )
}
export default App;
