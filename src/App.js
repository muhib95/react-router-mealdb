// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './Display/Display';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Display></Display>,children:[
      {
        path:'/home',element:<Home></Home>
      },
      {
        path:'/meals',
        loader:async()=>{
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        },
        element:<Meals></Meals>
      },
      {
        path:'meal/:idMeal',
        loader:async({params})=>{
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        },
        element:<MealDetail></MealDetail>

        }
      
    ]}
    
  ]);
  return (
    <div className="App">
      


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
