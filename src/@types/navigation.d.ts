import { PlantProps } from "../libs/storage";

export type ConfirmationNavigationProps = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: "PlantSelect" | "MyPlants";
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      UserIdentification: undefined;
      Confirmation: ConfirmationNavigationProps;
      PlantSelect: undefined;
      PlantSave: PlantProps;
      MyPlants: undefined;
    }
  }
}
