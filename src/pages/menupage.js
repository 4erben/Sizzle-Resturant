import React, { useEffect, useState } from 'react'
import  "./css/menupage.css";
import { Container , Row , Col} from 'react-bootstrap'
import MenuItem from '../components/menuItem';
import menuItemsData from '../data/menudata';
export default function MenuPage() {
  const [shownMenu, setShownMenu] = useState(menuItemsData);
  useEffect(()=>{
  const buttons = document.querySelectorAll('#button-group-menu button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Remove 'active' class from all buttons
      buttons.forEach(btn => btn.classList.remove('btn-active'));
      
      // Add 'active' class to the clicked button
      button.classList.add('btn-active');
      //add filtering logic
      const category = e.target.value;
    if(category === "All"){
      setShownMenu(menuItemsData);
    }else{
      setShownMenu(menuItemsData.filter(item=>{
      return item.category === category;
    }))
    }
    });
  });
  },[])
  /*   const handleShownMenu =(e)=>{
     const category = e.target.value;
    if(category === "All"){
      setShownMenu(menuItemsData);
    }else{
      setShownMenu(menuItemsData.filter(item=>{
      return item.category === category;
    }))
    } 
  } */
  
  return (
    <Container fluid className="menupage-container">
            <Row className="pt-5 ">
                <Col lg={12} className="pt-5 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-white box-shadow">Menu</h3>
                <h1 className="text-mint text-shadow fw-bold">Check our Tasty Menu</h1>
                </Col>
            </Row>
            <Row className="pt-2 mt-2">
                <Col lg={12} className="pt-2 d-flex flex-row justify-content-center align-items-center">
                <div id="button-group-menu">
                <button className=" menu-button px-3 mx-3 btn-active" value={"All"} /* onClick={handleShownMenu} */>Show All</button>
                <button className=" menu-button px-3 mx-3" value={"Beverages"} /* onClick={handleShownMenu} */>Beverages</button>
                <button className=" menu-button px-3 mx-3" value={"Lunch"} /* onClick={handleShownMenu} */>Lunch</button>
                <button className=" menu-button px-3 mx-3" value={"Dinner"} /* onClick={handleShownMenu} */>Dinner</button>
                </div>
                </Col>
            </Row>
            <hr className="border border-danger border-3"/>
            <Row className="py-1 mt-2">
                {shownMenu.map(item=>{
                  return(
                    <MenuItem
                    key={item._id}
                    MITitle={item.title}
                    MIDescription={item.description}
                    MIPrice={item.price} 
                    />
                  )
                })}
            </Row>
        
    </Container>
  )
}
