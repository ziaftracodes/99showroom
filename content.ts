
export const siteContent = {
  header: {
    title: '99Showroom',
    subtitle: 'by CometNova',
    nav: {
      products: 'Products',
      about: 'About',
      join: 'Join',
    },
  },
  hero: {
    title: '99Showroom',
    subtitle: 'Where Drops Never Last',
  },
  featuredProduct: {
    bestseller: 'Best Seller',
    viewDetails: 'View Details',
  },
  productShowcase: {
    title: 'The Collection',
    clothing: 'Clothing',
    tech: 'Tech',
  },
  about: {
    title: 'Our Philosophy',
    p1: "99Showroom is not a store. It's an idea. A curated space for objects that exist at the intersection of art and utility. Each piece is a meditation on form and function, designed to be desired but not possessed.",
    p2: 'We believe in the beauty of the temporary, the allure of the unattainable. This is a gallery for dreams, a catalog of concepts where the only thing for sale is inspiration. Welcome to the showroom at the edge of existence.',
  },
  joinDrop: {
    title: 'Join the Drop',
    description: 'Enter the void. Get notified about future concepts and fleeting drops. No spam, just scarcity.',
    placeholder: 'your.email@example.com',
    submit: 'Submit',
    successMessage: 'You are on the list. Maybe.',
    errorMessage: 'A valid email is required.',
  },
  footer: {
    contactText: "Love this site? Want one for your brand? <br /> We're CometNova. Let's create something beautiful together.",
    contactButton: 'Contact Us',
    copyright: `© ${new Date().getFullYear()} 99Showroom. All rights reserved. Concept only.`,
    email: 'hello@cometnova.com',
    subject: 'Inquiry from 99Showroom',
    body: "I love the 99Showroom website and I'm interested in discussing a project. Let's talk!",
  },
  tosGate: {
    greeting: 'Welcome, Visitor.',
    title: 'Terms of Viewing',
    description: 'By entering 99Showroom, you acknowledge that this is a conceptual art project and not an actual retail store. Products displayed are not for sale.',
    checkboxLabel: 'I understand and agree to the terms.',
    buttonText: 'Enter Showroom',
  },
  productModal: {
    color: 'Color',
    size: 'Size',
    addToCart: 'Add to Cart',
    added: 'Added ✓',
    youMightAlsoLike: 'You Might Also Like',
  },
  cartModal: {
    title: 'Your Cart',
    empty: 'Your cart is empty.',
    total: 'Total',
    buyNow: 'Buy Now',
    outOfStock: 'All items are currently out of stock.',
  },
  socialShare: {
    share: 'Share',
    shareText: (productName: string) => `Check out the ${productName} concept at 99Showroom!`,
    copied: 'Copied!',
  }
};