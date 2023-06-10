// import React, { useState } from 'react';
// // import MyComponent from './MyComponent';
// import data from '../src/assests/data.json'
// import Practice from './component/Practice';
// import MyComponent from './component/Lop';
// import Lop from './component/Lop';
// import WeatherComponent from './component/WeatherComponent';

// function App({country}) {
// //   const [db, setData] = useState(data);
// // console.log(db)
//   return (
//     <div>
//       <h1>hgebuhbshj</h1>
//       {/* <Practice>

//       </Practice> */}
//       {/* <MyComponent>
        
//       </MyComponent> */}
//       {/* <Practice>

//       </Practice> */}
// {/* <Lop>

// </Lop> */}


// <WeatherComponent country={country} />
//       {/* {data.map(item => (
//         <MyComponent key={item.id} name={item.name} />
//       ))} */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import WeatherComponent from './component/WeatherComponent';

const App = () => {
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API or perform any other logic here using the "country" state value
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter a country"
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherComponent country={country} />
    </div>
  );
};

export default App;
