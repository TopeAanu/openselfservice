import { Articles, Search } from '@o2s/framework/modules';

import { Model } from '../models';

export const mapArticlesFromSearch = (
    searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel>,
): Articles.Model.Articles => {
    const articles: Articles.Model.Article[] = searchResult.hits.map(
        (hit): Articles.Model.Article => ({
            id: hit.objectID,
            slug: hit.slug,
            title: hit.title,
            lead: hit.lead,
            tags: hit.tags,
            createdAt: hit.createdAt,
            updatedAt: hit.updatedAt,
            image: hit.image,
            thumbnail: hit.thumbnail,
            category: hit.category,
            sections: hit.sections,
            isProtected: hit.isProtected,
        }),
    );

    return {
        data: articles,
        total: articles.length,
    };
};
