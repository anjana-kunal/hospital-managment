const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = path.join(__dirname, '../UI/stitch_omnicare_hospital_management_system');
const destDir = path.join(__dirname, 'src/pages');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Helper to convert inline style string to React style object
function styleToObject(styleString) {
  if (!styleString) return null;
  const styleObj = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const [key, value] = rule.split(':');
    if (key && value) {
      const camelCaseKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[camelCaseKey] = value.trim();
    }
  });
  return styleObj;
}

// Convert HTML node to React JSX string
function domToJSX(node) {
  if (node.type === 'text') {
    let text = node.data;
    // escape { and } because they are special in JSX
    text = text.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
    return text;
  }
  if (node.type === 'comment') {
    return `{/* ${node.data.replace(/\*\//g, '* /')} */}`;
  }

  if (node.type === 'tag' || node.type === 'script' || node.type === 'style') {
    // we skip script and style tags inside body for safety, or just script
    if (node.name === 'script') return '';

    const tagName = node.name;
    let attrs = '';

    const attribs = node.attribs || {};
    for (let [key, value] of Object.entries(attribs)) {
      // Handle React attributes
      let reactKey = key;
      if (key === 'class') reactKey = 'className';
      if (key === 'for') reactKey = 'htmlFor';
      if (key === 'tabindex') reactKey = 'tabIndex';
      if (key === 'colspan') reactKey = 'colSpan';
      if (key === 'rowspan') reactKey = 'rowSpan';
      if (key === 'readonly') reactKey = 'readOnly';
      if (key === 'maxlength') reactKey = 'maxLength';
      if (key === 'datetime') reactKey = 'dateTime';
      if (key === 'viewbox') reactKey = 'viewBox';
      if (key === 'stroke-width') reactKey = 'strokeWidth';
      if (key === 'stroke-linecap') reactKey = 'strokeLinecap';
      if (key === 'stroke-linejoin') reactKey = 'strokeLinejoin';
      if (key === 'fill-rule') reactKey = 'fillRule';
      if (key === 'clip-rule') reactKey = 'clipRule';
      
      // We don't want to mess with raw SVG too much but we do best effort

      if (key === 'style') {
        const styleObj = styleToObject(value);
        if (styleObj && Object.keys(styleObj).length > 0) {
          attrs += ` style={${JSON.stringify(styleObj)}}`;
        }
        continue;
      }
      
      // Escape value quotes
      const escapedValue = String(value).replace(/"/g, '&quot;');
      attrs += ` ${reactKey}="${escapedValue}"`;
    }

    let innerJSX = '';
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        innerJSX += domToJSX(child);
      });
    }

    const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'path', 'circle', 'rect'];
    if (selfClosingTags.includes(tagName) || (node.children && node.children.length === 0 && selfClosingTags.includes(tagName))) {
      return `<${tagName}${attrs} />`;
    } else {
      return `<${tagName}${attrs}>${innerJSX}</${tagName}>`;
    }
  }

  return '';
}

function toCamelCase(str) {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const folders = fs.readdirSync(sourceDir);
const routes = [];

for (const folder of folders) {
  const folderPath = path.join(sourceDir, folder);
  const stat = fs.statSync(folderPath);
  
  if (stat.isDirectory()) {
    const htmlFile = path.join(folderPath, 'code.html');
    if (fs.existsSync(htmlFile)) {
      const htmlContent = fs.readFileSync(htmlFile, 'utf8');
      const $ = cheerio.load(htmlContent);
      
      // Find the main content: either the body, or elements inside the body
      const body = $('body');
      
      // Remove any scripts from body
      body.find('script').remove();
      
      let componentContent = '';
      if (body.length > 0) {
        // We'll wrap the body contents in a div and apply body's class
        const bodyClass = body.attr('class') || '';
        const bodyStyle = body.attr('style') || '';
        
        let wrapperAttrs = '';
        if (bodyClass) wrapperAttrs += ` className="${bodyClass}"`;
        if (bodyStyle) wrapperAttrs += ` style={${JSON.stringify(styleToObject(bodyStyle))}}`;

        let childrenJSX = '';
        body.contents().each((i, el) => {
          childrenJSX += domToJSX(el);
        });
        
        componentContent = `<div${wrapperAttrs}>\n${childrenJSX}\n</div>`;
      } else {
        continue; // No body
      }

      const componentName = toCamelCase(folder);
      
      const fileContent = `import React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    <>\n      ${componentContent}\n    </>\n  );\n}\n`;
      
      const componentPath = path.join(destDir, `${componentName}.jsx`);
      fs.writeFileSync(componentPath, fileContent);
      
      // Add to routes
      routes.push({
        name: componentName,
        path: '/' + folder,
        file: `./pages/${componentName}`
      });
      console.log(`Generated ${componentName}.jsx`);
    }
  }
}

// Generate App.jsx
let appJsx = `import React from 'react';\nimport { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';\n\n`;

routes.forEach(route => {
  appJsx += `import ${route.name} from '${route.file}';\n`;
});

appJsx += `\nfunction App() {\n  return (\n    <Router>\n      <Routes>\n`;

// Home route listing all pages
appJsx += `        <Route path="/" element={\n          <div className="min-h-screen bg-slate-50 p-8">\n            <h1 className="text-3xl font-bold mb-6">MedCore Frontend Pages</h1>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n`;
routes.forEach(route => {
  appJsx += `              <Link to="${route.path}" className="p-4 bg-white shadow rounded hover:bg-blue-50 text-blue-600 font-medium">${route.name}</Link>\n`;
});
appJsx += `            </div>\n          </div>\n        } />\n`;

routes.forEach(route => {
  appJsx += `        <Route path="${route.path}" element={<${route.name} />} />\n`;
});

appJsx += `      </Routes>\n    </Router>\n  );\n}\n\nexport default App;\n`;

fs.writeFileSync(path.join(__dirname, 'src/App.jsx'), appJsx);
console.log('Generated App.jsx');
