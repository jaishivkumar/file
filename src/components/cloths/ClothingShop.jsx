"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html } from "@react-three/drei"
import { ChevronLeft, ChevronRight, Settings, Maximize } from "lucide-react"

// Component to load and render the GLTF/GLB model
const ClothingModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

// Fallback component when model loading fails
const ModelErrorFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#ff0000" wireframe />
      <Html position={[0, 2, 0]} center>
        <div className="text-white bg-danger p-2 rounded">Failed to load model</div>
      </Html>
    </mesh>
  )
}

// Simple background component
const SceneBackground = () => {
  return (
    <>
      <color attach="background" args={["#111827"]} />
      <fog attach="fog" args={["#111827", 5, 15]} />
    </>
  )
}

// Component for the clothing items that appear around the character
const ClothingItem = ({ position, modelPath, name, price, onTry }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>
      <Html position={[0, -1, 0]} center>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-info text-white px-4 fw-bold"
            style={{ fontSize: "0.8rem" }}
            onClick={() => onTry(modelPath)}
          >
            TRY
          </button>
        </div>
      </Html>
    </group>
  )
}

// Main component
const ClothingShop = () => {
  const [selectedGenre, setSelectedGenre] = useState("ALL")
  const [selectedPrice, setSelectedPrice] = useState("ALL")
  const [currentModel, setCurrentModel] = useState("/assets/3d/duck.glb") // Using the built-in duck model
  const [remainingTime, setRemainingTime] = useState("23h 7m remaining")
  const [balance, setBalance] = useState(300)
  const [originalPrice, setOriginalPrice] = useState(10)
  const [discountedPrice, setDiscountedPrice] = useState(5)
  const [showPriceDropdown, setShowPriceDropdown] = useState(false)

  const handleTryClothing = (modelPath) => {
    setCurrentModel(modelPath)
  }

  const genres = ["ALL", "CASUAL", "SPORTS", "FORMALS"]
  const prices = ["ALL", "UNDER $5", "$5-$10", "$10-$20", "OVER $20"]

  // Using the built-in duck model for all items as a placeholder
  const clothingItems = [
    { id: 1, name: "Green Hoodie", price: 5, genre: "CASUAL", position: [-3, 0, 0], modelPath: "/assets/3d/duck.glb" },
    { id: 2, name: "Blue Suit", price: 15, genre: "FORMALS", position: [-1, 0, 0], modelPath: "/assets/3d/duck.glb" },
    { id: 3, name: "Red Jersey", price: 8, genre: "SPORTS", position: [1, 0, 0], modelPath: "/assets/3d/duck.glb" },
    { id: 4, name: "Gray Jacket", price: 12, genre: "CASUAL", position: [3, 0, 0], modelPath: "/assets/3d/duck.glb" },
  ]

  // Filter clothing items based on selected genre and price
  const filteredItems = clothingItems.filter((item) => {
    const genreMatch = selectedGenre === "ALL" || item.genre === selectedGenre

    let priceMatch = true
    if (selectedPrice === "UNDER $5") priceMatch = item.price < 5
    else if (selectedPrice === "$5-$10") priceMatch = item.price >= 5 && item.price <= 10
    else if (selectedPrice === "$10-$20") priceMatch = item.price > 10 && item.price <= 20
    else if (selectedPrice === "OVER $20") priceMatch = item.price > 20

    return genreMatch && priceMatch
  })

  return (
    <div className="container-fluid p-0">
      <div className="row g-0" style={{ height: "100vh", backgroundColor: "#121212" }}>
        {/* Sidebar */}
        <div className="col-md-2" style={{ backgroundColor: "#1e1e1e", borderRight: "1px solid #333" }}>
          <div className="p-3">
            {/* Genre Filter */}
            <div className="mb-4">
              <div className="text-white mb-2 fw-bold">GENRE:</div>
              {genres.map((genre) => (
                <div key={genre} className="d-flex align-items-center mb-1">
                  <div
                    className="me-2"
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid #fff",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: selectedGenre === genre ? "#00a8ff" : "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {selectedGenre === genre && <span>✓</span>}
                  </div>
                  <span className="text-white">{genre}</span>
                </div>
              ))}
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle w-100 text-start"
                  type="button"
                  onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                >
                  PRICE: {selectedPrice}
                </button>
                <div
                  className={`dropdown-menu ${showPriceDropdown ? "show" : ""}`}
                  style={{ backgroundColor: "#2a2a2a", width: "100%" }}
                >
                  {prices.map((price) => (
                    <a
                      key={price}
                      className={`dropdown-item ${selectedPrice === price ? "active" : ""}`}
                      href="#"
                      style={{ color: "#fff" }}
                      onClick={(e) => {
                        e.preventDefault()
                        setSelectedPrice(price)
                        setShowPriceDropdown(false)
                      }}
                    >
                      {price}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Filters Label */}
            <div className="d-flex align-items-center">
              <span className="text-white me-2">FILTERS</span>
              <hr className="flex-grow-1 bg-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          <div className="p-3">
            {/* Top Bar */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-dark d-flex align-items-center">
                <ChevronLeft size={16} /> GO TO INVENTORY
              </button>
              <div className="bg-success text-white px-3 py-2 rounded">
                <span className="me-1">💵</span> BALANCE: ${balance}
              </div>
            </div>

            {/* Canvas Container */}
            <div
              className="position-relative"
              style={{
                height: "calc(100vh - 140px)",
                borderRadius: "8px",
                overflow: "hidden",
                background: "linear-gradient(to bottom, #1a1a2e, #16213e)",
              }}
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SceneBackground />

                <Suspense fallback={null}>
                  <ClothingModel modelPath={currentModel} />

                  {filteredItems.map((item) => (
                    <ClothingItem
                      key={item.id}
                      position={item.position}
                      modelPath={item.modelPath}
                      name={item.name}
                      price={item.price}
                      onTry={handleTryClothing}
                    />
                  ))}
                </Suspense>

                <OrbitControls enableZoom={false} />
              </Canvas>

              {/* Inspect Button */}
              <button
                className="btn btn-info text-white fw-bold position-absolute"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "10px 30px" }}
              >
                INSPECT
                <div style={{ fontSize: "0.7rem", opacity: "0.8" }}>Customize</div>
              </button>

              {/* Navigation Buttons */}
              <button
                className="btn btn-primary position-absolute"
                style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="btn btn-primary position-absolute"
                style={{ top: "50%", right: "10px", transform: "translateY(-50%)" }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Bar */}
            <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="me-3">
                <span className="text-decoration-line-through" style={{ color: "#ff5555", fontSize: "1.2rem" }}>
                  ${originalPrice}
                </span>
                <span className="ms-2" style={{ color: "#00a8ff", fontSize: "1.5rem", fontWeight: "bold" }}>
                  ${discountedPrice}
                </span>
              </div>

              <button className="btn btn-success px-4 fw-bold" style={{ fontSize: "1.2rem" }}>
                Buy Now
              </button>

              <div className="ms-3 text-white">
                <small style={{ color: "#ff5555" }}>Limited Edition! {remainingTime}</small>
              </div>

              <div className="position-absolute" style={{ right: "10px", bottom: "10px" }}>
                <button className="btn btn-link p-1">
                  <Settings size={20} color="white" />
                </button>
                <button className="btn btn-link p-1">
                  <Maximize size={20} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingShop

