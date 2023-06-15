import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    articleId: '1',
};
Primary.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=2&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rating: 5,
                },
            ],
        },
    ],
};
