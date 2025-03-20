// "use client"

// import { useState } from "react"


// // Main component that contains everything
// const ClothingShop = () => {
//   const [selectedClothing, setSelectedClothing] = useState(null)
//   const [priceRange, setPriceRange] = useState([0, 100])
//   const [selectedGenre, setSelectedGenre] = useState("ALL")
//   const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false)
//   const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false)
//   const [isFiltersOpen, setIsFiltersOpen] = useState(false)
//   const [balance, setBalance] = useState(300)

//   // Sample clothing data
//   const clothingItems = [
//     {
//       id: 1,
//       name: "Green Hoodie",
//       type: "hoodie",
//       price: 5.0,
//       genre: "CASUAL",
//       color: "green",
//     },
//     {
//       id: 2,
//       name: "Blue Suit",
//       type: "suit",
//       price: 5.0,
//       genre: "FORMALS",
//       color: "lightblue",
//     },
//     {
//       id: 3,
//       name: "Red Jersey",
//       type: "jersey",
//       price: 5.0,
//       genre: "SPORTS",
//       color: "red",
//     },
//     {
//       id: 4,
//       name: "Gray Jacket",
//       type: "jacket",
//       price: 5.0,
//       genre: "CASUAL",
//       color: "gray",
//     },
//   ]

//   // Toggle functions
//   const toggleGenreDropdown = () => {
//     setIsGenreDropdownOpen(!isGenreDropdownOpen)
//     if (isPriceDropdownOpen) setIsPriceDropdownOpen(false)
//   }

//   const togglePriceDropdown = () => {
//     setIsPriceDropdownOpen(!isPriceDropdownOpen)
//     if (isGenreDropdownOpen) setIsGenreDropdownOpen(false)
//   }

//   const toggleFilters = () => {
//     setIsFiltersOpen(!isFiltersOpen)
//   }

//   // Handle functions
//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre)
//     setIsGenreDropdownOpen(false)
//   }

//   const handlePriceChange = (e) => {
//     setPriceRange([0, Number.parseInt(e.target.value)])
//   }

//   const handleTryClothing = (clothing) => {
//     setSelectedClothing(clothing)
//   }

//   const handleBuyNow = () => {
//     if (balance >= 5) {
//       setBalance(balance - 5)
//       alert("Purchase successful!")
//     } else {
//       alert("Insufficient balance!")
//     }
//   }

//   // Filter clothing items based on genre and price
//   const filteredClothingItems = clothingItems.filter((item) => {
//     const matchesGenre = selectedGenre === "ALL" || item.genre === selectedGenre
//     const matchesPrice = item.price <= priceRange[1]
//     return matchesGenre && matchesPrice
//   })

//   // Colors for the color filter
//   const colors = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet",
//     "pink",
//     "white",
//     "black",
//     "purple",
//     "gold",
//   ]

//   return (
//     <div className="clothing-try-on position-relative" style={{ height: "100vh", background: "#121212" }}>
//       {/* Navbar */}
//       <div
//         className="navbar d-flex justify-content-between align-items-center px-4 py-2"
//         // style={{ background: "#1a1a1a", height: "60px" }}
//       >
//             <div className="d-flex align-items-center">
//             <div className="d-flex align-items-center me-4">
//                 <button
//                 className="btn d-flex align-items-center ps-0 me-4"
//                 onClick={toggleFilters}
//                 style={{ color: "white" }}
//                 >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     className="bi bi-sliders me-2"
//                     viewBox="0 0 16 16"
//                 >
//                     <path
//                     fillRule="evenodd"
//                     d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
//                     />
//                 </svg>
//                 FILTERS
//                 </button>

//                 <div className="me-4 position-relative">
//                 <div className="d-flex align-items-center" onClick={toggleGenreDropdown} style={{ cursor: "pointer" }}>
//                     <span className="text-white me-2">GENRE:</span>
//                     <button
//                     className="btn d-flex align-items-center"
//                     style={{ color: "#00a8ff", fontWeight: "bold", padding: "4px 8px" }}
//                     >
//                     <span className="me-1">{selectedGenre}</span>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="bi bi-chevron-down"
//                         viewBox="0 0 16 16"
//                     >
//                         <path
//                         fillRule="evenodd"
//                         d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//                         />
//                     </svg>
//                     </button>
//                 </div>

//                 {isGenreDropdownOpen && (
//                     <div
//                     className="position-absolute mt-1 bg-dark rounded shadow-lg"
//                     style={{ zIndex: 1000, width: "150px" }}
//                     >
//                     {["ALL", "CASUAL", "SPORTS", "FORMALS"].map((genre) => (
//                         <div
//                         key={genre}
//                         className="p-2 text-white d-flex align-items-center"
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleGenreSelect(genre)}
//                         >
//                         <div
//                             className="me-2 rounded-circle d-flex align-items-center justify-content-center"
//                             style={{
//                             width: "18px",
//                             height: "18px",
//                             border: "1px solid white",
//                             backgroundColor: selectedGenre === genre ? "white" : "transparent",
//                             }}
//                         >
//                             {selectedGenre === genre && (
//                             <div
//                                 className="rounded-circle"
//                                 style={{ width: "10px", height: "10px", backgroundColor: "#1a1a2e" }}
//                             ></div>
//                             )}
//                         </div>
//                         {genre}
//                         </div>
//                     ))}
//                     </div>
//                 )}
//                 </div>

//                 <div className="position-relative">
//                 <div className="d-flex align-items-center" onClick={togglePriceDropdown} style={{ cursor: "pointer" }}>
//                     <span className="text-white me-2">PRICE:</span>
//                     <button
//                     className="btn d-flex align-items-center"
//                     style={{ color: "#00a8ff", fontWeight: "bold", padding: "4px 8px" }}
//                     >
//                     <span className="me-1">ALL</span>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="bi bi-chevron-down"
//                         viewBox="0 0 16 16"
//                     >
//                         <path
//                         fillRule="evenodd"
//                         d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//                         />
//                     </svg>
//                     </button>
//                 </div>

//                 {isPriceDropdownOpen && (
//                     <div className="position-absolute mt-1 bg-dark rounded p-2" style={{ zIndex: 1000, width: "250px" }}>
//                     <div className="mb-2">
//                         <span className="text-white">RANGE</span>
//                     </div>
//                     <div className="d-flex justify-content-between mb-2">
//                         <span className="text-white">$0</span>
//                         <span className="text-white">$100</span>
//                     </div>
//                     <div className="position-relative">
//                         <input
//                         type="range"
//                         className="form-range"
//                         min="0"
//                         max="100"
//                         value={priceRange[1]}
//                         onChange={handlePriceChange}
//                         style={{
//                             height: "4px",
//                             backgroundColor: "#333",
//                             borderRadius: "2px",
//                         }}
//                         />
//                         <div
//                         className="position-absolute"
//                         style={{
//                             left: `${priceRange[1]}%`,
//                             top: "0",
//                             transform: "translateX(-50%)",
//                             width: "16px",
//                             height: "16px",
//                             backgroundColor: "#00a8ff",
//                             borderRadius: "50%",
//                             marginTop: "-6px",
//                         }}
//                         ></div>
//                     </div>
//                     <div className="text-center mt-1">
//                         <span className="text-white">${priceRange[1]}</span>
//                     </div>
//                     </div>
//                 )}
//                 </div>
//             </div>
//             </div>

//         <button
//           className="btn btn-dark d-flex align-items-center position-absolute"
//           style={{ left: "50%", transform: "translateX(-50%)" }}
//         >
//           <span className="me-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-arrow-left"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//               />
//             </svg>
//           </span>
//           GO TO INVENTORY
//         </button>

//         <div
//           className="balance-display d-flex align-items-center px-3 py-2 rounded"
//           style={{ background: "#28a745", color: "white" }}
//         >
//           <span className="me-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-cash"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
//               <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
//             </svg>
//           </span>
//           BALANCE: ${balance}
//         </div>
//       </div>

//       <div className="d-flex position-relative" style={{ height: "calc(100vh - 60px)" }}>
//         {/* Filters sidebar */}
//         {isFiltersOpen && (
//           <div
//             className="filters-sidebar"
//             style={{
//               width: "250px",
//               background: "#1a1a1a",
//               height: "100%",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 100,
//               overflow: "auto",
//               borderRight: "1px solid #333",
//             }}
//           >
//             <div className="p-3">
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex align-items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="white"
//                     className="bi bi-sliders me-2"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
//                     />
//                   </svg>
//                   <span className="text-white fw-bold">Filters</span>
//                 </div>
//                 <button className="btn btn-sm text-white" onClick={toggleFilters}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     className="bi bi-x"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="mb-4">
//                 <h6 className="text-white mb-3">Sort By</h6>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="priceAsc" />
//                   <label className="form-check-label text-white" htmlFor="priceAsc">
//                     Price: Low to High
//                   </label>
//                 </div>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="priceDesc" />
//                   <label className="form-check-label text-white" htmlFor="priceDesc">
//                     Price: High to Low
//                   </label>
//                 </div>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="nameAsc" />
//                   <label className="form-check-label text-white" htmlFor="nameAsc">
//                     Name: A to Z (Alphabetically)
//                   </label>
//                 </div>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="nameDesc" />
//                   <label className="form-check-label text-white" htmlFor="nameDesc">
//                     Name: Z to A (Alphabetically)
//                   </label>
//                 </div>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="popular" />
//                   <label className="form-check-label text-white" htmlFor="popular">
//                     Popular
//                   </label>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h6 className="text-white mb-3">Genre</h6>
//                 {["ALL", "CASUAL", "SPORTS", "FORMALS"].map((genre) => (
//                   <div className="form-check mb-2" key={genre}>
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id={`genre-${genre}`}
//                       name="genre"
//                       checked={selectedGenre === genre}
//                       onChange={() => handleGenreSelect(genre)}
//                     />
//                     <label className="form-check-label text-white" htmlFor={`genre-${genre}`}>
//                       {genre}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               <div className="mb-4">
//                 <h6 className="text-white mb-3">Price Range</h6>
//                 <div className="mb-2">
//                   <span className="text-white">$0 - ${priceRange[1]}</span>
//                 </div>
//                 <input
//                   type="range"
//                   className="form-range"
//                   min="0"
//                   max="100"
//                   value={priceRange[1]}
//                   onChange={handlePriceChange}
//                 />
//               </div>

//               <div className="mb-4">
//                 <h6 className="text-white mb-3">Exclusive</h6>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="free" />
//                   <label className="form-check-label text-white" htmlFor="free">
//                     Free
//                   </label>
//                 </div>
//                 <div className="form-check mb-2">
//                   <input className="form-check-input" type="checkbox" id="premium" />
//                   <label className="form-check-label text-white" htmlFor="premium">
//                     Premium
//                   </label>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <h6 className="text-white mb-3">Colors</h6>
//                 <div className="d-flex flex-wrap gap-2">
//                   {colors.map((color, index) => (
//                     <div
//                       key={index}
//                       className="rounded-circle"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         backgroundColor: color,
//                         border: color === "white" ? "1px solid #ccc" : "none",
//                         cursor: "pointer",
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Main content area */}
//         <div className="flex-grow-1 position-relative">
//           {/* Main display area */}
//           <div className="position-relative" style={{ height: "calc(100vh - 120px)" }}>
//             {/* Display area for selected clothing */}
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100%",  width: "100%" }}>
//               {selectedClothing ? (
//                 <div className="text-center">
//                   <div
//                     style={{
//                       width: "300px",
//                       height: "300px",
//                       backgroundColor: selectedClothing.color,
//                       borderRadius: "10px",
//                       margin: "0 auto",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <h3 className="text-white">{selectedClothing.name}</h3>
//                   </div>
//                   <h4 className="text-white mt-3">Selected: {selectedClothing.name}</h4>
//                   <p className="text-white">
//                     Type: {selectedClothing.type} | Genre: {selectedClothing.genre}
//                   </p>
//                 </div>
//               ) : (
//                 <div className="text-center text-white">
//                   <h3>Select a clothing item to try on</h3>
//                 </div>
//               )}
//             </div>

//             {/* Inspect button */}
//             <div className="position-absolute" style={{ top: "80px", left: "50%", transform: "translateX(-50%)" }}>
//               <button className="btn btn-info px-4 py-2 fw-bold">INSPECT</button>
//               <div className="text-center text-white">Customize</div>
//             </div>

//             {/* Clothing items display */}
//             <div className="clothing-items-container d-flex justify-content-center position-absolute bottom-0 left-0 right-0 pb-4">
//               <div className="d-flex justify-content-between" style={{ width: "90%" }}>
//                 {/* Left arrow */}
//                 <button
//                   className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
//                   style={{ width: "40px", height: "40px", alignSelf: "center" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="currentColor"
//                     className="bi bi-chevron-left"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
//                     />
//                   </svg>
//                 </button>

//                 {/* Clothing items */}
//                 {filteredClothingItems.map((item) => (
//                   <div key={item.id} className="clothing-item text-center" style={{ width: "150px" }}>
//                     <div className="position-relative mb-2" style={{ height: "150px" }}>
//                       <div
//                         style={{
//                           width: "150px",
//                           height: "150px",
//                           backgroundColor: item.color,
//                           borderRadius: "10px",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         {item.type === "hoodie" && (
//                           <div
//                             style={{
//                               width: "80%",
//                               height: "80%",
//                               backgroundColor: item.color,
//                               borderRadius: "10px 10px 0 0",
//                             }}
//                           ></div>
//                         )}
//                         {item.type === "suit" && (
//                           <div
//                             style={{
//                               width: "70%",
//                               height: "90%",
//                               backgroundColor: item.color,
//                               borderRadius: "0 0 10px 10px",
//                             }}
//                           ></div>
//                         )}
//                         {item.type === "jersey" && (
//                           <div
//                             style={{ width: "80%", height: "70%", backgroundColor: item.color, borderRadius: "5px" }}
//                           ></div>
//                         )}
//                         {item.type === "jacket" && (
//                           <div
//                             style={{ width: "70%", height: "80%", backgroundColor: item.color, borderRadius: "5px" }}
//                           ></div>
//                         )}
//                       </div>
//                     </div>
//                     <button className="btn btn-info px-4" onClick={() => handleTryClothing(item)}>
//                       TRY
//                     </button>
//                   </div>
//                 ))}

//                 {/* Right arrow */}
//                 <button
//                   className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
//                   style={{ width: "40px", height: "40px", alignSelf: "center" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="currentColor"
//                     className="bi bi-chevron-right"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Buy section at bottom */}
//           <div className="buy-section position-absolute bottom-0 left-0 right-0 d-flex flex-column align-items-center pb-4">
//             <div className="d-flex align-items-center mb-1">
//               <span className="text-decoration-line-through text-white me-2">$10</span>
//               <span className="text-primary fw-bold fs-4">$5.00</span>
//               <button className="btn btn-success ms-3 px-4 py-2 fw-bold" onClick={handleBuyNow}>
//                 Buy Now
//               </button>
//             </div>
//             <div className="text-white">
//               Limited Edition! <span className="text-danger">Only 2 remaining</span>
//             </div>
//           </div>
//         </div>
//       </div>



//     </div>
//   )
// }

// export default ClothingShop


import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import Model from '../model/Model';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import styles from './ClothingShop.module.css'; // Import modular CSS

const ClothingShop = () => {
  const [selectedClothing, setSelectedClothing] = useState(null);
  const [balance, setBalance] = useState(300); // Starting balance
  const [genreFilter, setGenreFilter] = useState('ALL');
  const [priceFilter, setPriceFilter] = useState('A');

  // Sample clothing data
  const clothingItems = [
    { id: 1, name: 'Green Hoodie', genre: 'CASUAL', price: 5, modelUrl: '/assets/img/cloth/ClothsAndCharacter/Cloth1/Model/TShirt1.fbx' },
    { id: 2, name: 'White Tuxedo', genre: 'FORMALS', price: 10, modelUrl: '/assets/img/cloth/ClothsAndCharacter/Cloth1/Model/TShirt1.fbx' },
    { id: 3, name: 'Sports Jersey', genre: 'SPORTS', price: 5, modelUrl: '/assets/img/cloth/ClothsAndCharacter/Cloth1/Model/TShirt1.fbx' },
    { id: 4, name: 'Colorblock Jacket', genre: 'CASUAL', price: 8, modelUrl: '/assets/img/cloth/ClothsAndCharacter/Cloth1/Model/TShirt1.fbx' },
  ];

  // Filter clothing based on genre
  const filteredClothing = clothingItems.filter(
    (item) => genreFilter === 'ALL' || item.genre === genreFilter
  );

  // Handle buying an item
  const handleBuy = (item) => {
    if (balance >= item.price) {
      setBalance(balance - item.price);
      alert(`Purchased ${item.name} for $${item.price}!`);
    } else {
      alert('Insufficient balance!');
    }
  };

  return (
    // <Container fluid className={styles.clothingShop}>
    //   {/* Top Bar: Filters and Balance */}
    //   <Row className={styles.topBar}>
    //     <Col md={3}>
    //       <Dropdown onSelect={(key) => setGenreFilter(key)}>
    //         <Dropdown.Toggle variant="secondary">GENRE: {genreFilter}</Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           <Dropdown.Item eventKey="ALL">ALL</Dropdown.Item>
    //           <Dropdown.Item eventKey="CASUAL">CASUAL</Dropdown.Item>
    //           <Dropdown.Item eventKey="SPORTS">SPORTS</Dropdown.Item>
    //           <Dropdown.Item eventKey="FORMALS">FORMALS</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </Col>
    //     <Col md={3}>
    //       <Dropdown onSelect={(key) => setPriceFilter(key)}>
    //         <Dropdown.Toggle variant="secondary">PRICE: {priceFilter}</Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           <Dropdown.Item eventKey="A">A</Dropdown.Item>
    //           <Dropdown.Item eventKey="B">B</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </Col>
    //     <Col md={3}>
    //       <Button variant="secondary">GO TO INVENTORY</Button>
    //     </Col>
    //     <Col md={3} className={styles.textRight}>
    //       <Button variant="success">BALANCE: ${balance}</Button>
    //     </Col>
    //   </Row>

    //   {/* 3D Scene */}
    //   <Row>
    //     <Col>
    //       <Canvas style={{ height: '500px' }} camera={{ position: [0, 0, 5], fov: 60 }}>
    //         <ambientLight intensity={0.5} />
    //         <directionalLight position={[5, 5, 5]} intensity={1} />
    //         <Environment preset="sunset" />

    //         {/* Center Model */}
    //         {selectedClothing ? (
    //           <Model url={selectedClothing.modelUrl} />
    //         ) : (
    //           <Model url="/models/default_character.fbx" />
    //         )}

    //         {/* Clothing Options on Floating Platforms */}
    //         {filteredClothing.map((item, index) => (
    //           <group key={item.id} position={[index * 2 - 3, -1, -2]}>
    //             <mesh
    //               onClick={() => setSelectedClothing(item)}
    //               position={[0, 0.5, 0]}
    //             >
    //               <boxGeometry args={[1, 1, 1]} />
    //               <meshStandardMaterial color="cyan" transparent opacity={0.5} />
    //             </mesh>
    //             <Html position={[0, -0.5, 0]}>
    //               <Button variant="primary" onClick={() => setSelectedClothing(item)}>
    //                 TRY
    //               </Button>
    //             </Html>
    //           </group>
    //         ))}
    //       </Canvas>
    //     </Col>
    //   </Row>

    //   {/* Bottom Bar: Buy Button */}
    //   {selectedClothing && (
    //     <Row className={styles.bottomBar}>
    //       <Col className="text-center">
    //         <Button variant="success" onClick={() => handleBuy(selectedClothing)}>
    //           <s>$10</s> ${selectedClothing.price} BUY NOW
    //         </Button>
    //         <p className={styles.limitedEdition}>LIMITED EDITION! ONLY 2 REMAINING</p>
    //       </Col>
    //     </Row>
    //   )}
    // </Container>

    <div style={{ height: "100vh", background: "#121212" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ClothingModel modelPath="/assets/img/cloth/ClothsAndCharacter/Cloth1/Model/TShirt1.fbx" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ClothingShop;