const TableBody = ({ items, columns }) => {
    return ( 
        <tbody>
            {
                items.map((item, index) => {
                    return (
                        <tr key={index}>
                            {
                                columns.map((column, idx) => {
                                    if (column.key) return <td key={idx}>{item[column.key]}</td>;
                                    else return column.render(item);
                                })
                            }
                        </tr>
                    );
                })
            }
        </tbody>
    );
}
 
export default TableBody;