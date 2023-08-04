import { Component, ReactNode, createElement } from "react";
import { CustomMapsPreviewProps } from "../typings/CustomMapsProps";

export class preview extends Component<CustomMapsPreviewProps> {
    render(): ReactNode {
        return <div></div>
    }
}

export function getPreviewCss(): string {
    return require("./ui/CustomMaps.css");
}
