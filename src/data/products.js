import { Apple, Carrot, BriefcaseMedical, Package } from 'lucide-react';

// CATEGORIES
export const categories = [
  { 
    id: 'fresh-fruits', 
    name: 'Fresh Fruits', 
    slug: 'fresh-fruits',
    icon: Apple 
  },
  { 
    id: 'fresh-vegetables', 
    name: 'Fresh Vegetables', 
    slug: 'fresh-vegetables',
    icon: Carrot 
  },
  
  { 
    id: 'medical-supplies', 
    name: 'Medical Supplies', 
    slug: 'medical-supplies',
    icon: BriefcaseMedical 
  },
  { 
    id: 'staple-foods', 
    name: 'Legumes & Dry Goods', 
    slug: 'staple-foods',
    icon: Package 
  }
];


// PRODUCTS

export const products = [
  {
    id: 'orange',
    category: 'fresh-fruits',
    name: 'Fresh Orange',
    image: '/products/fruites/برتقال.png',
    description: 'Premium Egyptian oranges with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'banana',
    category: 'fresh-fruits',
    name: 'Fresh Bananas',
    image: '/products/fruites/موز.png',
    description: 'Premium Egyptian Bananas with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'mango',
    category: 'fresh-fruits',
    name: 'Fresh Mango',
    image: '/products/fruites/مانجاد.png',
    description: 'Premium Egyptian Mango with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:false ,
    requestInfo: true
  },
  {
    id: 'pomegranate',
    category: 'fresh-fruits',
    name: 'Fresh Pomegranate',
    image: '/products/fruites/رمان.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'grapes',
    category: 'fresh-fruits',
    name: 'Fresh Grapes',
    image: '/products/fruites/عنب.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'strawberry',
    category: 'fresh-fruits',
    name: 'Fresh Strawberry',
    image: '/products/fruites/فراولة.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'tangerine',
    category: 'fresh-fruits',
    name: 'Fresh Tangerine',
    image: '/products/fruites/يوستفندي.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'apple',
    category: 'fresh-fruits',
    name: 'Fresh Apples',
    image: '/products/fruites/تفاح.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'sweetPotato',
    category: 'fresh-fruits',
    name: 'Sweet Potatoes',
    image: '/products/fruites/بطاطا.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  


  // VEGETABLES

  {
    id: 'potatoes',
    category: 'fresh-vegetables',
    name: 'Fresh Potatoes ',
    image: '/products/veg/بطاطس.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'tomatoes',
    category: 'fresh-vegetables',
    name: 'Fresh Tomatoes ',
    image: '/products/veg/طماطم.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'unions',
    category: 'fresh-vegetables',
    name: 'Fresh Unions ',
    image: '/products/veg/بصل.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },


  // MEDICAL SUPPLIES

   {
    id: 'tablets',
    category: 'medical-supplies',
    name: 'Medical Tablets ',
    image: '/products/medical/تابلت.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'IV',
    category: 'medical-supplies',
    name: 'IV Infusion Device ',
    image: '/products/medical/جهاز محاليل.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Examination-gloves',
    category: 'medical-supplies',
    name: 'Examination Gloves ',
    image: '/products/medical/جوانتي فحص.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Examination-gloves-2',
    category: 'medical-supplies',
    name: 'Examination Gloves 2 ',
    image: '/products/medical/جوانتي فحص 2.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Sterile-gloves',
    category: 'medical-supplies',
    name: 'Sterile Gloves ',
    image: '/products/medical/جوانتي معقم.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Syringes',
    category: 'medical-supplies',
    name: 'Syringes ',
    image: '/products/medical/سرنجات.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Insulin-syringes',
    category: 'medical-supplies',
    name: 'Insulin Syringes ',
    image: '/products/medical/سرنجات انسولين.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Orthopedic-splints',
    category: 'medical-supplies',
    name: 'MOrthopedic plates and screws ',
    image: '/products/medical/شرايح و مسامير طبية.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Capsules',
    category: 'medical-supplies',
    name: 'Capsules ',
    image: '/products/medical/كبسولات.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
   {
    id: 'Prosthetic-joint',
    category: 'medical-supplies',
    name: 'Prosthetic joint ',
    image: '/products/medical/مفصل طبي.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },


  // Legumes & Dry Goods -------------------------------------------------------------------

  {
    id: 'Peas',
    category: 'staple-foods',
    name: 'Peas ',
    image: '/products/legumes/بسلة.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'Lentils',
    category: 'staple-foods',
    name: 'Lentils ',
    image: '/products/legumes/عدس.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:true ,
    requestInfo: true
  },
  {
    id: 'Beans',
    category: 'staple-foods',
    name: 'Beans ',
    image: '/products/legumes/فاصوليا.png',
    description: 'Premium Egyptian Pomegranate with excellent taste and long shelf life.',
    origin: 'Egypt',
    varieties: 'May Seedless, Flame Seedless',
    packaging: '10kg limited standard size',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    available:false ,
    requestInfo: true
  },




];
