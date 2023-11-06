const fs = require('fs');
const path = require('path');

const componentNames = [
  'Button',
  'Header',
  'Footer',
  'Card',
  'Form',
  'List',
  'Modal',
  'Navbar',
  'Sidebar',
  'Table'
];

const componentsDir = path.join(__dirname, 'src');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir);
}

componentNames.forEach((componentName) => {
  const componentDir = path.join(componentsDir, componentName);

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  const componentFileName = `${componentName}.tsx`;
  const componentContent = `import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      ${componentName}
    </div>
  );
};

export { ${componentName} };
`;

  fs.writeFileSync(
    path.join(componentDir, componentFileName),
    componentContent
  );
});

const entryFileContent = componentNames
  .map(
    (componentName) => `export * from './${componentName}/${componentName}';`
  )
  .join('\n');

fs.writeFileSync(path.join(componentsDir, 'index.ts'), entryFileContent);
