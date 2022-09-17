import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Featured 1',
    imgPath:
      'https://drive.google.com/uc?export=download&id=1fZ8EEocJu64nRV8r_JHedebwGAgqgjoA',
  },
  {
    label: 'Featured 2',
    imgPath:
    'https://drive.google.com/uc?export=download&id=1rfICtEHRqZVxA1BsC3uEKYtIFJrhuXFH',
  },
  {
    label: 'Featured 3',
    imgPath:
    'https://drive.google.com/uc?export=download&id=1umq8WIzkxAwaQ6e2kXpGf8E7s_JofOA8',
  },
  {
    label: 'Featured 4',
    imgPath:
    'https://drive.google.com/uc?export=download&id=1zy-LM1NjyWNw-E_Fbrgi8alBsh-sd7-G',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "auto",
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}

      </AutoPlaySwipeableViews>

    </Box>
  );
}

export default Carousel;
