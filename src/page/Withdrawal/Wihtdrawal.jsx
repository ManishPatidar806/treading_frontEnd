import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20 ">
      <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
      <Table>
        <TableHeader className="border">
          <TableRow>
            <TableHead className="py-5">Date </TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>

            <TableHead className="text-right ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>May 28,2024 at 12:21</p>
            
              </TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell className="text-right text-green-500">Success</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
