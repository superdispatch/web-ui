import { Box, Grid, TextField } from '@material-ui/core';
import { PhoneField, PhoneNumber } from '@superdispatch/phones';
import React, { useEffect, useState } from 'react';

export default function PhoneFieldDemo() {
  const [raw, setRaw] = useState('+1');
  const [phone, setPhone] = useState(() => PhoneNumber.fromInternational(raw));

  useEffect(() => {
    setPhone(PhoneNumber.fromInternational(raw));
  }, [raw]);

  return (
    <Box padding={2}>
      <Grid container={true} spacing={2}>
        <Grid item={true}>
          <TextField
            label="Raw"
            value={raw}
            onChange={event => setRaw(event.target.value)}
          />
        </Grid>
        <Grid item={true}>
          <PhoneField label="Formatted" value={phone} onChange={setPhone} />
        </Grid>
      </Grid>
    </Box>
  );
}
