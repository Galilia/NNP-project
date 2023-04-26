import { KeyboardEventHandler, memo, useState } from 'react';

import CloseIcon from '@/shared/assets/icons/close-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';

import cls from './TagsInput.module.scss';

interface AddTagsInputProps {
    className?: string;
}

export const TagsInput = memo((props: AddTagsInputProps) => {
    const { className } = props;
    const [tags, setTags] = useState<string[]>(['NodeJs', 'MongoDB']);

    const addTags: KeyboardEventHandler<HTMLInputElement> = (event) => {
        const target = event.currentTarget as HTMLInputElement;
        if (event.key === 'Enter' && target.value !== '') {
            setTags([...tags, target.value]);
            target.value = '';
        }
    };

    const removeTags = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className={classNames(cls.AddTagsInput, {}, [className])}>
            <ul className={cls.tags}>
                {
                    tags.map((tag, index) => (
                        <li key={index} className={cls.tag}>
                            <span className={cls.tagTitle}>{tag}</span>
                            <Icon Svg={CloseIcon} className={cls.tagCloseIcon} onClick={() => removeTags(index)} />
                        </li>
                    ))
                }
            </ul>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <input type="text" placeholder="Press enter to add tags" onKeyUp={addTags} />
        </div>
    );
});
