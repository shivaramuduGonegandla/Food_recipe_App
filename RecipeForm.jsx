import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        imageUrl: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://api.example.com/recipes', { // Replace with your API URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe),
        })
            .then((response) => response.json())
            .then(() => navigate('/'))
            .catch((error) => console.error('Error adding recipe:', error));
    };

    return (
        <div>
            <h1>Add or Update Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={recipe.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={recipe.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <input
                        type="text"
                        name="ingredients"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Instructions:</label>
                    <input
                        type="text"
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={recipe.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Save Recipe</button>
                <button type="button" onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default RecipeForm;
