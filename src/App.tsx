import React, { useEffect } from 'react';

import { characterService } from 'services';

const App = () => {
  useEffect(() => {
    const fetchChars = async () => {
      console.log((await characterService.getCharacters()).results);
    };
    fetchChars();
  }, []);
  return <div></div>;
};

export default App;
