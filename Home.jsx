import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
import FilterSortSection from './FilterSortSection';

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		// Fetch recipes from API when component is mounted
		axios
			.get('http://localhost:8080/api/recipes')
			.then((response) => {
				setRecipes(response.data);
				setFilteredRecipes(response.data); // Initially show all recipes
			})
			.catch((error) => console.error('Error fetching recipes:', error));
	}, []); // Empty dependency array to run only on mount

	// Handle search query change and filter recipes based on title or ingredients
	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchQuery(query);

		const filtered = recipes.filter(
			(recipe) =>
				recipe.title.toLowerCase().includes(query.toLowerCase()) ||
				recipe.ingredients.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredRecipes(filtered);
	};

	// Handle image click to display enlarged image in modal
	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
	};

	// Close modal when image is clicked
	const handleCloseImage = () => {
		setSelectedImage(null);
	};

	return (
		<div>
			<header
				style={{
					backgroundColor: '#FF6347',
					padding: '20px 0',
					textAlign: 'center',
				}}
			>
				<h1 style={{ color: 'white', fontSize: '3rem' }}>
					Welcome to the Honey Recipe App!
				</h1>
				<p style={{ color: 'white' }}>Find and share delicious recipes!</p>
			</header>
         
         {/* Navbar Start*/}
            <Navbar />
          {/* Navbar End*/}

        <ImageCarousel />

        

			{/* Search and Add Recipe Button */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '20px',
				}}
			>
				{/* Search Input */}
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<input
						type="text"
						placeholder="Search recipes..."
						value={searchQuery}
						onChange={handleSearchChange}
						style={{
							padding: '10px',
							width: '300px',
							borderRadius: '5px',
							border: '1px solid #ccc',
							marginRight: '20px',
						}}
					/>
				</div>

				{/* Add Recipe Button */}
				<button
					onClick={() => navigate('/add-recipe')}
					style={{
						padding: '10px 20px',
						backgroundColor: '#4CAF50',
						color: 'white',
						borderRadius: '5px',
					}}
				>
					Add Recipe
				</button>
			</div>

			{/* Display filtered recipes */}
			{filteredRecipes.length > 0 ? (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
					{filteredRecipes.map((recipe) => (
						<div
							key={recipe.id}
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								width: '45%',
								border: '1px solid #ccc',
								borderRadius: '8px',
								padding: '10px',
								backgroundColor: '#f9f9f9',
							}}
						>
							{/* Recipe Image */}
							<img
								src={recipe.imageUrl}
								alt={recipe.title}
								style={{
									width: '150px',
									height: 'auto',
									borderRadius: '8px',
									cursor: 'pointer',
									marginRight: '20px',
								}}
								onClick={() => handleImageClick(recipe.imageUrl)}
							/>

							{/* Recipe Details */}
							<div style={{ flex: 1 }}>
								<h2 style={{ margin: '0' }}>{recipe.title}</h2>
								<p>
									<strong>Category:</strong> {recipe.category}
								</p>
								<p>
									<strong>Ingredients:</strong> {recipe.ingredients}
								</p>
								<p>
									<strong>Instructions:</strong> {recipe.instructions}
								</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>No recipes available. Please add some.</p>
			)}

			{/* Modal for Enlarged Image */}
			{selectedImage && (
				<div className="modal" onClick={handleCloseImage}>
					<div className="modal-content">
						<img
							src={selectedImage}
							alt="Recipe"
							style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
						/>
						<button className="close" onClick={handleCloseImage}>
							Close
						</button>
					</div>
				</div>
			)}

			{/* Footer Section 1: Newsletter Subscription */}
			<footer className="py-3" style={{ backgroundColor: '#F8F9FA' }}>
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-12 col-md-6">
							<div className="footer-top-data d-flex gap-30 align-items-center">
								<img src="" alt="newsletter" width="50" />
								<h2 className="mb-0 text-dark">
									Sign Up for Our Recipe Newsletter
								</h2>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="input-group">
								<input
									type="email"
									className="form-control py-2"
									placeholder="Enter your email address"
									aria-label="Your Email Address"
								/>
								<span
									className="input-group-text p-2"
									id="basic-addon-2"
									style={{
										backgroundColor: '#FF6347',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									Subscribe
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Footer Section 2: Footer Links */}
			<footer className="py-4" style={{ backgroundColor: '#343A40' }}>
				<div className="container-xxl">
					<div className="row">
						{/* Contact Section */}
						<div className="col-12 col-md-3">
							<h4 className="text-white mb-4">Company</h4>
							<div className="footer-link d-flex flex-column">
								<Link to="/about-us" className="text-white py-2 mb-1">
									About Us
								</Link>
								<Link to="/careers" className="text-white py-2 mb-1">
									Careers
								</Link>
								<Link to="/team" className="text-white py-2 mb-1">
									Team
								</Link>
								<Link to="/partner" className="text-white py-2 mb-1">
									Partner with us
								</Link>
							</div>
						</div>

						{/* Information Section */}
						<div className="col-12 col-md-3">
							<h4 className="text-white mb-4">Information</h4>
							<div className="footer-link d-flex flex-column">
								<Link to="/terms" className="text-white py-2 mb-1">
									Terms & Conditions
								</Link>
								<Link to="/privacy-policy" className="text-white py-2 mb-1">
									Privacy Policy
								</Link>
								<Link to="/cookie-policy" className="text-white py-2 mb-1">
									Cookie Policy
								</Link>
								<Link to="/investor-relations" className="text-white py-2 mb-1">
									Investor Relations
								</Link>
							</div>
						</div>

						{/* Social Media Links Section */}
						<div className="col-12 col-md-3 text-center">
							<div className="social-icons d-flex justify-content-center gap-3 mb-3">
								<Link to="https://www.linkedin.com" className="text-white">
									<BsLinkedin size={24} />
								</Link>
								<Link to="https://github.com" className="text-white">
									<BsGithub size={24} />
								</Link>
								<Link to="https://instagram.com" className="text-white">
									<BsInstagram size={24} />
								</Link>
								<Link
									to="https://wa.me/yourwhatsapplink"
									className="text-white"
								>
									<BsWhatsapp size={24} />
								</Link>
							</div>
							<p className="text-white">
								© 2024 Honey Recipe App. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
