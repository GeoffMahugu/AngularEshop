export interface CategoryModel {
  homepageImg: string;
  landingImg: string;
  mobileImg: string;
  name: string;
  slug: string;
}

export const DefaultCategory: CategoryModel[] = [
  {
    homepageImg: '/assets/background/category/homepage/fashion.webp',
    landingImg: '/assets/background/category/landing/fashion-category.webp',
    mobileImg: '/assets/background/category/mobile/fashion-mobile.webp',
    name: 'Fashion',
    slug: 'fashion'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/electronics.webp',
    landingImg: '../../../../assets/background/category/landing/electronics-category.webp',
    mobileImg: '../../../../assets/background/category/mobile/electronics-mobile.webp',
    name: 'Electronics',
    slug: 'electronics'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/phones_tablets.webp',
    landingImg: '../../../../assets/background/category/landing/phones_tablets.webp',
    mobileImg: '../../../../assets/background/category/mobile/phones_tablets_mobile.webp',
    name: 'Phones & Tablets',
    slug: 'phones-tablets'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/compouters.webp',
    landingImg: '../../../../assets/background/category/landing/compouters.webp',
    mobileImg: '../../../../assets/background/category/mobile/compouters-mobile.webp',
    name: 'Computers',
    slug: 'computers'
  }
];
