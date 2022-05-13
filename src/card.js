import React from 'react';

const card () => {
   return ( 
   	  <div className ='bg-light-green br3 ma2 grow bw2 shadow-5'>
   	   <img alt='robots' src='https://robohash.org/test?200x200' />
   	   <div>
   	     <h2>Jane Doe</h2>
   	     <p>jane.doe@gmail.com</p>
   	    </div>
   	   </div>
   	   );
}

export default card;