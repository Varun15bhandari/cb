import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const categories = [
    {
      id: 1,
      name: 'Tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Milkshakes',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Pakoda',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Sandwiches',
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'French Fries',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Mocktails',
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Noodles',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const collections = [
    {
      id: 1,
      title: '40 QUICK & EASY CHICKEN DINNERS',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&crop=center',
      description: 'Delicious and easy chicken recipes for busy weeknights'
    },
    {
      id: 2,
      title: '43 FAVORITE FRENCH TOAST RECIPES',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop&crop=center',
      description: 'From classic to creative French toast variations'
    },
    {
      id: 3,
      title: '13 POWERHOUSE SALAD RECIPES',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center',
      description: 'Nutritious and filling salads that satisfy'
    }
  ];

  const exploreMore = [
    {
      id: 1,
      title: 'COMFORT FOOD CLASSICS',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'INTERNATIONAL EATS',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'BREAKFAST & BRUNCH',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'COMMUNITY PICKS',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'QUICK & EASY',
      image: 'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Asian Delights',
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop&crop=center',
      cuisine: 'Asian'
    },
    {
      id: 2,
      name: 'Italian Corner',
      image: 'https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=600',
      cuisine: 'Italian'
    },
    {
      id: 3,
      name: 'Local Favorites',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop&crop=center',
      cuisine: 'Local'
    }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      {/* <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">Swiggy Corporate</span>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search" />
            </div>
            <div className="offers">
              <span className="offers-badge">NEW</span>
              <span>Offers</span>
            </div>
            <div className="help">Help</div>
            <div className="sign-in">Sign In</div>
            <div className="cart">
              <span className="cart-icon">🛒</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">What's on your mind?</h1>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <div className="category-image-container">
                  <img src={category.image} alt={category.name} className="category-image" />
                </div>
                <p className="category-name">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <div className="section-header">
          <h2 className="section-title">WHAT WE'RE CRAVING</h2>
          <div className="section-nav">
            <button className="nav-arrow">←</button>
            <button className="nav-arrow">→</button>
          </div>
        </div>
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-image-container">
                <img src={collection.image} alt={collection.title} className="collection-image" />
                <div className="collection-overlay">
                  <span className="collection-label">COLLECTION</span>
                  <h3 className="collection-title">{collection.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore More Section */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">EXPLORE MORE</h2>
          <div className="section-nav">
            <button className="nav-arrow">←</button>
            <button className="nav-arrow">→</button>
          </div>
        </div>
        <div className="explore-grid">
          {exploreMore.map((item) => (
            <div key={item.id} className="explore-item">
              <div className="explore-image-container">
                <img src={item.image} alt={item.title} className="explore-image" />
              </div>
              <h3 className="explore-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="restaurants-section">
        <div className="section-header">
          <h2 className="section-title">Top Food chains in Chai Bunk</h2>
          <div className="section-nav">
            <button className="nav-arrow">←</button>
            <button className="nav-arrow">→</button>
          </div>
        </div>
        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image-container">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-cuisine">{restaurant.cuisine}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chai Bunk Section */}
      <section className="chai-bunk-section">
        <div className="chai-bunk-content">
          <div className="chai-bunk-image">
            <img src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop&crop=center" alt="Chai" />
            <div className="tea-leaves">
              <img src="https://images.unsplash.com/photo-1597318181409-cf64d0b4d8d8?w=100&h=100&fit=crop&crop=center" alt="Tea leaves" />
            </div>
          </div>
          <div className="chai-bunk-text">
            <h2>Chai Bunk</h2>
            <p>
              At Chai Bunk, we pride ourselves on our diverse menu offerings that go beyond the realm of traditional chai. While our specialty lies in the art of crafting exquisite chai blends, we also cater to the preferences of coffee lovers with our premium coffee selections.
            </p>
            <p>
              In addition, we serve refreshing milkshakes, satisfying sandwiches, delectable burgers, and quick bites that tantalize the taste buds of our customers. This wide array of options allows Chai Bunk franchisees to cater to a broad customer base and capture a larger market share.
            </p>
            <button className="franchise-btn">For Franchise</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;