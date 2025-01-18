import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {

 
  const navigate = useNavigate();

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
      
            <tr>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid" />
                </Avatar>
              </TableCell>
              <TableCell>rtufsol</TableCell>
              <TableCell>xyz</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal/>
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div

                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
        
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
