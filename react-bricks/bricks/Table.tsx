import React from 'react'
import {
  Table as TableComponent,
  TableProps as TableComponentProps,
} from '@ahmadsufyan/component-library';
import { types } from 'react-bricks/frontend'

//=============================
// Component to be rendered
//=============================
const Table: types.Brick<TableComponentProps> = ({ size, bordered }) => {
  return (
    <TableComponent
      bordered={bordered}
      data={
        [
          { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
          { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
          { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
          { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
          { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
          { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
        ]
      }
      column={
        [
          { title: "Company", keyIndex: "company" },
          { title: "Contanct", keyIndex: "contact" },
          { title: "Country", keyIndex: "country" },
        ]
      }
      size={size}
    />
  )
}

//=============================
// Brick Schema
//=============================
Table.schema = {
  name: 'table',
  label: 'Table',
  getDefaultProps: () => ({
    bordered: true,
    size: 'middle',
  }),
  sideEditProps: [
    {
      name: 'bordered',
      label: 'Border',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'size',
      label: 'Size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'small', label: 'Small' },
          { value: 'middle', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
    },
  ],
}

export default Table
