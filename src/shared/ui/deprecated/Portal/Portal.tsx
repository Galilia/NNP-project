import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    /**
     * The content to be rendered inside the portal.
     */
    children?: ReactNode;
    /**
     * The target DOM element where the portal should be rendered. Defaults to `document.body`.
     */
    element?: HTMLElement;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
