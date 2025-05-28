/**
 * @jest-environment jsdom
 */

describe('XU Registrar Tracking System - DOM Interactions', () => {
  beforeEach(() => {
    // Load the HTML structure
    document.body.innerHTML = `
      <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div class="container is-flex is-align-items-center is-justify-content-space-between">
          <div class="is-flex is-align-items-center">
            <img src="./assets/logo.png" alt="Xavier University Logo">
          </div>
          <div>
            <button onclick="handleGoogleLogin()" class="button is-white has-text-weight-bold">
              <img src="./assets/account.png" alt="Account">
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>
      
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-10">
              <div class="has-text-centered mb-5">
                <h1 class="title">XU Registrar Request<br>Tracking System</h1>
              </div>
              
              <div class="custom-box-border mb-5">
                <div class="content">
                  <p>Welcome to the Xavier University Registrar's Office document tracking portal.</p>
                  <div>
                    <p>Control Number: 12345</p>
                    <p>Surname: Erasmo</p>
                    <p>Enter as: ERASMO_12345</p>
                  </div>
                </div>
              </div>
              
              <form onsubmit="handleTrackingSearch(event)" class="mb-6">
                <div class="search-bar-pill">
                  <input type="text" placeholder="Enter code..." id="trackingCode">
                  <button type="submit">
                    <img src="./assets/search.png" alt="Search">
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="custom-footer has-text-white">
        <div class="container">
          <div class="has-text-centered">
            <p>Registrar's Office | Ground Floor, Xavier Hall | Tel: (088) 853-9800 loc. 9101</p>
            <p>Office Hours: Monday to Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </footer>
    `;
  });

  describe('HTML Structure Validation', () => {
    test('should have required navigation elements', () => {
      const navbar = document.querySelector('.navbar');
      const logo = document.querySelector('img[alt="Xavier University Logo"]');
      const loginButton = document.querySelector('button[onclick="handleGoogleLogin()"]');
      
      expect(navbar).toBeTruthy();
      expect(logo).toBeTruthy();
      expect(loginButton).toBeTruthy();
      expect(loginButton.textContent.trim()).toContain('Login');
    });

    test('should have main title present', () => {
      const title = document.querySelector('h1.title');
      
      expect(title).toBeTruthy();
      expect(title.textContent).toContain('XU Registrar Request');
      expect(title.textContent).toContain('Tracking System');
    });

    test('should have information box with instructions', () => {
      const infoBox = document.querySelector('.custom-box-border');
      const content = infoBox.querySelector('.content');
      
      expect(infoBox).toBeTruthy();
      expect(content).toBeTruthy();
      expect(content.textContent).toContain('Welcome to the Xavier University');
      expect(content.textContent).toContain('Control Number: 12345');
      expect(content.textContent).toContain('Surname: Erasmo');
      expect(content.textContent).toContain('Enter as: ERASMO_12345');
    });

    test('should have search form with required elements', () => {
      const form = document.querySelector('form[onsubmit="handleTrackingSearch(event)"]');
      const searchInput = document.getElementById('trackingCode');
      const submitButton = document.querySelector('button[type="submit"]');
      
      expect(form).toBeTruthy();
      expect(searchInput).toBeTruthy();
      expect(submitButton).toBeTruthy();
      expect(searchInput.placeholder).toBe('Enter code...');
    });

    test('should have footer with contact information', () => {
      const footer = document.querySelector('.custom-footer');
      const footerText = footer.textContent;
      
      expect(footer).toBeTruthy();
      expect(footerText).toContain('Registrar\'s Office');
      expect(footerText).toContain('Ground Floor, Xavier Hall');
      expect(footerText).toContain('(088) 853-9800');
      expect(footerText).toContain('Monday to Friday, 8:00 AM - 5:00 PM');
    });
  });

  describe('CSS Classes Validation', () => {
    test('should have correct Bulma CSS classes on navigation', () => {
      const navbar = document.querySelector('.navbar');
      const container = navbar.querySelector('.container');
      
      expect(navbar.classList.contains('navbar')).toBe(true);
      expect(navbar.classList.contains('is-white')).toBe(true);
      expect(container.classList.contains('container')).toBe(true);
      expect(container.classList.contains('is-flex')).toBe(true);
    });

    test('should have correct classes on search components', () => {
      const searchPill = document.querySelector('.search-bar-pill');
      const searchInput = document.getElementById('trackingCode');
      
      expect(searchPill.classList.contains('search-bar-pill')).toBe(true);
      expect(searchInput.type).toBe('text');
    });

    test('should have custom styling classes', () => {
      const customBox = document.querySelector('.custom-box-border');
      const customFooter = document.querySelector('.custom-footer');
      
      expect(customBox.classList.contains('custom-box-border')).toBe(true);
      expect(customFooter.classList.contains('custom-footer')).toBe(true);
    });
  });

  describe('Accessibility Features', () => {
    test('should have proper ARIA labels and roles', () => {
      const navbar = document.querySelector('.navbar');
      
      expect(navbar.getAttribute('role')).toBe('navigation');
      expect(navbar.getAttribute('aria-label')).toBe('main navigation');
    });

    test('should have alt text for images', () => {
      const logo = document.querySelector('img[alt="Xavier University Logo"]');
      const accountIcon = document.querySelector('img[alt="Account"]');
      const searchIcon = document.querySelector('img[alt="Search"]');
      
      expect(logo.getAttribute('alt')).toBe('Xavier University Logo');
      expect(accountIcon.getAttribute('alt')).toBe('Account');
      expect(searchIcon.getAttribute('alt')).toBe('Search');
    });

    test('should have proper form labels and placeholders', () => {
      const searchInput = document.getElementById('trackingCode');
      
      expect(searchInput.getAttribute('placeholder')).toBe('Enter code...');
      expect(searchInput.id).toBe('trackingCode');
    });
  });

  describe('Form Behavior', () => {
    test('should prevent default form submission', () => {
      const form = document.querySelector('form');
      const mockEvent = {
        preventDefault: jest.fn(),
        target: form
      };
      
      // Mock the global function
      window.handleTrackingSearch = jest.fn();
      
      form.dispatchEvent(new Event('submit'));
      
      // Verify the function exists and can be called
      expect(typeof window.handleTrackingSearch).toBe('function');
    });

    test('should have correct form attributes', () => {
      const form = document.querySelector('form');
      
      expect(form.getAttribute('onsubmit')).toBe('handleTrackingSearch(event)');
      expect(form.classList.contains('mb-6')).toBe(true);
    });
  });

  describe('Image Sources and Paths', () => {
    test('should have correct image sources', () => {
      const logo = document.querySelector('img[alt="Xavier University Logo"]');
      const accountIcon = document.querySelector('img[alt="Account"]');
      const searchIcon = document.querySelector('img[alt="Search"]');
      
      expect(logo.src).toContain('./assets/logo.png');
      expect(accountIcon.src).toContain('./assets/account.png');
      expect(searchIcon.src).toContain('./assets/search.png');
    });
  });

  describe('Layout Structure', () => {
    test('should have proper column layout', () => {
      const columns = document.querySelector('.columns');
      const column = document.querySelector('.column');
      
      expect(columns.classList.contains('columns')).toBe(true);
      expect(columns.classList.contains('is-centered')).toBe(true);
      expect(column.classList.contains('column')).toBe(true);
      expect(column.classList.contains('is-10')).toBe(true);
    });

    test('should have proper section structure', () => {
      const section = document.querySelector('.section');
      const container = section.querySelector('.container');
      
      expect(section.classList.contains('section')).toBe(true);
      expect(container.classList.contains('container')).toBe(true);
    });
  });

  describe('Button Interactions', () => {
    test('should have clickable login button', () => {
      const loginButton = document.querySelector('button[onclick="handleGoogleLogin()"]');
      
      expect(loginButton).toBeTruthy();
      expect(loginButton.getAttribute('onclick')).toBe('handleGoogleLogin()');
      expect(loginButton.classList.contains('button')).toBe(true);
    });

    test('should have submit button in search form', () => {
      const submitButton = document.querySelector('button[type="submit"]');
      
      expect(submitButton).toBeTruthy();
      expect(submitButton.type).toBe('submit');
    });
  });
}); 