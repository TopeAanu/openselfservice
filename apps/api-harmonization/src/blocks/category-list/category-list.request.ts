import { CMS } from '@o2s/framework/modules';

export class GetCategoryListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
