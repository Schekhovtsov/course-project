import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { VStack } from 'shared/ui/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selector/addCommentFormSelector';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    // eslint-disable-next-line no-unused-vars
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ onSendComment, className }: AddCommentFormProps) => {
        const dispatch = useAppDispatch();
        const { t } = useTranslation();
        const text = useSelector(getAddCommentFormText);
        // eslint-disable-next-line no-unused-vars
        const error = useSelector(getAddCommentFormError);

        useDynamicReducerLoader(reducers);

        const onTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch]
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text ?? '');
            onTextChange('');
        }, [onSendComment, onTextChange, text]);

        return (
            <VStack
                max
                gap={10}
                className={classNames(styles.container, {}, [className])}
            >
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onTextChange}
                    className={styles.input}
                />
                <Button theme={ButtonTheme.SECONDARY} onClick={onSendHandler}>
                    {t('Отправить комментарий')}
                </Button>
            </VStack>
        );
    }
);

export default AddCommentForm;
