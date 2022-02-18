import React from 'react'
import DataTable from 'react-data-table-component';

export const ResultData = (props) => {
    const columns = [
        {
            name: 'ArtistId',
            selector: row => row.artistId,
        },
        {
            name: 'ArtistName',
            selector: row => row.artistName,
        },
    ];

    const data = props.data;
    
    console.log(data);
  return (
      <>
    <div>ResultData</div>
    <DataTable
            columns={columns}
            data={data}
        />
    </>
  )
}
