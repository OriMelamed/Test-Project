# GitHub Copilot Instructions for Figma Integration Template

## Project Context
This is a modern, responsive web template specifically designed for easy integration with Figma designs. The project focuses on clean, maintainable code that serves as a foundation for converting Figma designs into production-ready web applications.

## Project Structure
- `index.html` - Main HTML structure with semantic markup
- `styles.css` - Modern CSS with responsive design, animations, and Figma-ready styling
- `script.js` - Interactive JavaScript with smooth animations and Figma integration helpers
- `package.json` - Project configuration and scripts
- `README.md` - Documentation and setup instructions

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Maintain clean, accessible markup with proper ARIA attributes when needed
- Use meaningful class names that reflect component purpose
- Keep structure flexible for easy Figma component integration
- Prefer BEM methodology for CSS classes when adding new components

### CSS
- Follow mobile-first responsive design principles
- Use CSS Grid and Flexbox for layouts
- Maintain consistent spacing using rem/em units
- Use CSS custom properties (variables) for colors, fonts, and spacing
- Include smooth transitions and hover effects
- Keep gradients and modern styling consistent with existing design
- Optimize for Figma design token integration

### JavaScript
- Write vanilla JavaScript (ES6+) without external dependencies
- Use modern JavaScript features (arrow functions, template literals, destructuring)
- Implement smooth animations and transitions
- Create reusable utility functions
- Add event listeners responsibly with proper cleanup
- Include console logging for development debugging

## Design System Preferences
- **Colors**: Use gradient backgrounds (`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`)
- **Typography**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`)
- **Spacing**: Consistent rem-based spacing (1rem, 2rem, 4rem)
- **Border Radius**: Rounded corners (8px, 12px)
- **Shadows**: Subtle box-shadows for depth
- **Animations**: Smooth transitions (0.3s ease)

## Figma Integration Focus
When suggesting code:
- Prioritize components that are easy to replace with Figma exports
- Create placeholder areas clearly marked for design integration
- Use CSS structures that mirror common Figma component patterns
- Include utility functions for common Figma-to-code workflows
- Suggest ways to integrate Figma design tokens
- Consider responsive breakpoints that work well with Figma designs

## Component Patterns
- **Cards**: Use `.feature-card` pattern with hover effects
- **Buttons**: Include `.cta-button` styling with gradients and hover states
- **Navigation**: Responsive nav with mobile-friendly patterns
- **Hero Sections**: Flexible hero layout with image/content splits
- **Grid Layouts**: Use CSS Grid for responsive component layouts

## Performance Guidelines
- Minimize CSS and JavaScript bundle sizes
- Use efficient selectors and avoid overly specific CSS
- Implement lazy loading for images when adding media
- Optimize animations for 60fps performance
- Use modern CSS features that don't require polyfills

## Accessibility Requirements
- Maintain proper heading hierarchy (h1, h2, h3)
- Include focus states for interactive elements
- Ensure sufficient color contrast ratios
- Use semantic markup for screen readers
- Include alt text for images and icons

## Browser Support
- Target modern browsers (Chrome, Firefox, Safari, Edge)
- Use CSS Grid and Flexbox freely
- Avoid Internet Explorer specific code
- Test responsive design on mobile devices

## Naming Conventions
- **CSS Classes**: Use kebab-case (`.hero-section`, `.cta-button`)
- **JavaScript Variables**: Use camelCase (`heroSection`, `ctaButton`)
- **Files**: Use kebab-case for new files (`component-name.css`)
- **IDs**: Use camelCase when necessary (`heroImage`)

## When Adding New Features
1. Maintain consistency with existing design patterns
2. Consider how new components will integrate with Figma designs
3. Add proper documentation in comments
4. Include responsive behavior for all screen sizes
5. Test hover and focus states
6. Ensure accessibility compliance

## Common Tasks
- **Adding Components**: Create modular, reusable CSS classes
- **Styling Forms**: Use consistent input styling with proper validation states
- **Image Integration**: Prepare image containers optimized for Figma exports
- **Animation**: Use CSS transitions primarily, JavaScript for complex interactions
- **Layout Changes**: Maintain responsive grid patterns

## Testing Considerations
- Test on multiple screen sizes (mobile, tablet, desktop)
- Verify smooth animations on different devices
- Check color contrast and accessibility
- Validate HTML markup
- Test with actual Figma exported content

## Documentation Style
- Include clear comments for complex CSS rules
- Document JavaScript functions with JSDoc format
- Explain responsive breakpoint choices
- Note any Figma-specific integration points
