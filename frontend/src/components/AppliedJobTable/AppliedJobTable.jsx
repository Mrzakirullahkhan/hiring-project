import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

function AppliedJobTable() {
    const dumeArry = [1,2,3,4]
  return (
    <div>
    <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                dumeArry.length <= 0 ? <span>You haven't applied any job yet.</span> : dumeArry.map((item,index) => (
                    <TableRow key={index}>
                        <TableCell>12/01/24</TableCell>
                        <TableCell>backend developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</div>
  )
}

export default AppliedJobTable