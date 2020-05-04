import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// styles
import useStyles from './styles';

// Components
import { Button } from '../../../components/Wrappers/Wrappers';

function getModalStyle() {
  const top = 45;
  const left = 50;
  const width = 40;
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const FormModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [dropdownValue, setDropdownValue] = useState('');

  const { open, handleClose, title, formFields } = props;

  const handleDropdown = (event) => {
    setDropdownValue(event.target.value);
  };

  const form = (
    <form className={classes.root} noValidate autoComplete='off'>
      {formFields.map((field, index) => {
        if (field.type === 'dropdown') {
          return (
            <FormControl
              key={index}
              className={classes.formControl}
              style={field.style}
            >
              <InputLabel>{field.label}</InputLabel>
              <Select value={dropdownValue} onChange={handleDropdown}>
                {field.dropdownList.map((category, i) => (
                  <MenuItem key={i} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }
        return (
          <TextField
            key={index}
            style={field.style}
            type={field.type}
            label={field.label}
            defaultValue={field.defaultValue}
            multiline={field.multiline}
          />
        );
      })}
      <Button
        color='success'
        size='medium'
        className='mt-4 px-2 btn-block'
        variant='contained'
        style={{ backgroundColor: '#536DFE' }}
      >
        {title}
      </Button>
    </form>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div style={modalStyle} className={classes.paper}>
        <h4>{title}</h4>
        {form}
      </div>
    </Modal>
  );
};

export default FormModal;
