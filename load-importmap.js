// Load import map from external JSON file using synchronous request
// This ensures the import map is available before any ES modules are processed

try {
    // Use synchronous XMLHttpRequest to load import map during page load
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/importmap.json', false); // false = synchronous
    xhr.send();
    
    if (xhr.status === 200) {
        const importMap = JSON.parse(xhr.responseText);
        document.write(`<script type="importmap">${JSON.stringify(importMap, null, 4)}<\/script>`);
        console.log('✅ Import map loaded from importmap.json');
    } else {
        throw new Error(`HTTP ${xhr.status}`);
    }
    
} catch (error) {
    console.warn('⚠️ Could not load importmap.json, using fallback:', error);
    
    // Fallback import map
    document.write(`<script type="importmap">
{
    "imports": {
        "@/": "/src/",
        "@/core/": "/src/core/",
        "@/components/": "/src/components/",
        "@/app/": "/src/app/",
        "@/utils/": "/src/utils/",
        "@/assets/": "/src/assets/"
    }
}
<\/script>`);
} 