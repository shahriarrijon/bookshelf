import { Cursor, SortAlphaDown, SortAlphaUp } from "react-bootstrap-icons";

const TableHeader = ({ columns, sortKey, sortOrder, handleSort }) => {

    const getIcon = (label) => {
        if(label === sortKey) {
            if(sortOrder === "asc") {
                return <SortAlphaDown />
            } else {
                return <SortAlphaUp />
            }
        }
    }

    const handleClick = (column) => {
        if (!column.isSortable) {
          return;
        }
    
        handleSort(column.key);
      };

    return ( 
        <thead>
            <tr>
                {
                    columns.map((column, idx) => {
                        return (
                            <th scope="col" 
                                style={{ cursor: "pointer" }}
                                key={idx} 
                                onClick={() => handleClick(column)}>
                                    { column.label } {getIcon(column.key)}
                            </th>
                        );
                    })
                }
            </tr>
        </thead>
    );
}
 
export default TableHeader;