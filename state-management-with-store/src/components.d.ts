/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClearButton {
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLClearButtonElement extends Components.ClearButton, HTMLStencilElement {
    }
    var HTMLClearButtonElement: {
        prototype: HTMLClearButtonElement;
        new (): HTMLClearButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "clear-button": HTMLClearButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ClearButton {
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "clear-button": ClearButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "clear-button": LocalJSX.ClearButton & JSXBase.HTMLAttributes<HTMLClearButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
