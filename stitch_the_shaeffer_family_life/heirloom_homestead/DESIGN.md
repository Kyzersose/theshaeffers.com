# Design System Documentation: High-End Editorial Homestead

## 1. Overview & Creative North Star
**Creative North Star: The Modern Archivist**

This design system moves away from the clinical, rigid grids of traditional family blogs to embrace the "Modern Archivist" aesthetic. It is a digital scrapbook that feels like a premium editorial magazine—intentional, layered, and deeply personal. We are blending the grit and warmth of a homestead (earthy textures and tones) with the sophisticated clarity of modern design. 

The system rejects the "template" look. We achieve this through **intentional asymmetry**, where images may bleed off-edge or overlap text containers, and a **high-contrast typography scale** that treats words as a visual element, not just a carrier of information. The result is a nurturing, faith-centered digital home that feels as adventurous as a family road trip and as grounded as a Sunday dinner.

---

## 2. Colors
Our palette is rooted in the "Shaeffer" landscape: deep forest greens, sun-baked terracotta, and the expansive sky.

*   **Primary (`#37553d`)**: Our "Forest Canopy." Used for primary actions and deep-toned backgrounds to establish authority and growth.
*   **Secondary (`#9d4224`)**: Our "Terracotta Hearth." Used for accents that require warmth and attention, providing a soulful contrast to the greens.
*   **Tertiary (`#28536b`)**: Our "Horizon Blue." Reserved for moments of peace, spiritual reflection, or adventurous call-outs.
*   **Surface & Background (`#fdf9f3`)**: Our "Cream Canvas." A soft, off-white that prevents eye strain and feels more organic than pure white.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Tonal Transitions:** Using subtle variations in the cream palette to distinguish content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a physical desk of stacked fine paper. 
*   **Deep Nesting:** Place a `surface-container-lowest` card inside a `surface-container-high` section to create natural, soft depth.
*   **Glass & Gradient Rule:** For floating navigation or modal overlays, use **Glassmorphism**. Apply a semi-transparent `surface` color with a `backdrop-filter: blur(20px)`. 
*   **Signature Textures:** For Hero sections, use a subtle linear gradient from `primary` to `primary-container` at a 145-degree angle. This adds a "velvet" depth that flat color cannot replicate.

---

## 3. Typography
The typography is a dialogue between the tradition of the past and the clarity of the future.

*   **Display & Headlines (Newsreader):** A sophisticated, editorial serif. It conveys the "Classic" in Classic-Modern. Use `display-lg` for impactful storytelling and `headline-md` for section breaks.
*   **Body & Labels (Plus Jakarta Sans):** A contemporary sans-serif that provides high readability. It feels "Modern" and "Clean."
*   **The Identity Play:** Use high-contrast sizing. A `display-lg` headline should often sit near `body-sm` metadata to create an "Editorial Sprawl" that feels custom and expensive.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We avoid the "floating box" look of 2010-era design.

*   **The Layering Principle:** Instead of shadows, use the Surface-Container tiers. A `surface-container-lowest` (pure white) element sitting on a `surface-dim` background creates a crisp, "lifted" feel without a single shadow.
*   **Ambient Shadows:** If a floating element (like a FAB or Popover) is required, use an "Ambient Shadow."
    *   **Blur:** 40px+
    *   **Opacity:** 6%
    *   **Color:** Use a tinted version of `on-surface` (`#1c1c18`) to mimic natural light filtered through a room.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a container rather than a hard cage.

---

## 5. Components

### Buttons
*   **Primary:** Filled with `primary`, text in `on-primary`. Use `rounded-md` (0.75rem). No shadows.
*   **Secondary:** Filled with `secondary-container`, text in `on-secondary-container`. This is for "fun" or "adventurous" actions.
*   **Tertiary:** Ghost style. No background. `primary` text weight should be semi-bold.

### Cards & Lists
*   **Constraint:** **Divider lines are forbidden.** 
*   **Separation:** Use vertical white space (80px–120px between major sections) or a shift from `surface` to `surface-container-low`.
*   **The "Polaroid" Card:** For family photos, use `surface-container-lowest` with a wide internal padding (24px) and a `rounded-lg` corner.

### Inputs & Forms
*   **Styling:** Use `surface-container-highest` for the input field background with a "Ghost Border." 
*   **Focus State:** Transition the ghost border to 100% opacity of the `primary` color. 

### Custom Component: The "Heirloom Ribbon"
A thin, horizontal element using a gradient of `secondary` to `secondary-container` used to highlight faith-based quotes or "Shaeffer Tips." It should slightly overlap the edge of its container to break the grid.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** If a section feels crowded, double the padding. This system breathes.
*   **Asymmetric Grids:** Align a heading to the left but a sub-headline to the right of a 2-column split.
*   **Intentional Overlaps:** Let an image with a `rounded-xl` corner slightly overlap the header of the next section.

### Don't:
*   **Don't use 100% Black:** Always use `on-surface` (`#1c1c18`) for text to maintain the "warm" homestead feel.
*   **Don't use "Default" Shadows:** Never use the standard CSS `box-shadow: 0 2px 4px rgba(0,0,0,0.5)`. It kills the premium editorial vibe.
*   **Don't use Center-Align for long text:** Keep long-form "Archives" (blog posts) left-aligned for that modern editorial readability.
*   **Don't Box Everything:** Let content flow. The "Modern Archivist" doesn't need to trap every photo in a border; let the cream background be the stage.