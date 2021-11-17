export interface Info {
  name: string;
  description: string;
}

export interface AttributeInfo extends Info {
  type: string | undefined;
}

export type PropertyValue = string | number | boolean | null | undefined;

export interface PropertyInfo extends Info {
  type: string;
  attribute: string | undefined;
  value: PropertyValue;
  default: PropertyValue;
  options?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SlotInfo extends Info {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventInfo extends Info {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CSSPartInfo extends Info {}

export interface CSSPropertyInfo extends Info {
  value?: string;
  default?: string;
  type?: string;
}

export interface ElementInfo extends Info {
  attributes: AttributeInfo[];
  events: EventInfo[];
  properties: PropertyInfo[];
  slots: SlotInfo[];
  cssProperties: CSSPropertyInfo[];
  cssParts: CSSPartInfo[];
}

export interface ElementSetInfo {
  tags: ElementInfo[];
}

export type ElementPromise = Promise<ElementInfo[]>;

export interface SlotValue {
  name: string;
  content: string;
}

export type ComponentWithProps = {
  [key: string]: PropertyValue;
};
