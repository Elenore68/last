// Product Router for Custom Product Pages
class ProductRouter {
  constructor() {
    this.routes = {
      '/products/iphone-case': {
        template: 'iphone-case',
        title: 'غلاف آيفون 15 برو – أسود',
        type: 'iphone'
      },
      '/products/samsung-case': {
        template: 'samsung-case',
        title: 'غلاف سامسونج S24 – أسود',
        type: 'samsung'
      }
    };
    
    this.init();
  }
  
  init() {
    // Check if current path matches our custom routes
    const currentPath = window.location.pathname;
    const route = this.routes[currentPath];
    
    if (route) {
      this.loadProductPage(route);
    }
  }
  
  loadProductPage(route) {
    // Update page title
    document.title = route.title;
    
    // Load the appropriate template
    this.loadTemplate(route.template);
  }
  
  loadTemplate(templateName) {
    // This would typically make an AJAX request to load the template
    // For now, we'll just redirect to the appropriate page
    const templateUrl = `/products/${templateName}`;
    
    // If we're not already on the correct page, redirect
    if (window.location.pathname !== templateUrl) {
      window.location.href = templateUrl;
    }
  }
  
  // Static method to navigate to a product
  static navigateToProduct(productType) {
    const url = productType === 'iphone' ? '/products/iphone-case' : '/products/samsung-case';
    window.location.href = url;
  }
}

// Initialize router when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  new ProductRouter();
});

// Make router available globally
window.ProductRouter = ProductRouter; 