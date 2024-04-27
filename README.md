# Dropdown-Menu-Toggler

Install with npm:

```bash
npm install toggle-dropdown-list
```

# How to use:

- Create hoverable element structure in **HTML**:

```html
<div>
  <button>Hover Over Me</button>
  <ul>
    <li><a href="#">Link One</a></li>
    <li><a href="#">Link Two</a></li>
    <li><a href="#">Link Three</a></li>
  </ul>
</div>
```

Javascript:

```javascript
// Supports ES6 module syntax
import toggleDropdown from "toggle-dropdown-list";

const button = document.querySelector("button");
toggleDropdown(button);
```
