// previewer-app/src/App.jsx
import React, { Suspense, lazy } from 'react';

// 1. Define all your templates.
// The key ('iphone-15-pro') MUST match what you'll put in the database.
const templates = {
  'iphone-15-pro': lazy(() => import('./templates/Iphone15Pro')),
  // When you add a new template, you'll add a new line here.
  // 'kinetic-portfolio': lazy(() => import('./templates/KineticPortfolio')),
};

function App() {
  // 2. Read the template name from the URL query parameter
  const queryParams = new URLSearchParams(window.location.search);
  const templateName = queryParams.get('template');

  // 3. Select the component to render
  const TemplateToRender = templates[templateName] || null;

  // 4. Render the chosen component, or an error message
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>Loading Preview...</div>}>
      {TemplateToRender ? <TemplateToRender /> : <div style={{ padding: '2rem' }}>Template not found. Please provide a ?template=... parameter.</div>}
    </Suspense>
  );
}

export default App;