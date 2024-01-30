// import { useState } from 'react'
// import './App.css'
import PropTypes from 'prop-types';

const Button = ({variant = 'bg-black', children}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center bg-blue-300 min-h-screen items-center">
        <div className="flex gap-x-3">
          <Button variant="bg-red-500">ayam</Button>
          <Button variant="bg-black">ikan</Button>
          <Button>kambing</Button>
          
        </div>
      </div>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired
};

export default App;
