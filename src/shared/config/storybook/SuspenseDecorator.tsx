/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
