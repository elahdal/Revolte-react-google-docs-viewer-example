import React from 'react';
import './App.css';
import GoogleDocsViewer from 'react-google-docs-viewer';

function App() {
  return (
    <div className="App">
      <h1>Revolte</h1>
      <h2>Visualiser vos documents en toute sécurité 👇</h2>

      <GoogleDocsViewer
        width="600px"
        height="780px"
        fileUrl="https://docs.google.com/document/d/1una3HmF4gGPgf1mP7VzKMI0QD-2ACMefsTNk9fv5JzU/export?format=pdf"
        // on affiche le document a partir d'une url accesible (voir piste usage unique)
        disableDownload={true} 
        // ici j'ai enlevé le bouton télecharger mais faut aussi l'enlever des droits 
      />
    </div>
  );
}

export default App;


// Deuxime modele avec Iframe 

// import React from 'react';
// import './App.css';
// import GoogleDocsViewer from 'react-google-docs-viewer';

// function App() {
//   return (
//     <div className="App">
//        <h1>Revolte</h1>
//        <h2>Visualiser vos documents en toute sécurité 👇</h2>

//        <iframe
//          title="Google Doc"
//          src="https://docs.google.com/document/d/1UfwlD68u6xvWqyU5ykEFBFEQQMPw3HzAvWOY-_ZQAdo/preview"
//          width="500"
//          height="700"
//          allow="autoplay"
//        ></iframe>
//      </div>
//   );
// }

// export default App;


