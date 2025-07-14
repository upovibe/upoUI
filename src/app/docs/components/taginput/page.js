import App from '@/core/App.js';
import '@/components/ui/TagInput.js';

class TagInputDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'TagInput Component | UPO UI';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">TagInput Component</h1>
                <p class="text-lg text-gray-600 mb-6">A tag input component that allows users to add and remove tags with validation.</p>
                
                <div class="space-y-8">
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Basic Tag Input</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Default Tag Input</label>
                                <ui-tag-input placeholder="Add tags..."></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">With Initial Tags</label>
                                <ui-tag-input value="JavaScript,React,Vue.js" placeholder="Add skills"></ui-tag-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Tag Limits</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Minimum 2, Maximum 5 Tags</label>
                                <ui-tag-input min-tags="2" max-tags="5" placeholder="Add at least 2 skills"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Maximum 3 Tags</label>
                                <ui-tag-input max-tags="3" placeholder="Add up to 3 interests"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Required Tags (Minimum 1)</label>
                                <ui-tag-input min-tags="1" placeholder="Add at least one tag"></ui-tag-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Validation States</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Success State</label>
                                <ui-tag-input status="success" value="Valid,Complete" placeholder="Success validation"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Warning State</label>
                                <ui-tag-input status="warning" value="Warning,State" placeholder="Warning validation"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Error State</label>
                                <ui-tag-input status="error" placeholder="Error validation"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Info State</label>
                                <ui-tag-input status="info" value="Info,State" placeholder="Info validation"></ui-tag-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Usage Instructions</h2>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-gray-900 mb-2">How to use:</h3>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Type text and press <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Enter</kbd> or <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">,</kbd> to add a tag</li>
                                <li>• Click the <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">×</kbd> button to remove a tag</li>
                                <li>• Press <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Backspace</kbd> when input is empty to remove the last tag</li>
                                <li>• Duplicate tags are automatically prevented</li>
                                <li>• Tags are trimmed of whitespace</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Examples</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Skills Input</label>
                                <ui-tag-input min-tags="1" max-tags="8" placeholder="Add your skills (1-8 tags)"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Interests Input</label>
                                <ui-tag-input max-tags="5" placeholder="Add your interests (max 5)"></ui-tag-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Keywords Input</label>
                                <ui-tag-input value="web,development,frontend" placeholder="Add keywords"></ui-tag-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-tag-input-docs-page', TagInputDocsPage);
export default TagInputDocsPage; 