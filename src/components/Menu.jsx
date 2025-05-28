import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuData = {
    teas: [
      'Kadak Chai', 'Ginger Chai', 'Elachi Chai', 'Masala Chai', 
      'Lemon Chai', 'Kesar', 'Kesar Elachi', 'Paan', 'Watermelon', 
      'Mango', 'Green Tea', 'Black Tea', 'Kulhad Chai', 'Boost Chai', 
      'Tulsi Chai', 'Badam Chai', 'Equality Chai'
    ],
    coffee: [
      'Regular Coffee', 'Filter Coffee', 'Vanilla Coffee', 'Caramel Coffee',
      'Hazelnut Coffee', 'Mint Coffee', 'Cold Coffee', 'SPL Cold Coffee'
    ],
    thickshake: [
      'CB Signature', 'Oreo', 'Kitkat', 'Mango', 'Strawberry', 
      'Banana', 'Kiwi', 'Black Current', 'Chocolate'
    ],
    sandwich: [
      'Veg Sandwich', 'Veg Grilled', 'Veg Grilled Sandwich', 'Egg Sandwich',
      'Grilled Egg Sandwich', 'Chicken Sandwich', 'Grilled Chicken',
      'Chicken Club Sandwich', 'Chicken Grilled Sandwich'
    ],
    milkshake: [
      'CB Signature', 'Oreo Kitkat', 'Mango', 'Strawberry', 
      'Banana Kiwi', 'Black Current', 'Chocolate'
    ],
    mojitos: [
      'Blue Ocean', 'Green Ocean', 'Pinacolada', 'Fresh Lime',
      'Fruit Punch', 'Blue Green'
    ],
    burger: [
      'Veg Burger', 'Veg Grilled', 'Veg Cheese Grilled', 'Chicken Burger',
      'Grilled Chicken', 'Chicken Cheese Grilled'
    ]
  };

  return (
    <div className="menu-container" >
      <div className="menu-header">
        <h1 className="menu-title">MENU & VARIETY</h1>
      </div>
      
      <div className="menu-layout">
        {/* Top Row with Images */}
        <div className="image-row">
          <div className="section-image">
            <div className="image-placeholder teas">
              <span>🫖</span>
              <p>TEAS</p>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="section-image">
            <div className="image-placeholder fries">
              <span>🍟</span>
              <p>FRIES</p>
            </div>
          </div>
        </div>

        {/* Main Menu Grid - Single Row */}
        <div className="menu-grid">
          <div className="menu-section">
            <div className="section-header chai">
              <span>CHAI</span>
            </div>
            <div className="menu-items">
              {menuData.teas.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header coffee">
              <span>COFFEE</span>
            </div>
            <div className="menu-items">
              {menuData.coffee.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header thickshake">
              <span>THICKSHAKE</span>
            </div>
            <div className="menu-items">
              {menuData.thickshake.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header sandwich">
              <span>SANDWICH</span>
            </div>
            <div className="menu-items">
              {menuData.sandwich.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header milkshake">
              <span>MILKSHAKE</span>
            </div>
            <div className="menu-items">
              {menuData.milkshake.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header mojitos">
              <span>MOJITOS</span>
            </div>
            <div className="menu-items">
              {menuData.mojitos.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="menu-section">
            <div className="section-header burger">
              <span>BURGER</span>
            </div>
            <div className="menu-items">
              {menuData.burger.map((item, index) => (
                <div key={index} className="menu-item">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row with Images */}
        <div className="image-row">
          <div className="section-image">
            <div className="image-placeholder milkshakes">
              <span>🥤</span>
              <p>MILKSHAKES</p>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="section-image">
            <div className="image-placeholder burgers">
              <span>🍔</span>
              <p>BURGER</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-footer">
        <div className="website-link">
          {/* <span>www.chaibunk.com</span> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;