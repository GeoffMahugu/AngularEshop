export interface CategoryModel {
  homepageImg: string;
  landingImg: string;
  mobileImg: string;
  name: string;
  slug: string;
}

export const DefaultCategory: CategoryModel[] = [
  {
    homepageImg: '/assets/background/category/homepage/fashion.svg',
    landingImg: '/assets/background/category/landing/fashion-category.svg',
    mobileImg: '/assets/background/category/mobile/fashion-mobile.svg',
    name: 'Fashion',
    slug: 'fashion'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/electronics.svg',
    landingImg: '../../../../assets/background/category/landing/electronics-category.svg',
    mobileImg: '../../../../assets/background/category/mobile/electronics-mobile.svg',
    name: 'Electronics',
    slug: 'electronics'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/phones_tablets.svg',
    landingImg: '../../../../assets/background/category/landing/phones_tablets.svg',
    mobileImg: '../../../../assets/background/category/mobile/phones_tablets_mobile.svg',
    name: 'Phones & Tablets',
    slug: 'phones-tablets'
  },
  {
    homepageImg: '../../../../assets/background/category/homepage/compouters.svg',
    landingImg: '../../../../assets/background/category/landing/compouters.svg',
    mobileImg: '../../../../assets/background/category/mobile/compouters-mobile.svg',
    name: 'Computers',
    slug: 'computers'
  }
];
