import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRecipe = {
            title,
            category,
            ingredients,
            instructions,
            imageUrl
        };

        try {
            await axios.post('http://localhost:8080/api/recipes', newRecipe, {
                headers: {
                    'Content-type': 'application/json'
                }
            });

            // Redirect to home after saving the recipe
            navigate('/');
        } catch (err) {
            console.error('Error adding recipe:', err);
            setError('Failed to add the recipe');
        }
    };

    return (
        <div>
            <h1>Add a New Recipe</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Ingredients:</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Instructions:</label>
                    <input
                        type="text"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
