const templates: Array<HTMLTemplateElement[]> = [];

export const setTemplates = (id: number, tpl: HTMLTemplateElement[]) => {
  templates[id] = tpl;
};

export const TemplateTypes = Object.freeze({
  HOST: 'host',
  KNOB: 'knob',
  SLOT: 'slot',
  PREFIX: 'prefix',
  SUFFIX: 'suffix',
  WRAPPER: 'wrapper'
});

export const isTemplate = (node: unknown): node is HTMLTemplateElement =>
  node instanceof HTMLTemplateElement;

const matchTemplate =
  (name: string, type: string) => (tpl: HTMLTemplateElement) => {
    const { element, target } = tpl.dataset;
    return element === name && target === type;
  };

export const getTemplateNode = (node: unknown): Element | null =>
  isTemplate(node) ? node.content.firstElementChild : null;

export const getTemplate = (
  id: number,
  name: string,
  type: string
): HTMLTemplateElement | undefined =>
  templates[id].find(matchTemplate(name, type));

export const getTemplates = (
  id: number,
  name: string,
  type: string
): HTMLTemplateElement[] => templates[id].filter(matchTemplate(name, type));

export const hasTemplate = (id: number, name: string, type: string): boolean =>
  templates[id].some(matchTemplate(name, type));
