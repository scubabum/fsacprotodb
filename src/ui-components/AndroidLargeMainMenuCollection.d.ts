/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AndroidLargeMainMenuProps } from "./AndroidLargeMainMenu";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AndroidLargeMainMenuCollectionOverridesProps = {
    AndroidLargeMainMenuCollection?: PrimitiveOverrideProps<CollectionProps>;
    AndroidLargeMainMenu?: AndroidLargeMainMenuProps;
} & EscapeHatchProps;
export declare type AndroidLargeMainMenuCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AndroidLargeMainMenuProps;
} & {
    overrides?: AndroidLargeMainMenuCollectionOverridesProps | undefined | null;
}>;
export default function AndroidLargeMainMenuCollection(props: AndroidLargeMainMenuCollectionProps): React.ReactElement;
