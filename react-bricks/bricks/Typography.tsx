import React from 'react'
import {
  Typography as TypographyComponent,
  TypographyProps as TypographyComponentProps
} from '@ahmadsufyan/component-library';
import { types, Text } from 'react-bricks/frontend'

//=============================
// Component to be rendered
//=============================
const Typograhpy: types.Brick<TypographyComponentProps> = (typographyProps) => {
  return (
    <Text
      renderBlock={(props) => (
        <TypographyComponent
          {...typographyProps}
        >
          {props.children}
        </TypographyComponent>
      )}
      propName={"children"}
    />
  )
}

//=============================
// Brick Schema
//=============================
Typograhpy.schema = {
  name: 'typography',
  label: 'Typography',
  getDefaultProps: () => ({
    strong: false,
    italic: false,
    underline: false,
    variant: 'h1',
    children: "New text here"
  }),
  sideEditProps: [
    {
      name: 'strong',
      label: 'Strong',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'italic',
      label: 'Italic',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'underline',
      label: 'Underline',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'h1', label: 'Heading 1' },
          { value: 'h2', label: 'Heading 2' },
          { value: 'h3', label: 'Heading 3' },
          { value: 'h4', label: 'Heading 4' },
          { value: 'h5', label: 'Heading 5' },
          { value: 'h6', label: 'Heading 6' },
          { value: 'p', label: 'Paragraph' },
        ],
      },
    },
    {
      name: 'children',
      label: 'Children',
      type: types.SideEditPropType.Text,
      show: () => false,
    },
  ],
}

export default Typograhpy
