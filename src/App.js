import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from  "react-router-dom";


function Home() {
	return (
	  <div className="App d-flex flex-column justify-content-start  align-items-center">
		<div className="mainImage  d-flex justify-content-space align-items-center">
		  <div className="pvp-image text-center w-50">
			<a href="#pvp" className="text-center">
			  <img className="start-text" src={require("./assets/images/pvp.png")} alt="pvp image" />
			</a>
		  </div>
		  <div className="official-image text-center w-50">
			<a href="#official" className="text-center">
			  <img
			  className="start-text"
				src={require("./assets/images/official.png")}
				alt="pvp image"
			  />
			</a>
		  </div>
		</div>
		<div className="main bg-warning mt-5 bg-dark">
		  <nav className="d-flex justify-content-start  align-items-center">
			<div className="div-logo d-flex text-center align-items-center">
			  <a href="/" className="text-center h-100">
				<img
				  className="h-100"
				  src={require("./assets/images/logo.png")}
				  alt="pvp image"
				/>
			  </a>
			</div>
			<a
			  href="#"
			  className="navbar-items text-center h-100 w-25 d-flex justify-content-center align-items-center"
			>
			  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" className="bi bi-currency-yen" viewBox="0 0 16 16">
				<path d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"/>
			  </svg>
			  METIN 2 YANG
			</a>
			<a
			  href="#"
			  className="navbar-items text-center h-100 w-25  d-flex justify-content-center align-items-center"
			>
			  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="aqua" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
				<path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
			  </svg>
			  <span className="m-2">Contact</span>
			</a>
			<a
			  href="#"
			  className="navbar-items text-center h-100 w-25  d-flex justify-content-center align-items-center"
			>
			  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
				<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
			  </svg>
			  <span className="m-2">Discord</span>
			</a>
		  </nav>
  
		{/* <div className="discord d-flex justify-content-center align-items-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
		  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
		</svg>
		<span className="text-light fs-3 m-3">Discord! </span>
		
  
		</div> */}
  
				<a href="https://www.google.com"  className="discord"><img
				 
				  src={require("./assets/images/discord.jpg")}
				  alt="pvp image"
				/></a>
  
				<a href="https://www.facebook.com"  className="whatsapp"><img
				 
				 src={require("./assets/images/whatsapp.jpg")}
				 alt="pvp image"
			   /></a>
  
		  <div className="main-content w-100 bg-dark mt-1 d-flex justify-content-center align-items-center">
			<div
			  id="carouselExampleInterval"
			  className="carousel slide"
			  data-bs-ride="carousel"
			>
			  <div className="carousel-inner">
				<div className="carousel-item active" data-bs-interval="5000">
				  <img
					src={require("./assets/images/logo.png")}
					className="d-block w-100"
					alt="..."
				  />
				</div>
				<div className="carousel-item" data-bs-interval="5000">
				  <img
					src={require("./assets/images/main.jpg")}
					className="d-block w-100"
					alt="..."
				  />
				</div>
				<div className="carousel-item" data-bs-interval="5000">
				  <img
					src={require("./assets/images/official.png")}
					className="d-block w-100"
					alt="..."
				  />
				</div>
			  </div>
			  <button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="prev"
			  >
				<span
				  className="carousel-control-prev-icon"
				  aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			  </button>
			  <button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="next"
			  >
				<span
				  className="carousel-control-next-icon"
				  aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			  </button>
			</div>
			<img
			  id="secureImage"
			  src={require("./assets/images/3d.png")}
			  className="d-block"
			  alt="..."
			/>
		  </div>
  
		  <div className="strip d-flex justify-content-around align-items-center">
			<div className="best-prices text-light d-flex align-items-center">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				fill="green"
				className="bi bi-currency-dollar"
				viewBox="0 0 16 16"
			  >
				<path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
			  </svg>
			  <span className="fs-3 m-2">Best Prices </span>
			</div>
			<div className="support d-flex text-light align-items-center">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				fill="yellow"
				className="bi bi-arrow-repeat"
				viewBox="0 0 16 16"
			  >
				<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
				<path
				  fill-rule="evenodd"
				  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
				/>
			  </svg>
			  <span className="fs-3 m-2">Online Support 7/24 </span>
			</div>
			<div className="secure-trade d-flex text-light align-items-center">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				fill="pink"
				className="bi bi-lock"
				viewBox="0 0 16 16"
			  >
				<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
			  </svg>
			  <span className="fs-3 m-2">Online Support 7/24 </span>
			</div>
		  </div>
  
		  <div className="shop-section mt-5 d-flex flex-column align-items-center">
			<div className="w-100 text-center text-light">
			  <h1 id="pvp">Metin2 PVP Servers</h1>
			</div>
			<div className="servers w-80 d-flex justify-content-center align-items-center flex-wrap mt-5 ">
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
			</div>
  
			<div className="strip d-flex justify-content-around align-items-center text-light">
			<h1 id="official" >Metin2 Official Servers</h1>
			</div>
	   
			<div className="servers w-80 d-flex justify-content-center align-items-center flex-wrap mt-5 ">
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
  
			  <div
				className="card card-hover m-3 bg-dark text-light border-warning"
				style={{ width: "18rem" }}
			  >
				<img
				  src={require("./assets/images/logo.png")}
				  className="card-img-top"
				  alt="..."
				/>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
				  <a href="#" className="text-decoration-none text-info">
					Aeldra Yang – 40 KKK Quality Shopping
				  </a>
				  <div className="stars d-flex justify-content-center align-items-center mt-3">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="yellow"
					  className="bi bi-star-fill"
					  viewBox="0 0 16 16"
					>
					  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				  </div>
				  <div className="price fs-3 d-flex align-items-center mt-1">
					10.00
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="green"
					  className="bi bi-currency-euro"
					  viewBox="0 0 16 16"
					>
					  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
					</svg>
				  </div>
  
				  <div className="buy w-100 buy-button fs-3 mt-3  bg-success rounded d-flex justify-content-center align-items-center">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="25"
					  height="25"
					  fill="currentColor"
					  className="bi bi-bag"
					  viewBox="0 0 16 16"
					>
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
					<span className="m-2 ">Buy</span>
				  </div>
				</div>
			  </div>
			</div>          
  
		  
		  </div>
		</div>
  
  <footer className="text-center w-100 text-lg-start bg-dark text-muted text-light">
  
	<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
	
  
  
  
	  <div>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-facebook-f"></i>
		</a>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-twitter"></i>
		</a>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-google"></i>
		</a>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-instagram"></i>
		</a>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-linkedin"></i>
		</a>
		<a href="" className="me-4 link-grayish">
		  <i className="fab fa-github"></i>
		</a>
	  </div>
  
	</section>
  
  
  
	<section>
	  <div className="container text-center text-md-start mt-5">
  
		<div className="row mt-3">
  
		  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
			<h6 className="text-uppercase fw-bold mb-4">
			  <i className="fas fa-gem me-3 text-grayish"></i>Metin2 Yang
			</h6>
			<p>
			You can find the best yang items for Metin2 here. You deserve safe, fast and quality service.
			</p>
		  </div>
  
  
  
		  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
			<h6 className="text-uppercase fw-bold mb-4">
			  Products
			</h6>
			<p className="text-reset">
			  Yang 
			</p>
			<p className="text-reset">
			  Metin2
			</p>
			<p className="text-reset">
			  Item 
			</p>
			<p className="text-reset">
			  Deneme 
			</p>
		  </div>
  
  
  
  
  
		  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
			<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
			<p><i className="fas fa-home me-3 text-grayish"></i> New York, NY 10012, US</p>
			<p>
			  <i className="fas fa-envelope me-3 text-grayish"></i>
			  info@example.com
			</p>
			<p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
			<p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
		  </div>
  
		</div>
  
	  </div>
	</section>
  
  
  
	<div className="text-center p-4" style={{"background-color":"rgba(0, 0, 0, 0.025);"}}>
	  © 2022 Copyright:
	  <a className="text-reset fw-bold m-2" href="#">yangTR Berat</a>
	</div>
	
  
  </footer>
  
		
	  </div>
	);
  }
  


function App() {
	return (
		<>
			<Router>
			<Routes>
			<Route  path="/"  element={<Home  />}  />
			</Routes>
			</Router>
		</>
	);

}

export default App;
