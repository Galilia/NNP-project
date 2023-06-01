import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * A React Functional Component that returns an SVG element.
     */
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    /**
     * The value for the `data-testid` attribute used for testing.
     */
    'data-testid'?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    /**
     * Indicate that button not clickable
     */
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    /**
     * Function to handle click events on the icon.
     */
    onClick?: () => void;
    /**
     * Indicate that button is clickable
     */
    clickable?: true;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        'data-testid': dataTestId,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ height, width }}
                data-testid={dataTestId}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
