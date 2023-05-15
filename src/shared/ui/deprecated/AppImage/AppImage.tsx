import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The fallback element to be displayed while the image is loading.
     */
    fallback?: ReactElement;
    /**
     * The fallback element to be displayed if there is an error loading the image.
     */
    errorFallback?: ReactElement;
}

/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img src={src} alt={alt} className={className} {...otherProps} />;
});
