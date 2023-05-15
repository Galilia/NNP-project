import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import StarIcon from '../../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * Callback function that is called when a star is selected. It receives the count of stars selected.
     */
    onSelect?: (starsCount: number) => void;
    /**
     * The size of the stars in the rating component.
     */
    size?: number;
    /**
     * The number of stars that should be initially selected.
     */
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;
    const [currentStartsCount, setCurrentStartsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStartsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStartsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStartsCount >= starNumber}
                />
            ))}
        </div>
    );
});
