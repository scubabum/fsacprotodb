/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Member } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import AndroidLargeMainMenu from "./AndroidLargeMainMenu";
import { Collection } from "@aws-amplify/ui-react";
export default function AndroidLargeMainMenuCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Member,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          diveCerts: await item.diveCerts.toArray(),
          Equipment: await item.Equipment.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "AndroidLargeMainMenuCollection")}
      {...rest}
    >
      {(item, index) => (
        <AndroidLargeMainMenu
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></AndroidLargeMainMenu>
      )}
    </Collection>
  );
}
