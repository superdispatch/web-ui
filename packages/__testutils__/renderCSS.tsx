import { Color, ColorDynamic, ThemeProvider } from '@superdispatch/ui';
import { render } from '@testing-library/react';
import { parse as parseCSS, stringify as stringifyCSS, Stylesheet } from 'css';
import { format } from 'prettier';
import { ReactElement } from 'react';

const colors = new Map<string, string>();
Object.entries(Color).forEach(([k, v]) => {
  colors.set(v, `Color.${k}`);
});
Object.entries(ColorDynamic).forEach(([k, v]) => {
  colors.set(v, `ColorDynamic.${k}`);
});

const colorRegExp = new RegExp(
  Array.from(colors.keys(), (x) =>
    x.replace('(', '\\(').replace(')', '\\)'),
  ).join('|'),
  'g',
);

const renderedCSS = new Set<string>();

function getAllSheets(): Map<string, Element> {
  return new Map<string, Element>(
    Array.from(document.querySelectorAll('[data-jss]'), (node) => [
      node.getAttribute('data-meta') as string,
      node,
    ]),
  );
}

function getSheets(components: string[]): Element[] {
  const sheets = getAllSheets();

  if (sheets.size === 0) {
    throw new Error('There are no mounted JSS components.');
  }

  if (components.length === 0) {
    throw new Error(
      `No component names provided. Pick any of: ${Array.from(
        sheets.keys(),
        (key) => `  ${key}`,
      ).join('\n')}`,
    );
  }

  return components
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const sheet = sheets.get(name);

      if (!sheet) {
        throw new Error(
          `Sheet for component "${name}" not found. You can select one of: ${Array.from(
            sheets.keys(),
            (key) => `  ${key}`,
          ).join('\n')}`,
        );
      }

      return sheet;
    });
}

function parseStyleSheet(names: string[]): Stylesheet {
  return parseCSS(
    getSheets(names)
      .map((node) => node.textContent)
      .join('\n'),
  );
}

function formatAST(sheet: Stylesheet): string {
  return format(
    stringifyCSS(sheet).replace(
      colorRegExp,
      (color) => colors.get(color) as string,
    ),
    { parser: 'css', singleQuote: true },
  ).trim();
}

expect.addSnapshotSerializer({
  test: (value) => typeof value === 'string' && renderedCSS.has(value),
  print: (value) => String(value),
});

export function extractCSS(components: string[]): string {
  const targetSheet = parseStyleSheet(components);
  const formatted = formatAST(targetSheet);

  renderedCSS.add(formatted);

  return formatted;
}

export function renderCSS(ui: ReactElement, components: string[]): string {
  render(<ThemeProvider>{ui}</ThemeProvider>);

  return extractCSS(components);
}
