import React from "react";
import { Form } from "react-bootstrap";

interface SelectFilterProps {
  items?: Array<any>;
  idAttr: string;
  displayAttr: string;
  defaultItem: string;
  onSelect: (item: any) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  items,
  idAttr,
  displayAttr,
  defaultItem,
  onSelect,
}) => {
  const handleOnSelect = (event: any) => {
    if (items) {
      const item = items.find(
        (x) => String(x[idAttr]) === String(event.target.value)
      );
  
      onSelect(item);
    }
  };

  return (
    <Form.Select
      id="source-filter"
      aria-label="Fonte"
      size="sm"
      onChange={handleOnSelect}
    >
      <option value="0">{defaultItem}</option>
      {items && items.map((item) => (
        <option key={item[idAttr]} value={item[idAttr]}>
          {item[displayAttr]}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectFilter;
