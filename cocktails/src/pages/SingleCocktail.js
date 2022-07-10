import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const resp = await fetch(url + id);
        const data = await resp.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{cocktail.name} </h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="drink-info">
          <table border="0">
            <tbody>
              <tr>
                <th>
                  <span className="drink-data">Name:</span>
                </th>
                <td>{cocktail.name}</td>
              </tr>
              <tr>
                <th>
                  <span className="drink-data">Info:</span>
                </th>
                <td>{cocktail.info}</td>
              </tr>
              <tr>
                <th>
                  <span className="drink-data">Category:</span>
                </th>
                <td>{cocktail.category}</td>
              </tr>
              <tr>
                <th>
                  <span className="drink-data">Glass:</span>
                </th>
                <td>{cocktail.glass}</td>
              </tr>
              <tr>
                <th>
                  <span className="drink-data">Instructions:</span>
                </th>
                <td>{cocktail.instructions}</td>
              </tr>
              <tr>
                <th>
                  <span className="drink-data">Ingredients:</span>
                </th>
                <td>
                  {cocktail.ingredients.map((ingredient, index) => {
                    return ingredient ? (
                      <span key={index}>{ingredient}</span>
                    ) : null;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
