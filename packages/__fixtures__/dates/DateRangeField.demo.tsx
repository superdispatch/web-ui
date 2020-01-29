import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputAdornment,
  Switch,
  Typography,
} from '@material-ui/core';
import {
  CalendarQuickSelection,
  CalendarQuickSelectionItem,
  DateRangeField,
} from '@superdispatch/dates';
import moment from 'moment';
import React, { useMemo, useState } from 'react';

export function isSameDateRange(
  a: undefined | [Date?, Date?],
  b: undefined | [Date?, Date?],
): boolean {
  return (
    !!a &&
    !!b &&
    moment(a[0]).isSame(b[0], 'date') &&
    moment(a[1]).isSame(b[1], 'date')
  );
}

export default function DateRangeFieldDemo() {
  const [range, setRange] = useState<[Date?, Date?]>();
  const [disabled, setDisabled] = useState(false);
  const [hasClear, setHasClear] = useState(false);
  const [hasAdornment, setHasAdornment] = useState(false);
  const [hasFooter, setHasFooter] = useState(false);
  const [hasQuickSelection, setHasQuickSelection] = useState(false);

  const today = useMemo(() => moment().toDate(), []);

  return (
    <Box p={2}>
      <Grid container={true} spacing={1}>
        <Grid item={true} sm={true} xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">State</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel
                label="Disabled"
                control={<Switch />}
                checked={disabled}
                onChange={(_, checked) => setDisabled(checked)}
              />

              <FormControlLabel
                label="Clearable"
                control={<Switch />}
                checked={hasClear}
                onChange={(_, checked) => setHasClear(checked)}
              />

              <FormControlLabel
                label="Has Adornment"
                control={<Switch />}
                checked={hasAdornment}
                onChange={(_, checked) => setHasAdornment(checked)}
              />

              <FormControlLabel
                label="With Footer"
                control={<Switch />}
                checked={hasFooter}
                onChange={(_, checked) => setHasFooter(checked)}
              />

              <FormControlLabel
                label="With Quick Selection"
                control={<Switch />}
                checked={hasQuickSelection}
                onChange={(_, checked) => setHasQuickSelection(checked)}
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid item={true} xs={12}>
          <DateRangeField
            value={range}
            onChange={setRange}
            hasClearButton={hasClear}
            renderFooter={() =>
              hasFooter && (
                <Typography color="textSecondary">
                  Selected date range allows preferred carriers to instantly
                  book loads inside the Super Loadboard.
                  <br />
                  Dates out of selected range will still be available to
                  request.
                </Typography>
              )
            }
            renderQuickSelection={({ change }) =>
              hasQuickSelection && (
                <CalendarQuickSelection>
                  {Array.from({ length: 5 }, (_, idx) => {
                    const targetRange: [Date, Date] = [
                      moment(today).toDate(),
                      moment(today)
                        .add(idx + 1, 'days')
                        .toDate(),
                    ];

                    return (
                      <CalendarQuickSelectionItem
                        key={idx}
                        onClick={() => change(targetRange)}
                        selected={isSameDateRange(range, targetRange)}
                      >
                        {idx + 2} days
                      </CalendarQuickSelectionItem>
                    );
                  })}
                </CalendarQuickSelection>
              )
            }
            InputProps={{
              startAdornment: hasAdornment && (
                <InputAdornment position="start">Date:</InputAdornment>
              ),
            }}
            CalendarProps={{
              fromMonth: !disabled ? undefined : today,
              disabledDays: !disabled ? undefined : { before: today },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
