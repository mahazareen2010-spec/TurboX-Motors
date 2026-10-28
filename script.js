// Dynamic Products Dataset (20 Sports Cars for TurboX Motors)
const sportsCars = [
  { id: 1, name: "TurboX GT-R", category: "Track Special", desc: "4.0L Twin-Turbo V8 engine with 720 horsepower.", price: 285000, img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "TurboX Veloce Nero", category: "Hypercar", desc: "Ultra-lightweight carbon fiber chassis delivering 900 HP.", price: 1450000, img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "TurboX Stallion", category: "Supercar", desc: "Naturally aspirated V12 engine reaching 8,500 RPM.", price: 340000, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "TurboX Spectre", category: "Grand Tourer", desc: "Luxurious performance twin-turbo GT built for open roads.", price: 420000, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "TurboX Volt EV", category: "Electric", desc: "Quad-motor electric setup generating 1,900 HP.", price: 2100000, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "TurboX Spyder", category: "Convertible", desc: "Open-top mid-engine supercar with active rear aerodynamics.", price: 310000, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "TurboX Track-R", category: "Track Special", desc: "Aggressive downforce wings built purely for lap times.", price: 295000, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "TurboX Kuro", category: "Supercar", desc: "Exclusive matte black edition with full titanium exhaust.", price: 390000, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "TurboX Supra Coupe", category: "Sport Coupe", desc: "Track-tuned inline 6-cylinder engine with manual transmission.", price: 68000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "TurboX Rossa 450", category: "Supercar", desc: "Classic mid-engine layout paired with active rear-wheel steering.", price: 260000, img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=500&q=80" },
  { id: 11, name: "TurboX Titan 5.0", category: "Muscle Sport", desc: "Supercharged V8 engine with aggressive modern styling.", price: 85000, img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=500&q=80" },
  { id: 12, name: "TurboX Zero EV", category: "Electric", desc: "Zero-emissions hyper-coupe reaching 0-60 mph in 1.8s.", price: 980000, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80" },
  { id: 13, name: "TurboX Centurion V10", category: "Supercar", desc: "All-wheel drive hypercar driven by a high-revving V10.", price: 240000, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=500&q=80" },
  { id: 14, name: "TurboX Shadow GT", category: "Grand Tourer", desc: "Comfortable long-range touring car with twin-turbo power.", price: 195000, img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=500&q=80" },
  { id: 15, name: "TurboX Venom Roadster", category: "Convertible", desc: "Agile lightweight open-top sportster made for winding roads.", price: 175000, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=500&q=80" },
  { id: 16, name: "TurboX RS Trophy", category: "Track Special", desc: "Factory-stripped interior with full carbon bucket seats.", price: 230000, img: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=500&q=80" },
  { id: 17, name: "TurboX Mirage Hyper GT", category: "Hypercar", desc: "Hybrid technology offering 1,500 HP combined power output.", price: 3200000, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=500&q=80" },
  { id: 18, name: "TurboX GT Touring 900", category: "Grand Tourer", desc: "Luxury interior paired with relentless twin-turbo acceleration.", price: 215000, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=80" },
  { id: 19, name: "TurboX Stratos", category: "Sport Coupe", desc: "Lightweight chassis focused on precise cornering feedback.", price: 92000, img: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=500&q=80" },
  { id: 20, name: "TurboX Formula S", category: "Track Special", desc: "Race-car aerodynamics adapted for street-legal performance.", price: 650000, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80" }
];

let cartCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  // 1. DYNAMIC TIMESTAMP FUNCTION
  function updateTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById("timestamp").textContent = formattedTime;
  }
  
  // Start clock immediately and update every second
  updateTimestamp();
  setInterval(updateTimestamp, 1000);

  // 2. HERO CTA SMOOTH SCROLL
  const ctaBtn = document.getElementById("cta-btn");
  ctaBtn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  // 3. RENDER 20 CARDS dynamically using JavaScript
  const gridContainer = document.getElementById("products-grid");
  
  sportsCars.forEach(car => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${car.img}" alt="${car.name}">
      <div class="product-info">
        <span class="category">${car.category}</span>
        <h3 class="product-name">${car.name}</h3>
        <p class="description">${car.desc}</p>
        <div class="card-footer">
          <span class="price">$${car.price.toLocaleString()}</span>
          <button class="btn-add-cart" onclick="addToCart('${car.name}', ${car.price})">
            Add to Cart
          </button>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  // Set current year in footer dynamically
  document.getElementById("current-year").textContent = new Date().getFullYear();
});

// 4. CART COUNTER & SWEETALERT INTEGRATION FUNCTION
function addToCart(carName, price) {
  // Update counter badge
  cartCount++;
  document.getElementById("cart-counter").textContent = cartCount;

  // Trigger SweetAlert modal
  Swal.fire({
    title: 'Added to Cart!',
    text: `${carName} has been added to your shopping cart. Price: $${price.toLocaleString()}`,
    icon: 'success',
    confirmButtonText: 'Continue Shopping',
    confirmButtonColor: '#e63946',
    background: '#161a22',
    color: '#f1f1f1'
  });
}