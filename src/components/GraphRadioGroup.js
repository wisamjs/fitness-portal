import React, {PropTypes} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const GraphRadioGroup = ({name, defaultSelected, onChange, values, className}) => {
    const radioButtons = values.map((value, id) =>
    <RadioButton
    value={value}
    label={value}
    key={id}
    className="m1"
    />
  );

  return (
    <div className={className}>
      <h3 className="white">{name}</h3>
       <RadioButtonGroup 
       className="p2" 
       name={name} 
       defaultSelected={defaultSelected}
       onChange={onChange}>
        {radioButtons}
      </RadioButtonGroup>
    </div>
  );
}

GraphRadioGroup.defaultName = 'GraphRadioGroup';
GraphRadioGroup.propTypes = {
  name: PropTypes.string,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.array,
}

export default GraphRadioGroup;