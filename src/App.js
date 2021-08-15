
import './App.css';
import BaseTable, {
  Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow,
} from './table'

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
    return { ...column, frozen, resizable: true, sortable: true, width: 300 }
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

function App() {
  return (
    <div className="App">
       <BaseTable
    fixed
    width={1200}
    height={500}
    columns={fixedColumns}
    data={treeData}
    frozenData={frozenData}
    expandColumnKey={expandColumnKey}
  />
    </div>
  );
}

export default App;
