import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Article } from './Article';

export default {
    title: 'shared/Article',
    component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
    <Article {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        article: {
            data: {
                id: '1',
                title: 'Заголовок статьи',
                description: 'Краткое описание статьи',
                img: 'https://leonardo.osnova.io/97120a6a-7625-5424-b852-41b9bd4ffd3a/-/preview/2000/-/format/webp/',
                createdAt: '24.03.23',
                tags: ['Music', 'Films'],
                blocks: [
                    {
                        id: '1',
                        type: 'TEXT',
                        title: 'Заголовок блока 1',
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed enim et sapien tristique aliquet sed ac risus. Phasellus at vehicula nunc. Maecenas ut nisi erat. Mauris vestibulum at est at pretium. Praesent nulla nibh, pharetra a semper quis, ultricies ut justo. Morbi id bibendum ligula. In dignissim nisi a elit mattis fringilla. Cras sem risus, congue sit amet cursus in, feugiat ac elit. Suspendisse cursus nunc erat, vel pellentesque odio porttitor vitae. Praesent vel auctor lacus. Vivamus aliquet varius sem vitae bibendum. Nulla facilisi.',
                            'Quisque eu nulla bibendum, suscipit odio eget, lacinia nisl. Suspendisse efficitur, urna in volutpat ornare, sapien tortor scelerisque mi, nec laoreet ante sem in metus. Curabitur vitae sagittis eros, ac laoreet quam. Proin nec lacinia risus. Aliquam enim mi, lobortis sit amet tincidunt eu, ullamcorper auctor erat. Fusce sit amet tortor diam. Mauris porttitor sem at porttitor placerat. Aenean eget lobortis sem. Pellentesque felis magna, posuere sed posuere non, finibus ac mi. Cras ac leo vitae neque sodales porta. Cras gravida sed libero a mollis. Curabitur sodales auctor ipsum in dictum. Pellentesque ultrices, nisl nec elementum convallis, lectus nibh dictum nunc, eget porta neque leo eget purus. Donec a libero molestie, posuere nisl vitae, porttitor nunc.',
                        ],
                    },
                    {
                        id: '1',
                        type: 'IMAGE',
                        title: 'Заголовок изображения 1',
                        src: 'https://leonardo.osnova.io/97120a6a-7625-5424-b852-41b9bd4ffd3a/-/preview/2000/-/format/webp/',
                    },
                    {
                        id: '2',
                        type: 'CODE',
                        code: '<div>\n\nИсходный блок</div>',
                    },
                ],
            },
        },
    }),
];
