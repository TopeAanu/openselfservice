import { Pagination, Price } from '@/utils/models';
import { Media } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export class Product {
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    shortDescription!: string;
    image!: Media.Media;
    price!: Price.Price;
    link!: string;
    type!: ProductType;
    category!: string;
    tags!: {
        label: string;
        variant: string;
    }[];
}

export type Products = Pagination.Paginated<Product>;
