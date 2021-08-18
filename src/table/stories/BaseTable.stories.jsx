import React from 'react';

import BaseTable, {
  Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow,
} from '../index'


const generateColumns = (count = 10, prefix = 'column-', props) =>
  new Array(count).fill(0).map((column, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (columns, count = 200, prefix = 'row-') =>
  new Array(count).fill(0).map((row, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `cic ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })


const columns = generateColumns(10)
const data = generateData(columns, 2000)
const frozenData = generateData(columns, 1, 'frozen-row-')

const fixedColumns = columns.map((column, columnIndex) => {
  let frozen
  if (columnIndex < 1) frozen = Column.FrozenDirection.LEFT
  if (columnIndex > 8) frozen = Column.FrozenDirection.RIGHT
  return { ...column, frozen,  width: 300 }
})

const resizableColumns = columns.map((column, columnIndex) => {
  return { ...column, resizable: true,  width: 300 }
})

const standardColumns = columns.map((column, columnIndex) => {
  return { ...column,   width: 300 }
})



const expandColumnKey = 'column-0'

// add some sub items
for (let i = 0; i < 100; i++) {
  data.push({
    ...data[0],
    id: `${data[0].id}-sub-${i}`,
    parentId: data[0].id,
    [expandColumnKey]: `Sub ${i}`,
  })
  data.push({
    ...data[2],
    id: `${data[2].id}-sub-${i}`,
    parentId: data[2].id,
    [expandColumnKey]: `Sub ${i}`,
  })
  data.push({
    ...data[2],
    id: `${data[2].id}-sub-sub-${i}`,
    parentId: `${data[2].id}-sub-${i}`,
    [expandColumnKey]: `Sub-Sub ${i}`,
  })
}

const treeData = unflatten(data)

const Gender = ({ gender }) => (
  <span gender={gender}>
    {gender === 'male' ? '♂' : '♀'}
  </span>
)

const columnsCustomCell = [
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 200,
    resizable: true,
    sortable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: 'score',
    title: 'Score',
    dataKey: 'score.math',
    width: 100,
    align: Column.Alignment.CENTER,
    sortable: false,
  },
  {
    key: 'gender',
    title: '♂♀',
    dataKey: 'gender',
    cellRenderer: ({ cellData: gender }) => <Gender gender={gender} />,
    width: 50,
    align: Column.Alignment.CENTER,
    sortable: true,
  },
  {
    key: 'birthday',
    title: 'Birthday',
    dataKey: 'birthday',
    // dataGetter: ({ column, rowData }) =>
    //   rowData[column.dataKey],
    width: 200,
    align: Column.Alignment.RIGHT,
    sortable: false,
  },
  {
    key: 'attachments',
    title: 'Attachments',
    dataKey: 'attachments',
    width: 150,
    align: Column.Alignment.CENTER,
  },
  {
    key: 'description',
    title: 'Description',
    dataKey: 'description',
    width: 200,
    resizable: true,
    sortable: true,
  }
];

  const dataGenerator = (i) => ({
  id: `${i}`,
  name: 'Row ' + i,
  gender: i % 2 ? 'male' : 'female',
  score: {
    math: i*70 + 30,
  },
  description: 'Description ' + i,
});

const defaultData = new Array(5000)
  .fill(0)
  .map((x, i) => dataGenerator(i))
  .sort((a, b) => (a.name > b.name ? 1 : -1))

  const defaultSort = { key: 'name', order: SortOrder.ASC }

export default {
  title: 'BaseTable',
  component: BaseTable,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <BaseTable {...args} />;

export const Virtualized = Template.bind({});
Virtualized.args = {
  fixed: true,
  width: 1000,
  height: 500,
  columns: standardColumns,
  data: treeData,
  frozenData: frozenData,
};


export const Resizable = Template.bind({});
Resizable.args = {
  fixed: false,
  width: 1000,
  height: 500,
  columns: resizableColumns,
  data: treeData,
  //frozenData: frozenData,
};

export const FrozenColumns = Template.bind({});
FrozenColumns.args = {
  fixed: true,
  width: 1000,
  height: 500,
  columns: fixedColumns,
  data: treeData,
  //frozenData: frozenData,
};


export const StickyRow = Template.bind({});
StickyRow.args = {
  fixed: true,
  width: 1000,
  height: 500,
  columns: fixedColumns,
  data: treeData,
  frozenData: frozenData,
  //expandColumnKey: expandColumnKey
};

export const Expandable = Template.bind({});
Expandable.args = {
  fixed: true,
  width: 1000,
  height: 500,
  columns: fixedColumns,
  data: treeData,
  frozenData: frozenData,
  expandColumnKey: expandColumnKey
};


export const CustomCell = Template.bind({});
CustomCell.args = {
  fixed: true,
  width: 900,
  height: 500,
  columns: columnsCustomCell,
  data: defaultData,
  sortBy: defaultSort,
  //onColumnSort: onColumnSort
};

export const Sortable = Template.bind({});
Sortable.args = {
  fixed: true,
  width: 500,
  height: 500,
  columns: columnsCustomCell,
  data: defaultData,
  sortBy: defaultSort,
  onColumnSort: (sortBy) => {
    alert('write function for ordering')
  }
};
