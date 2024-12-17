
import './Produkt.css';
import { Link } from "react-router-dom";



function Produkt (){
    return(
        
<div className="body" id="produkt">

<header class="header">
<div class="container">
    <div class="logo">Game Store</div>
    <nav>
        <ul class="nav">
            <li><Link to="Produkt"></Link><a href="/" class="nav-link">Home</a></li>
            
            <li><a href="Produkt" class="nav-link">Shop</a></li>
            <li><a href="#" class="nav-link">Contact</a></li>
        </ul>
    </nav>
</div>
</header>

{/* <!-- Product Section --> */}
<section class="product">
<div class="container">
    <div class="product-header">
        {/* <img src="c:\Users\User\Downloads\iphone-14-pro-finish-select-202209-6-7inch-deeppurple_GUDIadx.webp" alt="Product Image" class="product-image"/> */}
        <div class="product-details">
            <h1>Apple iPhone 14 Pro Max</h1>
            <p class="price">$1399</p>
            <form class="product-form">
                <div class="options">
                    <label for="color">Color:</label>
                    <select id="color">
                        <option>Space Black</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Deep Purple</option>
                    </select>
                </div>
                <div class="options">
                    <label for="storage">Storage:</label>
                    <select id="storage">
                        <option>128GB</option>
                        <option>256GB</option>
                        <option>512GB</option>
                        <option>1TB</option>
                    </select>
                </div>
                <button type="submit" class="btn">Add to Cart</button>
            </form>
        </div>
    </div>

    <div class="product-info">
        <h2>Details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan neque sit amet erat scelerisque pretium. Aliquam erat volutpat.</p>
    </div>

    <div class="reviews">
        <h2>Reviews</h2>
        <div class="review">
            <strong>John Doe</strong>
            <p>Excellent product, highly recommend!</p>
        </div>
        <div class="review">
            <strong>Jane Smith</strong>
            <p>Good quality, but a bit overpriced.</p>
        </div>
    </div>

    <div class="related-products">
        <h2>Related Products</h2>
        <div class="product-list">
            <div class="product-item">
                <img src="" alt="Product 1"/>
                <p>Samsung Galaxy S23</p>
            </div>
            <div class="product-item">
                <img src="c:\Users\User\Downloads\png-klev-club-sfm8-p-airpods-pro-png-6.png" alt="Product 2"/>
                <p>Apple AirPods Pro</p>
            </div>
            <div class="product-item">
                <img src="c:\Users\User\Downloads\Без названия (6).jpeg/" alt="Product 3"/>
                <p>Apple Watch Series 8</p>
            </div>
        </div>
    </div>
</div>
</section>

{/* <!-- Footer --> */}
<footer class="footer">
<div class="container">
    <p>&copy; 2024 Game Store. All rights reserved.</p>
    <nav>
        <ul class="footer-nav">
            <li><a href="#home" class="footer-link">Privacy Policy</a></li>
            <li><a href="#home" class="footer-link">Terms of Service</a></li>
        </ul>
    </nav>
</div>
</footer>
</div>
    );
}
export default Produkt;