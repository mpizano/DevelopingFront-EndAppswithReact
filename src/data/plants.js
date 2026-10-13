const image = (name) => `https://images.unsplash.com/${name}?auto=format&fit=crop&w=700&q=80`;
const photos = {
  leafy: image('photo-1501004318641-b39e6451bec6'),
  monstera: image('photo-1545241047-6083a3684587'),
  succulent: image('photo-1459411621453-7b03977f4bfc'),
  potted: image('photo-1485955900006-10f4d324d411'),
  green: image('photo-1497250681960-ef046c08a56e'),
  garden: image('photo-1416879595882-3373a0480b5b'),
};
export const categories = [
  { name: 'Air-purifying plants', description: 'Fresh foliage for a space that feels alive.', plants: [
    ['snake', 'Snake Plant', 22, 'Upright sculptural leaves; happy in indirect light.', 'potted'],
    ['peace', 'Peace Lily', 28, 'Glossy leaves and elegant white flowers. Keep soil lightly moist.', 'leafy'],
    ['spider', 'Spider Plant', 18, 'Arching striped leaves with playful baby plantlets.', 'green'],
    ['pothos', 'Golden Pothos', 16, 'Golden trailing leaves that brighten shelves and hanging pots.', 'leafy'],
    ['rubber', 'Rubber Plant', 32, 'Bold, glossy foliage for a sunny corner with filtered light.', 'monstera'],
    ['boston', 'Boston Fern', 24, 'Soft, feathery fronds that enjoy humidity and gentle light.', 'green'],
  ] },
  { name: 'Aromatic plants', description: 'Bring a little fragrance to your everyday rituals.', plants: [
    ['lavender', 'Lavender', 20, 'Fragrant purple flowers; give it plenty of sunshine.', 'garden'],
    ['rosemary', 'Rosemary', 18, 'A fragrant evergreen herb for a bright windowsill.', 'garden'],
    ['mint', 'Mint', 14, 'Refreshing aromatic leaves; water regularly.', 'green'],
    ['basil', 'Sweet Basil', 14, 'Tender fragrant leaves that thrive in warm, bright spaces.', 'leafy'],
    ['jasmine', 'Jasmine', 26, 'Delicate scented blooms with a climbing habit.', 'garden'],
    ['lemon', 'Lemon Balm', 16, 'Soft leaves with a gentle citrus fragrance.', 'green'],
  ] },
  { name: 'Easy-care plants', description: 'Low-maintenance companions, full of character.', plants: [
    ['zz', 'ZZ Plant', 26, 'Waxy green foliage; let the soil dry between waterings.', 'potted'],
    ['aloe', 'Aloe Vera', 18, 'A sculptural succulent that loves light and infrequent watering.', 'succulent'],
    ['jade', 'Jade Plant', 20, 'Plump oval leaves on a miniature tree-like form.', 'succulent'],
    ['echeveria', 'Echeveria', 12, 'A compact rosette succulent for a sunny spot.', 'succulent'],
    ['monstera', 'Monstera', 35, 'Iconic split leaves; give it space and bright indirect light.', 'monstera'],
    ['castiron', 'Cast Iron Plant', 30, 'Deep green leaves and a resilient, easygoing nature.', 'potted'],
  ] },
];
export const plants = categories.flatMap(category => category.plants.map(([id, name, price, description, photo]) => ({ id, name, price, description, image: photos[photo], category: category.name })));
export const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
