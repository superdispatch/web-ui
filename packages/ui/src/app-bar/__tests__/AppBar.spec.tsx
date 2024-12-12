import { AppBar } from '@material-ui/core';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiAppBar).toMatchInlineSnapshot(`
    Object {
      "color": "inherit",
      "elevation": 0,
      "position": "static",
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<AppBar />, ['MuiAppBar'])).toMatchInlineSnapshot(`
    .MuiAppBar-root {
      width: 100%;
      display: flex;
      z-index: 1100;
      box-sizing: border-box;
      flex-shrink: 0;
      flex-direction: column;
    }

    .MuiAppBar-positionFixed {
      top: 0;
      left: auto;
      right: 0;
      position: fixed;
    }

    @media print {
      .MuiAppBar-positionFixed {
        position: absolute;
      }
    }

    .MuiAppBar-positionAbsolute {
      top: 0;
      left: auto;
      right: 0;
      position: absolute;
    }

    .MuiAppBar-positionSticky {
      top: 0;
      left: auto;
      right: 0;
      position: sticky;
    }

    .MuiAppBar-positionStatic {
      position: static;
    }

    .MuiAppBar-positionRelative {
      position: relative;
    }

    .MuiAppBar-colorDefault {
      color: rgba(0, 0, 0, 0.87);
      background-color: #f5f5f5;
    }

    .MuiAppBar-colorPrimary {
      color: Color.White;
      background-color: Color.Blue300;
    }

    .MuiAppBar-colorSecondary {
      color: Color.White;
      background-color: #f50057;
    }

    .MuiAppBar-colorInherit {
      color: inherit;
    }

    .MuiAppBar-colorTransparent {
      color: inherit;
      background-color: transparent;
    }
  `);
});
