import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Carousel.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';
import '@/components/ui/Card.js';

class CarouselDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Carousel | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-carousel>
  <ui-carousel-item>
    <ui-card class="bg-gradient-to-br from-blue-500 to-purple-600 h-full flex items-center justify-center text-white text-2xl">
      Slide 1
    </ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="bg-gradient-to-br from-pink-400 to-red-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 2
    </ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="bg-gradient-to-br from-cyan-400 to-blue-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 3
    </ui-card>
  </ui-carousel-item>
</ui-carousel>`;

        const autoplayExample = `<ui-carousel autoplay interval="3000">
  <ui-carousel-item>
    <ui-card class="bg-gradient-to-br from-blue-500 to-purple-600 h-full flex items-center justify-center text-white text-2xl">
      Auto Slide 1
    </ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="bg-gradient-to-br from-pink-400 to-red-500 h-full flex items-center justify-center text-white text-2xl">
      Auto Slide 2
    </ui-card>
  </ui-carousel-item>
</ui-carousel>`;

        const multipleItemsExample = `<ui-carousel items-per-view="3">
  <ui-carousel-item>
    <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 1</ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 2</ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 3</ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 4</ui-card>
  </ui-carousel-item>
  <ui-carousel-item>
    <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 5</ui-card>
  </ui-carousel-item>
</ui-carousel>`;

        const setupExample = `// Import the carousel component
import '@/components/ui/Carousel.js';
import '@/components/ui/Card.js';

class CarouselExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-carousel autoplay interval="3000">
                <ui-carousel-item>
                    <ui-card class="bg-gradient-to-br from-blue-500 to-purple-600 h-full flex items-center justify-center text-white text-2xl">
                        Slide 1
                    </ui-card>
                </ui-carousel-item>
                <ui-carousel-item>
                    <ui-card class="bg-gradient-to-br from-pink-400 to-red-500 h-full flex items-center justify-center text-white text-2xl">
                        Slide 2
                    </ui-card>
                </ui-carousel-item>
                <ui-carousel-item>
                    <ui-card class="bg-gradient-to-br from-cyan-400 to-blue-500 h-full flex items-center justify-center text-white text-2xl">
                        Slide 3
                    </ui-card>
                </ui-carousel-item>
            </ui-carousel>
        \`;
    }
}

customElements.define('ui-carousel-example', CarouselExample);
export default CarouselExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Carousel Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Rotating content display for images or promotions. Perfect for showcasing multiple items in a limited space.
                    </p>
                    
                    <!-- Live Example -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Example</h2>
                        <ui-box class="p-4 shadow rounded-lg border border-gray-200 flex justify-center items-center">
                            <ui-carousel>
                                <ui-carousel-item>
                                    <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 1</ui-card>
                                </ui-carousel-item>
                                <ui-carousel-item>
                                    <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 2</ui-card>
                                </ui-carousel-item>
                                <ui-carousel-item>
                                    <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 3</ui-card>
                                </ui-carousel-item>
                            </ui-carousel>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Usage</h2>
                <p class="mb-4 text-gray-600">Create a carousel by wrapping content in <code>ui-carousel</code> and <code>ui-carousel-item</code> elements.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview">Preview</ui-tab>
                    <ui-tab value="code">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200 flex justify-center items-center">
                      <ui-carousel>
                        <ui-carousel-item>
                          <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 1</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 2</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Slide 3</ui-card>
                        </ui-carousel-item>
                      </ui-carousel>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Auto-play Carousel</h2>
                <p class="mb-4 text-gray-600">Enable automatic rotation with the <code>autoplay</code> attribute and control the interval.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200 flex justify-center items-center">
                      <ui-carousel autoplay interval="3000">
                        <ui-carousel-item>
                            <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Auto Slide 1</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-40 flex items-center justify-center border border-gray-200 rounded-lg shodow-md">Auto Slide 2</ui-card>
                        </ui-carousel-item>
                      </ui-carousel>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${autoplayExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Multiple Items Carousel</h2>
                <p class="mb-4 text-gray-600">Display multiple items at a time using the <code>items-per-view</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200 flex justify-center items-center">
                      <ui-carousel items-per-view="3">
                        <ui-carousel-item>
                            <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 1</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 2</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 3</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 4</ui-card>
                        </ui-carousel-item>
                        <ui-carousel-item>
                          <ui-card class="size-32 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">Item 5</ui-card>
                        </ui-carousel-item>
                      </ui-carousel>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${multipleItemsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the carousel component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the carousel component before using it</li>
                        <li>• Use <code>ui-carousel-item</code> for each slide</li>
                        <li>• Add <code>autoplay</code> attribute for automatic rotation</li>
                        <li>• Use <code>interval</code> to control auto-play timing</li>
                        <li>• Navigation controls and indicators appear automatically</li>
                        <li>• Supports any HTML content in slides</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">ui-carousel Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Attribute</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Default</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">autoplay</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Enable automatic slide rotation</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">interval</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">number</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">5000</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Time between slides in milliseconds</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">show-indicators</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">true</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Show dot indicators</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">show-controls</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">true</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Show navigation buttons</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">items-per-view</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">number</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">1</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Number of items to display at a time</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Carousel Sub-components</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Component</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-carousel-item</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Container for individual slide content</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-carousel-docs-page', CarouselDocsPage);
export default CarouselDocsPage; 