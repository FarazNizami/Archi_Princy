# Changelog - ArchitectPrincy.com Refactor

All notable changes to this project will be documented in this file. This refactor strictly enforces a **Zero Regression Policy** (no visual, layout, or behavioral changes).

## [Unreleased] - Zero Regression Refactor (Conservative Mode)

### CSS (`css/styles.css`)
- **Consolidated `.portfolio-item`**: Merged style overrides from line 1751 (`height`, `aspect-ratio`) and line 1761 (`border-radius`, `overflow`) directly into the main selector at line 643.
- **Removed Duplicate `.portfolio-item img`**: Removed duplicate block at line 1756 (redundant with line 654).
- **Consolidated `.navbar`**: Merged min-height override from line 1765 into the main selector at line 221.
- **Consolidated `.navbar-brand`**: Merged display, alignment, flex, margins, and padding overrides from lines 1769 and 1797 into the main selector at line 233.
- **Consolidated `.navbar-logo`**: Grouped `.navbar-brand img` and `.navbar-logo` definitions near `.navbar-brand` (top of file) and removed duplicate definitions from lines 1780 and 1789.
- **Removed Redundant `.hero-section` and `.hero-video`**: Removed duplicate blocks at lines 1562 and 1568 (redundant with lines 382 and 392).
- **Consolidated `.hero-overlay`**: Merged the gradient overlay property from line 1577 into the main selector at line 402, and removed the duplicate block.
- **Relocated `.hero-section .container`**: Moved the container layout rule from line 1592 to the Hero section (near line 402).
- **Preserved Legacy Code**: Left the legacy hero slider styles (lines 299-380) and other seemingly unused rules fully intact to ensure zero regression risk.

### HTML Files (`index.html`, `about.html`, `contact.html`, `portfolio.html`, `privacy-policy.html`, `disclaimer.html`)
- **Indentation & Spacing**: Standardized HTML document indentation across all pages using clean tabs/spaces for optimal readability.

### Portfolio Page (`portfolio.html`)
- **Fixed Broken Image Reference (G-203 Project)**: Fixed a typo in the image path on line 296 from `"imagesG-203-2.jpeg"` to `"images/G-203-2.jpeg"`.
- **Fixed Broken Image Reference (K-901 Project)**: Fixed a broken file path on line 221 from `"images/K9012.jpg"` to `"images/K-90112.jpg"` to match the actual file present in assets.
- **Kept soho-office-pune-A13.jpeg Reference**: Kept as requested by the user, not removed.

### JavaScript (`js/script.js`)
- **Formatting**: Standardized code formatting and comments for cleanliness.
