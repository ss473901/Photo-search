import React, { useState } from 'react';

function App() {
   const [count, setCount] = useState(8);
   //　　[定数, カウントを更新するロジック]= 初期値

     return (
       <div>
         <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         Click me
        </button>

        <button onClick={() => setCount(count - 1)}>
          Click
        </button>
     </div>
    );
  }
 export default App

