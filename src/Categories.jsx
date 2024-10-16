// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Categories = () => {
  return (
    <>
      <div className='min-h-screen relative z-[2]'>
        <StyledCategories>
          <h1 className="title font-['Copperplate']">Sports Categories</h1>
          <div className="card-grid title font-['Copperplate']">
            <Link to="/products/football" className="no-underline">
              <div className="card">
                <img src="/football.png" alt="Football" className="card-img" />
                <h2 className="card-title">Football</h2>
              </div>
            </Link>
            <Link to="/products/cricket" className="no-underline">
              <div className="card">
                <img src="/cricket.png" alt="Cricket" className="card-img" />
                <h2 className="card-title">Cricket</h2>
              </div>
            </Link>
            <Link to="/products/hockey" className="no-underline">
              <div className="card">
                <img src="/hockey.jpeg" alt="Hockey" className="card-img" />
                <h2 className="card-title">Hockey</h2>
              </div>
            </Link>
            <Link to="/products/tennis" className="no-underline">
              <div className="card">
                <img src="/tennis.png" alt="Tennis" className="card-img" />
                <h2 className="card-title">Tennis</h2>
              </div>
            </Link>
            <Link to="/products/basketball" className="no-underline">
              <div className="card">
                <img src="/basketball.png" alt="Basketball" className="card-img" />
                <h2 className="card-title">Basketball</h2>
              </div>
            </Link>
            <Link to="/products/baseball" className="no-underline">
              <div className="card">
                <img src="/baseballl.png" alt="Baseball" className="card-img" />
                <h2 className="card-title">Baseball</h2>
              </div>
            </Link>
            <Link to="/products/badminton" className="no-underline">
              <div className="card">
                <img src="/badminton.jpg" alt="Badminton" className="card-img" />
                <h2 className="card-title">Badminton</h2>
              </div>
            </Link>
            <Link to="/products/table-tennis" className="no-underline">
              <div className="card">
                <img src="/tablet.png" alt="Table Tennis" className="card-img" />
                <h2 className="card-title">Table Tennis</h2>
              </div>
            </Link>
            <Link to="/products/golf" className="no-underline">
              <div className="card">
                <img src="/golf.png" alt="Golf" className="card-img" />
                <h2 className="card-title">Golf</h2>
              </div>
            </Link>
            <Link to="/products/rugby" className="no-underline">
              <div className="card">
                <img src="/rugby.png" alt="Rugby" className="card-img" />
                <h2 className="card-title">Rugby</h2>
              </div>
            </Link>
            <Link to="/products/volleyball" className="no-underline">
              <div className="card">
                <img src="/volleyball.png" alt="Volleyball" className="card-img" />
                <h2 className="card-title">Volleyball</h2>
              </div>
            </Link>
            <Link to="/products/swimming" className="no-underline">
              <div className="card">
                <img src="/swimming.png" alt="Swimming" className="card-img" />
                <h2 className="card-title">Swimming</h2>
              </div>
            </Link>
            <Link to="/products/marital-arts" className="no-underline">
              <div className="card">
                <img src="/marital.jpeg" alt="Marital Arts" className="card-img" />
                <h2 className="card-title">Marital Arts</h2>
              </div>
            </Link>
            <Link to="/products/boxing" className="no-underline">
              <div className="card">
                <img src="/boxing.jpg" alt="Boxing" className="card-img" />
                <h2 className="card-title">Boxing</h2>
              </div>
            </Link>
            <Link to="/products/skateboarding" className="no-underline">
              <div className="card">
                <img src="/skate.jpeg" alt="Skateboarding" className="card-img" />
                <h2 className="card-title">Skateboarding</h2>
              </div>
            </Link>
            <Link to="/products/wrestling" className="no-underline">
              <div className="card">
                <img src="/wrestling.jpg" alt="Wrestling" className="card-img" />
                <h2 className="card-title">Wrestling</h2>
              </div>
            </Link>
          </div>
        </StyledCategories>
      </div>
    </>
  );
};

const StyledCategories = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: #18181b;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 2rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    width: 80%;
    justify-items: center;
    position: relative;
    z-index: 2;
  }

  .card {
    position: relative;
    width: 209px;
    height: 279px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 220px;
    height: 290px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  .card-img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 6px;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;

export default Categories;
