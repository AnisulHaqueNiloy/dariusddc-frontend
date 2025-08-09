# Routing Structure

This Next.js project now has a properly organized routing structure with two main layouts:

## Layout Hierarchy

### 1. Root Layout (`src/app/layout.tsx`)
- **Purpose**: Base HTML structure and global styles
- **Applies to**: ALL routes in the application
- **Contains**: 
  - HTML document structure
  - Font configurations (Geist fonts)
  - Global CSS imports
  - Basic body styling

### 2. Main Layout (`src/app/(main)/layout.tsx`)
- **Purpose**: Public-facing pages with navigation and footer
- **Applies to**: All routes in the `(main)` route group
- **Contains**:
  - Navbar component
  - Footer component
  - Main site navigation

### 3. Admin Dashboard Layout (`src/app/admindashboard/layout.tsx`)
- **Purpose**: Admin interface with sidebar navigation
- **Applies to**: All `/admindashboard/*` routes
- **Contains**:
  - Admin sidebar navigation
  - Dashboard-specific styling
  - Mobile menu functionality

## Route Structure

```
src/app/
├── layout.tsx                    # Root layout (HTML structure)
├── (main)/                       # Main site route group
│   ├── layout.tsx               # Main layout (Navbar + Footer)
│   ├── page.tsx                 # Homepage (/)
│   ├── about/
│   │   └── page.tsx            # /about
│   ├── contact/
│   │   └── page.tsx            # /contact
│   ├── login/
│   │   └── page.tsx            # /login
│   ├── register/
│   │   └── page.tsx            # /register
│   ├── checkout/
│   │   └── page.tsx            # /checkout
│   ├── profile-details-page/
│   │   └── page.tsx            # /profile-details-page
│   └── (userprofile)/           # Nested user profile routes
│       ├── layout.tsx           # User profile sidebar layout
│       └── (routes)/
│           ├── changepassword/  # /changepassword
│           ├── editprofile/     # /editprofile
│           ├── myraffles/       # /myraffles
│           ├── purchasecoin/    # /purchasecoin
│           └── wishlist/        # /wishlist
└── admindashboard/              # Admin route group
    ├── layout.tsx               # Admin layout (Sidebar)
    ├── page.tsx                 # /admindashboard (Dashboard home)
    ├── dashboard/
    │   └── page.tsx            # /admindashboard/dashboard
    ├── raffles/
    │   └── page.tsx            # /admindashboard/raffles
    ├── coin-management/
    │   └── page.tsx            # /admindashboard/coin-management
    ├── create-raffles/
    │   └── page.tsx            # /admindashboard/create-raffles
    └── user/
        └── page.tsx            # /admindashboard/user
```

## Layout Behavior

1. **Main Site Pages** (`/`, `/about`, `/contact`, etc.):
   - Uses Root Layout + Main Layout
   - Shows Navbar and Footer
   - Public-facing design

2. **User Profile Pages** (`/changepassword`, `/editprofile`, etc.):
   - Uses Root Layout + Main Layout + User Profile Layout
   - Shows Navbar, Footer, AND user profile sidebar
   - Triple-nested layout structure

3. **Admin Dashboard Pages** (`/admindashboard/*`):
   - Uses Root Layout + Admin Layout only
   - Shows admin sidebar navigation
   - No main site navbar/footer

## Benefits

- **Separation of Concerns**: Different layouts for different sections
- **Clean URLs**: Route groups don't affect URL structure
- **Maintainable**: Each layout manages its own navigation and styling
- **Flexible**: Easy to add new sections with their own layouts
