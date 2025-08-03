# Footer Language Switching Fix

## Problem

The footer component was not properly switching languages and images were not displaying correctly for Arabic and English versions.

## Solution

### 1. Fixed Image Paths

- **English version**: Uses `public/images/footeren.png`
- **Arabic version**: Uses `public/images/footerar.png`
- **Logo**: Uses `public/images/footerlogo.png` for both languages

### 2. Improved Language Detection

The footer now properly detects the current language from multiple sources:

- URL parameter (`?lang=ar` or `?lang=en`)
- LocalStorage (`currentLanguage`)
- DOM language attribute
- User language code from server

### 3. Enhanced Event Handling

The footer now listens for multiple language change events:

- `languageChanged` - Custom event dispatched by header
- `salla:language:changed` - Salla-specific language change event
- URL changes (when language changes via URL parameter)

### 4. Fixed Header Integration

Updated the header component to properly dispatch language change events that the footer can listen to.

## Files Modified

### 1. `src/views/components/footer/footer.twig`

- Added proper image path handling with `FOOTER_IMAGES` object
- Improved language detection logic
- Enhanced event listeners for language changes
- Fixed content alignment for RTL/LTR languages
- Added proper CSS classes for targeting elements

### 2. `src/views/components/header/header.twig`

- Improved `switchLanguage()` function
- Added proper event dispatching for footer communication
- Enhanced language toggle text updates
- Added initialization on DOM load

### 3. `test-footer.html` (Test File)

- Created standalone test file to verify functionality
- Includes manual language switching controls
- Shows current language status

## How to Test

### Method 1: Using the Test File

1. Open `test-footer.html` in a web browser
2. Use the test controls in the top-left corner to switch languages
3. Verify that:
   - Text changes to Arabic/English
   - Background image changes
   - Content alignment adjusts for RTL/LTR
   - Logo remains the same

### Method 2: Using the Live Site

1. Navigate to your site
2. Click the language toggle in the header (Ar/En)
3. Verify that the footer updates accordingly
4. Check browser console for debug messages

## Debug Information

The footer script includes comprehensive logging:

- Language detection sources
- Image path updates
- Text content changes
- Event handling

Check browser console for messages starting with "Footer:" to debug issues.

## Key Features

1. **Automatic Language Detection**: Detects language from URL, localStorage, and DOM
2. **Image Switching**: Automatically switches background images based on language
3. **Text Direction**: Properly handles RTL/LTR text direction
4. **Content Alignment**: Adjusts content positioning for different languages
5. **Event Communication**: Header and footer communicate via custom events
6. **Fallback Support**: Multiple fallback methods for language detection

## Browser Compatibility

- Modern browsers with ES6 support
- LocalStorage for language persistence
- CustomEvent API for event dispatching
- CSS Grid/Flexbox for layout

## Notes

- The footer script prevents multiple executions using `window.footerScriptLoaded`
- Image paths are stored in a `FOOTER_IMAGES` object for easy maintenance
- All language-specific text uses `data-ar` and `data-en` attributes
- The script includes test buttons for manual language switching (in development)
