# Paradise Nursery Shopping Application

A responsive React shopping application for an online plant shop. Browse 18 unique plants in three collections, add plants to a Redux shopping cart, and manage quantities and totals.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` for a production build, `npm run preview` to preview it, and `npm test` to check the catalog and cart calculations.

## Features

- Landing page with Paradise Nursery branding, a background image, company information, and a Get Started button.
- Air-purifying, aromatic, and easy-care collections, with six distinct plants each.
- Product thumbnails, names, descriptions, USD prices, and category filters.
- Add to Cart buttons disable while the plant is in the cart and re-enable after removal.
- Shared Home, Plants, and Cart navigation with a live total quantity badge.
- Cart thumbnails, unit prices, item subtotals, quantity controls, deletion, and total amount.
- Decreasing quantity to zero removes the item.
- Checkout displays a Coming Soon message; Continue Shopping returns to the catalog.
- Responsive layouts, descriptive button labels, keyboard focus indicators, and live cart updates.

## Implementation

React, Redux Toolkit, React Redux, and Vite. Hash navigation works on static hosting without server routing configuration. Cart state lasts for the current page session; refreshing resets it. Remote Unsplash photos are illustrative plant imagery, and Google Fonts require an internet connection. System font and decorative image fallbacks support the product listing if those services are unavailable. This is a course demonstration with no payment processing.

## Assignment submission links

These links target the `main` branch and become available after committing and pushing the project to GitHub.

| Task | File | GitHub URL |
| --- | --- | --- |
| 1 | README.md | [README.md](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/README.md) |
| 2 | AboutUs.jsx | [AboutUs.jsx](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/components/AboutUs.jsx) |
| 3 | App.css | [App.css](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/App.css) |
| 4 | App.jsx | [App.jsx](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/App.jsx) |
| 5 | CartSlice.jsx | [CartSlice.jsx](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/store/CartSlice.jsx) |
| 6 | ProductList.jsx | [ProductList.jsx](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/components/ProductList.jsx) |
| 7 | CartItem.jsx | [CartItem.jsx](https://github.com/mpizano/DevelopingFront-EndAppswithReact/blob/main/src/components/CartItem.jsx) |

## Manual acceptance check

1. Open Home and select Get Started.
2. Confirm all three categories contain six products; try each category filter.
3. Add two different plants. Confirm their buttons disable and the cart badge reads 2.
4. Open Cart and increase a quantity. Confirm the badge, item subtotal, and total change.
5. Decrease to zero and delete another item. Confirm the empty state and re-enabled product buttons.
6. Add a plant again, select Checkout, and confirm Coming Soon appears.
7. Select Continue Shopping, then Home. Check navigation and repeat at a narrow viewport.
