export interface IWidget {
  /**
   * The id of the product widget, incremental integer
   */
  id: number;

  /**
   * The type of impact
   */
  type: WidgetType;

  /**
   * The amount of impact
   */
  amount: number;

  /**
   * The action which corresponds to an impact type
   */
  action: WidgetAction;

  /**
   * Describes if the widget (badge) is active
   */
  active: boolean;

  /**
   * Describes if the widget is linked to the public profile
   */
  linked: boolean;

  /**
   * Describes the current color of the widget
   */
  selectedColor: WidgetColor;
}

export enum WidgetType {
  CARBON = "carbon",
  PLASTIC_BOTTLES = "plastic bottles",
  TREES = "trees",
}

export enum WidgetAction {
  COLLECTS = "collects",
  PLANTS = "plants",
  OFFSETS = "offsets",
}

export enum WidgetColor {
  BLUE = "blue",
  GREEN = "green",
  BEIGE = "beige",
  WHITE = "white",
  BLACK = "black",
}
