import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./Samble'));

const ReactLazy = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  </div>
);

export default ReactLazy;