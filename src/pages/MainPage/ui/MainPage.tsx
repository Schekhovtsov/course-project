/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import styles from './MainPage.module.scss';

function MainPage() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('mainPage');

    return (
        <Page data-testid="Main page">
            <Text titleSize="xl" title={`${t('title')}`} />
            <Text title={`${t('subtitle')}`} />
            <Text text={`${t('stack')}`} />
            <ul>
                <li>
                    <Text text={`${t('stack_li_1')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_2')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_3')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_4')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_5')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_6')}`} />
                </li>
                <li>
                    <Text text={`${t('stack_li_7')}`} />
                </li>
            </ul>
            <br />
            <Text text={`${t('architecture')}`} />
            <br />
            <div className={styles.footer}>
                <Text text={`${t('credits')}`} />
            </div>
        </Page>
    );
}

export default MainPage;
