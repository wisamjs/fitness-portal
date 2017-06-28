import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const Select = ({name, defaultSelected, onChange, values, className, styles = {}}) => {
    const options = values.map((value, id) =>
    <MenuItem
    value={value}
    primaryText={value}
    key={id}
    className="m1"
    />
  );

  return (
    <div className={className}>
      <SelectField
      style={styles.selectField}
      underlineStyle={{display: 'none'}}
      labelStyle={styles.label}
      floatingLabelStyle={styles.floatingLabel}
      floatingLabelText={name}
      value={defaultSelected}
      onChange={onChange}>
         {options}
      </SelectField>
    </div>
  );
}

Select.defaultName = 'Select';
Select.propTypes = {
  name: PropTypes.string,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.array,
}

export default Select;