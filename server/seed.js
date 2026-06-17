import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  mainImg: { type: String },
  carousel: { type: Array },
  sizes: { type: Array },
  category: { type: String },
  gender: { type: String },
  price: { type: Number },
  discount: { type: Number }
});

const adminSchema = new mongoose.Schema({
  banner: { type: String },
  categories: { type: Array }
});

const Product = mongoose.model('products', productSchema);
const Admin = mongoose.model('admin', adminSchema);

const products = [
  // ==================== MOBILES ====================
  {
    title: "iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max with 256GB storage, A16 Bionic chip, 48MP camera, and Dynamic Island display. Experience the next level of performance.",
    mainImg: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500",
      "https://images.unsplash.com/photo-1574755393849-623942496936?w=500"
    ],
    sizes: ["64GB", "128GB", "256GB", "512GB"],
    category: "Mobiles",
    gender: "Unisex",
    price: 134900,
    discount: 8
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    description: "Samsung Galaxy S23 Ultra with 200MP camera, S Pen support, 5000mAh battery, and 12GB RAM. The ultimate Android flagship.",
    mainImg: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500",
      "https://images.unsplash.com/photo-1546916071-7a6dc4e01040?w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    ],
    sizes: ["128GB", "256GB", "512GB"],
    category: "Mobiles",
    gender: "Unisex",
    price: 124999,
    discount: 12
  },
  {
    title: "OnePlus 11 5G",
    description: "OnePlus 11 5G with Snapdragon 8 Gen 2, 100W fast charging, 16GB RAM and 50MP Hasselblad triple camera. Speed at its finest.",
    mainImg: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
      "https://images.unsplash.com/photo-1598327105854-c8674faddf79?w=500",
      "https://images.unsplash.com/photo-1551355738-1875e67048c8?w=500"
    ],
    sizes: ["128GB", "256GB"],
    category: "Mobiles",
    gender: "Unisex",
    price: 56999,
    discount: 15
  },
  {
    title: "Redmi Note 12 Pro",
    description: "Redmi Note 12 Pro with 200MP camera, 5000mAh battery, 67W turbocharging, and AMOLED display. Premium mid-range experience.",
    mainImg: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=500",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
      "https://images.unsplash.com/photo-1574755393849-623942496936?w=500"
    ],
    sizes: ["128GB", "256GB"],
    category: "Mobiles",
    gender: "Unisex",
    price: 26999,
    discount: 18
  },

  // ==================== ELECTRONICS ====================
  {
    title: "Sony 65\" 4K OLED TV",
    description: "Sony 65 inch 4K OLED TV with HDR, Dolby Atmos sound, and Google TV smart platform. Cinematic experience at home.",
    mainImg: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500",
      "https://images.unsplash.com/photo-1532528867795-7a6c91cdacae?w=500"
    ],
    sizes: ["55 inch", "65 inch", "75 inch"],
    category: "Electronics",
    gender: "Unisex",
    price: 189999,
    discount: 20
  },
  {
    title: "Apple MacBook Air M2",
    description: "Apple MacBook Air with M2 chip, 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD. Thin, light, and incredibly powerful.",
    mainImg: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500"
    ],
    sizes: ["8GB RAM", "16GB RAM"],
    category: "Electronics",
    gender: "Unisex",
    price: 114900,
    discount: 10
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise canceling wireless headphones with 30-hour battery life, auto noise canceling optimizer and multi-device pairing.",
    mainImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    ],
    sizes: ["One Size"],
    category: "Electronics",
    gender: "Unisex",
    price: 29990,
    discount: 25
  },
  {
    title: "Canon EOS R50 Camera",
    description: "Canon EOS R50 mirrorless camera with 24.2MP sensor, 4K video, AI subject tracking, and compact lightweight design for creators.",
    mainImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
      "https://images.unsplash.com/photo-1490750967868-88df5691cc45?w=500"
    ],
    sizes: ["Body Only", "With 18-45mm Lens"],
    category: "Electronics",
    gender: "Unisex",
    price: 72990,
    discount: 12
  },

  // ==================== FASHION ====================
  {
    title: "Men's Slim Fit Jeans",
    description: "Premium quality slim fit denim jeans for men. Made with stretch denim fabric for comfort and style. Available in multiple washes.",
    mainImg: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    category: "Fashion",
    gender: "Men",
    price: 1999,
    discount: 40
  },
  {
    title: "Women's Floral Summer Dress",
    description: "Beautiful floral print summer dress for women. Lightweight, breathable fabric perfect for casual outings and vacations.",
    mainImg: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Fashion",
    gender: "Women",
    price: 1499,
    discount: 35
  },
  {
    title: "Unisex Graphic Hoodie",
    description: "Trendy graphic print hoodie with soft fleece lining. Perfect for casual wear, college outings and chilly evenings.",
    mainImg: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Fashion",
    gender: "Unisex",
    price: 1299,
    discount: 30
  },
  {
    title: "Women's Leather Handbag",
    description: "Elegant genuine leather handbag with multiple compartments. Spacious interior and premium stitching. Perfect for work and everyday use.",
    mainImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    ],
    sizes: ["One Size"],
    category: "Fashion",
    gender: "Women",
    price: 3499,
    discount: 22
  },
  {
    title: "Men's Running Sneakers",
    description: "Lightweight and breathable running sneakers with cushioned sole technology. Perfect for jogging, gym and casual wear.",
    mainImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1581093458791-9f3c3ae93ef1?w=500",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    category: "Fashion",
    gender: "Men",
    price: 2999,
    discount: 28
  },

  // ==================== GROCERIES ====================
  {
    title: "Organic Basmati Rice 5kg",
    description: "Premium long-grain organic Basmati rice, aged for 2 years for perfect aroma and taste. Ideal for biryanis and everyday cooking.",
    mainImg: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      "https://images.unsplash.com/photo-1574002001187-b9ae2b5a9b87?w=500",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500"
    ],
    sizes: ["2kg", "5kg", "10kg"],
    category: "Groceries",
    gender: "Unisex",
    price: 599,
    discount: 15
  },
  {
    title: "Cold Pressed Coconut Oil 1L",
    description: "100% natural cold pressed virgin coconut oil. No preservatives, no additives. Ideal for cooking, skincare and hair care.",
    mainImg: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=500",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500",
      "https://images.unsplash.com/photo-1555576778-5e1e11c52ad1?w=500"
    ],
    sizes: ["500ml", "1L", "2L"],
    category: "Groceries",
    gender: "Unisex",
    price: 349,
    discount: 20
  },
  {
    title: "Mixed Dry Fruits Pack",
    description: "Premium quality mixed dry fruits including almonds, cashews, walnuts, raisins and pistachios. Freshly packed and sealed for freshness.",
    mainImg: "https://images.unsplash.com/photo-1545286796-3e3d30d5b703?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1545286796-3e3d30d5b703?w=500",
      "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500",
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500"
    ],
    sizes: ["250g", "500g", "1kg"],
    category: "Groceries",
    gender: "Unisex",
    price: 799,
    discount: 10
  },

  // ==================== SPORTS-EQUIPMENT ====================
  {
    title: "Professional Football",
    description: "FIFA approved professional match football with durable outer casing, precision stitching and excellent aerodynamics for competitive play.",
    mainImg: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500",
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=500",
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=500"
    ],
    sizes: ["Size 3", "Size 4", "Size 5"],
    category: "Sports-Equipment",
    gender: "Unisex",
    price: 1299,
    discount: 20
  },
  {
    title: "Yoga Mat Premium",
    description: "Non-slip eco-friendly TPE yoga mat with alignment lines. 6mm thick for extra comfort and joint protection during any yoga or fitness session.",
    mainImg: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500"
    ],
    sizes: ["4mm", "6mm", "8mm"],
    category: "Sports-Equipment",
    gender: "Unisex",
    price: 999,
    discount: 30
  },
  {
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set ranging from 5kg to 25kg per dumbbell. Quick-change weight system, ergonomic grip for all workout levels.",
    mainImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
    ],
    sizes: ["5kg Pair", "10kg Pair", "20kg Pair"],
    category: "Sports-Equipment",
    gender: "Unisex",
    price: 4999,
    discount: 25
  },
  {
    title: "Cricket Bat English Willow",
    description: "Grade 1 English Willow cricket bat with premium handle, perfect for professional and club-level play. Pre-knocked and ready to use.",
    mainImg: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500",
    carousel: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500",
      "https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=500",
      "https://images.unsplash.com/photo-1562552052-d07e3b680f78?w=500"
    ],
    sizes: ["Short Handle", "Long Handle"],
    category: "Sports-Equipment",
    gender: "Unisex",
    price: 3499,
    discount: 18
  }
];

const categories = ["Mobiles", "Electronics", "Fashion", "Groceries", "Sports-Equipment"];

async function seedDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb+srv://samubindu1_db_user:LZEUI2ZzLwipvdTq@cluster0.98j3k51.mongodb.net/ecommerce?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`✅ Inserted ${products.length} products`);

    // Update admin categories
    const admin = await Admin.findOne();
    if (admin) {
      admin.categories = categories;
      await admin.save();
      console.log('✅ Updated admin categories');
    } else {
      await Admin.create({ banner: '', categories });
      console.log('✅ Created admin document with categories');
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log('📦 Products added per category:');
    for (const cat of categories) {
      const count = products.filter(p => p.category === cat).length;
      console.log(`   ${cat}: ${count} products`);
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
    process.exit(1);
  }
}

seedDB();
