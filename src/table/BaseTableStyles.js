const BaseTableStyles = {
    root: {
        // custom scrollbar
        '& ::-webkit-scrollbar': {
            width: 15,
        },

        /* Track */
        '& ::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 4px grey',
            borderRadius: 8,
        },

        /* Handle */
        '& ::-webkit-scrollbar-thumb': {
            background: 'grey',
            borderRadius: 8,
        },

        /* Handle on hover */
        '& ::-webkit-scrollbar-thumb:hover': {
            background: '#d1d1d1'
        },

        '&.BaseTable': {
            boxShadow: '0 2px 4px 0 #eee',
            backgroundColor: '#fff',
            position: 'relative',
            boxSizing: 'border-box',
            //fontSize: '1rem'
        },
        '& .BaseTable--dynamic .BaseTable__row': {
            overflow: 'hidden',
            alignItems: 'stretch',
        },
        '& .BaseTable--disabled': {
            opacity: 0.7,
            pointerEvents: 'none',
        },
        '&.BaseTable:not(.BaseTable--dynamic) .BaseTable__row-cell-text': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        '&.BaseTable .BaseTable__row--frozen .BaseTable__row-cell-text': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        '& .BaseTable__table': {
            backgroundColor: '#fff',
            position: 'absolute',
            top: 0,
            display: 'flex',
            flexDirection: 'column-reverse'
        },
        '& .BaseTable__table-main': {
            outline: '1px solid #eee',
            left: 0,
        },
        '& .BaseTable__table-main .BaseTable__header-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-main .BaseTable__row-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-main .BaseTable__header-cell:last-child': {
            paddingLeft: 15
        },
        '& .BaseTable__table-main .BaseTable__row-cell:last-child': {
            paddingLeft: 15
        },
        '& .BaseTable__table-main .BaseTable__header': {
            backgroundColor: '#f8f8f8',
        },
        '& .BaseTable__table-frozen-left .BaseTable__header': {
            overflow: 'hidden !important',
        },
        '& .BaseTable__table-frozen-right .BaseTable__header': {
            overflow: 'hidden !important',
        },

        '& .BaseTable__table-frozen-left .BaseTable__body': {
            overflow: 'hidden !important',
            overflowY: 'auto !important'
        },
        '& .BaseTable__table-frozen-left': {
            boxShadow: '2px 0 4px 0 #eee',
            top: 0,
            left: 0,
        },
        '& .BaseTable__table-frozen-left .BaseTable__header-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-frozen-left .BaseTable__row-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-frozen-left .BaseTable__header-row': {
            paddingRight: '0 !important',
        },
        '& .BaseTable__table-frozen-left .BaseTable__row': {
            paddingRight: '0 !important',
        },

        '& .BaseTable__table-frozen-right': {
            boxShadow: '-2px 0 4px 0 #eee',
            top: 0,
            right: 0,
        },
        '& .BaseTable__table-frozen-right .BaseTable__header-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-frozen-right .BaseTable__row-cell:first-child': {
            paddingLeft: 15,
        },
        '& .BaseTable__table-frozen-right .BaseTable__header-row': {
            paddingLeft: '0 !important',
        },
        '& .BaseTable__table-frozen-right .BaseTable__row': {
            paddingLeft: '0 !important',
        },
        '& .BaseTable__table-frozen-right .BaseTable__body': {
            overflowY: 'auto !important'
        },

        '& .BaseTable__header': {
            overflow: 'hidden !important'
        },

        '&.BaseTable .BaseTable__header': {
            outline: 'none',
        },

        '&.BaseTable .BaseTable__header-row': {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
        },

        '&.BaseTable .BaseTable__row': {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
        },
        '& .BaseTable__header-row': {
            backgroundColor: '#f8f8f8',
            fontWeight: 700,
        },
        '& .BaseTable__row': {
            backgroundColor: '#fff',
        },
        '& .BaseTable__row:hover': {
            backgroundColor: '#f3f3f3',
        },
        '& .BaseTable__row--hovered': {
            backgroundColor: '#f3f3f3',
        },
        '& .BaseTable__row-expanded': {
            borderBottom: '1px solid #eee'
        },
        '& .BaseTable__header-cell': {
            minWidth: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 7.5px',
            boxSizing: 'border-box',
            position: 'relative',
            cursor: 'default',
            borderLeft: '1px solid #ddd',
        },
        '& .BaseTable__row-cell': {
            minWidth: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 7.5px',
            boxSizing: 'border-box',
            borderLeft: '1px solid #ddd',
        },
        '& .BaseTable__header-cell--align-center': {
            justifyContent: 'center',
            textAlign: 'center',
        },
        '& .BaseTable__row-cell--align-center': {
            justifyContent: 'center',
            textAlign: 'center',
        },
        '& .BaseTable__header-cell--align-right': {
            justifyContent: 'flex-end',
            textAlign: 'right',
        },
        '& .BaseTable__row-cell--align-right': {
            justifyContent: 'flex-end',
            textAlign: 'right',
        },
        '& .BaseTable__header-cell:hover .BaseTable__column-resizer': {
            visibility: 'visible',
            opacity: 0.5,
        },
        '& .BaseTable__header-cell:hover .BaseTable__column-resizer:hover': {
            opacity: 1,
        },
        '& .BaseTable__header-cell .BaseTable__sort-indicator': {
            display: 'none'
        },
        '& .BaseTable__header-cell--sortable:hover': {
            'backgroundColor': '#f3f3f3',
            'cursor': 'pointer',
        },
        '& .BaseTable__header-cell--sortable:not(.BaseTable__header-cell--sorting):hover .BaseTable__sort-indicator': {
            display: 'block',
            color: '#888'
        },
        '& .BaseTable__header-cell--sorting .BaseTable__sort-indicator': {
            display: 'block',
        },
        '& .BaseTable__header-cell--sorting:hover .BaseTable__sort-indicator': {
            display: 'block',
        },
        '& .BaseTable__header-cell--resizing .BaseTable__column-resizer': {
            visibility: 'visible',
            opacity: 1,
        },
        '& .BaseTable__header-cell--resizing .BaseTable__column-resizer::after': {
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden',
            content: '',
            left: '-9999px',
        },
        '& .BaseTable__header-cell-text': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
        },
        '& .BaseTable__header-row--resizing .BaseTable__header-cell': {
            backgroundColor: 'transparent',
            cursor: 'col-resize',
        },
        '& .BaseTable__header-row--resizing .BaseTable__header-cell:not(.BaseTable__header-cell--sorting) .BaseTable__sort-indicator': {
            display: 'none',
        },
        '& .BaseTable__header-row--resizing .BaseTable__header-cell:not(.BaseTable__header-cell--resizing) .BaseTable__column-resizer': {
            visibility: 'hidden',
        },
        '& .BaseTable__column-resizer': {
            width: '3px',
            visibility: 'hidden',
            backgroundColor: '#ccc',
        },
        '& .BaseTable__column-resizer:hover': {
            visibility: 'visible',
            opacity: 1,
        },
        '& .BaseTable__footer': {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            backgroundColor: '#fff',
        },
        '& .BaseTable__resizing-line': {
            cursor: 'col-resize',
            position: 'absolute',
            top: 0,
            backgroundColor: '#ccc',
            width: 3,
            transform: 'translateX(-100%)',
        },
        '& .BaseTable__empty-layer': {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden',
            backgroundColor: '#fff',
        },
        '& .BaseTable__overlay': {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
        },
        '& .BaseTable__overlay > *': {
            pointerEvents: 'auto'
        }
    },
};


export default BaseTableStyles;

