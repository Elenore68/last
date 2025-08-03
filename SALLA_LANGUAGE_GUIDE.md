# Salla Ready-Made Components Language Guide

## Problem

Salla's ready-made components (cart, profile, login modal, etc.) have their own language system that needs to be synchronized with your site's language.

## Solution

### 1. **Use Salla's Official Language Change Method**

For Salla's ready-made components, you must use Salla's official language change method:

```javascript
// Proper way to change Salla component language
if (window.salla && window.salla.language) {
  // Change the language
  window.salla.language.change("ar"); // or 'en'

  // Update the current language property
  window.salla.language.current = "ar";

  // Dispatch Salla's internal event
  if (window.salla.event) {
    window.salla.event.dispatch("language::changed", {
      language: "ar",
      code: "ar",
    });
  }
}
```

### 2. **Components That Need Salla Language Sync**

- **Cart Components**: `salla-cart-summary`, cart modals
- **Profile Components**: `salla-user-menu`, profile pages
- **Login Components**: `salla-login-modal`
- **Offer Components**: `salla-offer-modal`
- **Any other `salla-*` components**

### 3. **How It Works Now**

When you click the language toggle in the header:

1. **Header Language Switch** → Updates site language
2. **Salla Language Change** → Updates Salla components
3. **Event Dispatching** → Notifies all components
4. **Component Updates** → Cart, profile, etc. change language

### 4. **Testing the Language Change**

To test if it's working:

1. **Set site to English**
2. **Click cart/profile icon**
3. **Check if the modal/popup shows in English**
4. **Switch to Arabic**
5. **Click cart/profile icon again**
6. **Check if the modal/popup shows in Arabic**

### 5. **Debug Information**

Check browser console for these messages:

```
Header: Calling Salla official language change
Header: Salla language changed to: ar
Master Layout: Salla language system initialized
```

### 6. **Common Issues and Solutions**

#### Issue: Components still show in wrong language

**Solution**: Make sure Salla SDK is loaded before changing language

#### Issue: Language doesn't persist

**Solution**: Check that localStorage is being updated correctly

#### Issue: Some components don't update

**Solution**: Wait for Salla SDK to fully load before changing language

### 7. **Manual Testing**

You can manually test the language change in browser console:

```javascript
// Test Salla language change
if (window.salla && window.salla.language) {
  window.salla.language.change("ar");
  console.log("Language changed to Arabic");
}
```

### 8. **Files Modified**

1. **`src/views/components/header/header.twig`** - Updated to use Salla's official method
2. **`src/views/layouts/master.twig`** - Added Salla SDK initialization
3. **All components** - Now properly synchronized

### 9. **Expected Behavior**

✅ **Cart Icon Click** → Cart modal opens in correct language
✅ **Profile Icon Click** → Profile menu shows in correct language  
✅ **Login Modal** → Login form displays in correct language
✅ **Offer Modal** → Offers display in correct language
✅ **All Salla Components** → Synchronized with site language

The key is using Salla's official `window.salla.language.change()` method instead of trying to override the components directly.
