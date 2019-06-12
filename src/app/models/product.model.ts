export interface Product {
  name: string;
  slug: string;
  price: number;
  currency: string;
  description: string;
  img: string;
  category: string;
}
export const DummyProducts: Product[] = [
  {
    name: 'Nike Air More Uptempo',
    slug: 'nikey-more-uptempo',
    price: 5600,
    currency: 'KSH',
    description: `One of the most recognizable shoes in Nike history came back hard in 2017,
            with special iterations by Supreme and a city-specific pack that highlighted NYC,
            Chicago, and Atlanta adding to the energy.`,
    img: '../../assets/products/1.jpg',
    category: 'Fashion'
  },
  {
    name: 'Nike Vapormax',
    slug: 'nikey-vapormax',
    price: 8700,
    currency: 'KSH',
    description: `After debuting at the epic Innovation Summit in 2016,
              the Vapormax sneaker finally released to the public in 2017.
              A delight among runners and fashionistas alike,
              Nike’s most evolved form of Air highlighted a devotion to innovation while delivering something for casual wear. `,
    img: '../../assets/products/2.jpeg',
    category: 'Fashion'
  },
  {
    name: ' Nike Presto',
    slug: 'nikey-presto',
    price: 9999,
    currency: 'KSH',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vitae exercitationem nemo, optio reiciendis
    praesentium fuga molestias quas eos? Ab corrupti fuga molestiae iste pariatur temporibus molestias debitis`,
    img: '../../assets/products/3.jpg',
    category: 'Fashion'
  },
  {
    name: ' Nike Komyuter',
    slug: 'nikey-komyuter',
    price: 4800,
    currency: 'KSH',
    description: `Errolson Hugh worked closely with Nike to bring some epic ACG flair to this all-seasons shoe.
    The tactical look – heavy on buckles, straps, and durable materials – was absolutely perfect for this model.`,
    img: '../../assets/products/4.jpg',
    category: 'Fashion'
  },
  {
    name: ' Nike Trainers',
    slug: 'nikey-trainers',
    price: 12700,
    currency: 'KSH',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vitae exercitationem nemo, optio reiciendis
    praesentium fuga molestias quas eos? Ab corrupti fuga molestiae iste pariatur temporibus molestias debitis`,
    img: '../../assets/products/5.jpg',
    category: 'Fashion'
  },
  {
    name: ' Nike Febby',
    slug: 'nikey-febby',
    price: 8900,
    currency: 'KSH',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vitae exercitationem nemo, optio reiciendis
    praesentium fuga molestias quas eos? Ab corrupti fuga molestiae iste pariatur temporibus molestias debitis`,
    img: '../../assets/products/6.jpg',
    category: 'Fashion'
  },
]

