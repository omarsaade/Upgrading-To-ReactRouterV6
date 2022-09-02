import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {

  const navigate = useNavigate();
  //imperative navigation
  navigate('/welcome', { replace: true }); // replace bta3mul degre bel url 
  //mesh push

  // navigate(-2); navigate(1); iza badak terja3 aw t2adem

  // useEffect(() => {
  //   navigate('/welcome');
  // }, [])

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
