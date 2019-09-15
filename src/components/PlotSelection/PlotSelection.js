import React from 'react';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';

const PlotSelection = (props) => {
  const { resource } = props;
  return (
    <div>
      <FirstStep {...props} />
      { /* If no selection is made, don't render Step 2 */
        resource !== '' ? <SecondStep {...props} /> : null
      }
    </div>
  );
}

export default PlotSelection;
